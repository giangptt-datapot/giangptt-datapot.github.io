const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const input = path.join(__dirname, "..", "raw", "pl300.html");
const html = fs.readFileSync(input, "utf8");
const $ = cheerio.load(html);

const data = {
  source_url: "https://datapot.vn/khoa-hoc/pl-300-microsoft-power-bi-data-analyst/",
  slug: "pl-300-microsoft-power-bi-data-analyst",
  title: $("h1").first().text().trim() || $("title").text().trim(),
  sections: [],
  images: [],
};

$("img").each((_, el) => {
  const src = $(el).attr("src");
  if (src && !data.images.includes(src)) data.images.push(src);
});

// TODO: refine selector nếu bị dính header/footer
const $root = $("main, article, .entry-content").first();

$root.find("h2,h3,p,ul,ol,pre,code").each((_, el) => {
  const tag = el.tagName.toLowerCase();
  const text = $(el).text().trim();
  if (!text) return;
  data.sections.push({ type: tag, text });
});

fs.writeFileSync(
  path.join(__dirname, "..", "extracted", "pl300.json"),
  JSON.stringify(data, null, 2),
  "utf8"
);

console.log("✅ Extracted -> extracted/pl300.json");
