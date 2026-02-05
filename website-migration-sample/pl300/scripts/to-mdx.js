const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "..", "extracted", "pl300.json");
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

let mdx = `---
title: "${(data.title || "").replaceAll('"', '\\"')}"
slug: "${data.slug}"
source_url: "${data.source_url}"
---

`;

for (const s of data.sections) {
  if (s.type === "h2") mdx += `## ${s.text}\n\n`;
  else if (s.type === "h3") mdx += `### ${s.text}\n\n`;
  else if (s.type === "p") mdx += `${s.text}\n\n`;
  else if (s.type === "ul" || s.type === "ol") mdx += `${s.text}\n\n`;
  else if (s.type === "pre" || s.type === "code")
    mdx += `\n\`\`\`\n${s.text}\n\`\`\`\n\n`;
}

fs.writeFileSync(path.join(__dirname, "..", "output", "pl300.mdx"), mdx, "utf8");
console.log("✅ Generated -> output/pl300.mdx");
