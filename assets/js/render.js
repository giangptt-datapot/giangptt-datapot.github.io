import { t } from "./i18n.js";
import {
  profile,
  highlights,
  highlightNote,
  journey,
  expertise,
  projects,
  otherWork,
  education,
  activities,
  activitiesNote,
  achievements,
  articles,
  navLinks,
} from "./data.js";

function el(id) {
  return document.getElementById(id);
}

function renderNav(lang) {
  const desktop = el("nav-links-desktop");
  const html = navLinks.map((link) => `<li><a href="${link.href}">${t(link, lang)}</a></li>`).join("");
  if (desktop) desktop.innerHTML = html;

  const footerNav = el("footer-nav");
  if (footerNav) {
    footerNav.innerHTML = navLinks.map((link) => `<li><a href="${link.href}">${t(link, lang)}</a></li>`).join("");
  }
}

function renderHeroSocials(lang) {
  const container = el("hero-socials");
  if (!container) return;
  const items = [];
  items.push(
    profile.linkedin
      ? `<a class="social-link" href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`
      : `<span class="social-link" aria-disabled="true">LinkedIn — ${lang === "en" ? "[Update link]" : "[Cập nhật liên kết]"}</span>`
  );
  items.push(`<a class="social-link" href="${profile.github}" target="_blank" rel="noopener">GitHub</a>`);
  items.push(
    profile.email
      ? `<a class="social-link" href="mailto:${profile.email}">Email</a>`
      : `<span class="social-link" aria-disabled="true">Email — ${lang === "en" ? "[Update address]" : "[Cập nhật địa chỉ]"}</span>`
  );
  container.innerHTML = items.join("");

  const ctaSecondary = el("hero-cta-secondary");
  if (ctaSecondary) {
    if (profile.cvUrl) {
      ctaSecondary.href = profile.cvUrl;
      ctaSecondary.textContent = lang === "en" ? "Download CV" : "Tải CV";
      ctaSecondary.classList.remove("btn-muted");
      ctaSecondary.classList.add("btn-outline");
      ctaSecondary.removeAttribute("aria-disabled");
    } else if (profile.email) {
      ctaSecondary.href = `mailto:${profile.email}`;
      ctaSecondary.textContent = lang === "en" ? "Contact for CV" : "Liên hệ để nhận CV";
      ctaSecondary.classList.remove("btn-muted");
      ctaSecondary.classList.add("btn-outline");
      ctaSecondary.removeAttribute("aria-disabled");
    } else {
      ctaSecondary.href = "#contact";
      ctaSecondary.textContent = lang === "en" ? "Contact for CV" : "Liên hệ để nhận CV";
      ctaSecondary.classList.add("btn-outline");
    }
  }
}

function renderHighlights(lang) {
  const grid = el("highlight-grid");
  if (grid) {
    grid.innerHTML = highlights
      .map(
        (h) => `
      <div class="highlight-item">
        <span class="highlight-value">${h.value}</span>
        <span class="highlight-label">${t(h.label, lang)}</span>
      </div>`
      )
      .join("");
  }
  const note = el("highlight-note");
  if (note) note.textContent = t(highlightNote, lang);
}

function renderJourney(lang) {
  const list = el("journey-list");
  if (!list) return;
  list.innerHTML = journey
    .map(
      (item) => `
    <li class="journey-item">
      <span class="journey-dot" aria-hidden="true"></span>
      <p class="journey-time">${t(item.time, lang)}</p>
      <h3>${t(item.title, lang)}</h3>
      <p>${t(item.desc, lang)}</p>
    </li>`
    )
    .join("");
}

function renderExpertise(lang) {
  const grid = el("expertise-grid");
  if (!grid) return;
  grid.innerHTML = expertise
    .map(
      (card) => `
    <div class="expertise-card reveal">
      <h3>${t(card.title, lang)}</h3>
      <ul>${card.items.map((i) => `<li>${t(i, lang)}</li>`).join("")}</ul>
    </div>`
    )
    .join("");
}

function renderProjects(lang) {
  const container = el("case-study-list");
  if (container) {
    container.innerHTML = projects
      .map((p) => {
        const detailLink = p.hasDetailPage
          ? `<a class="case-study-link" href="projects/${p.slug}.html">${lang === "en" ? "Read full case study" : "Xem case study đầy đủ"} →</a>`
          : "";
        return `
      <article class="case-study reveal">
        <div class="case-study-head">
          <div>
            <p class="project-kicker">${t(p.kicker, lang)}</p>
            <h3>${p.name}</h3>
            <div class="case-study-meta">
              <span>${p.company}</span>
              <span>${t(p.time, lang)}</span>
              <span>${t(p.role, lang)}</span>
            </div>
          </div>
        </div>
        <p class="case-study-desc">${t(p.summary, lang)}</p>
        <div class="case-study-body">
          <div class="case-study-block">
            <h4>${lang === "en" ? "Problem" : "Bài toán"}</h4>
            <p>${t(p.problem, lang)}</p>
          </div>
          <div class="case-study-block">
            <h4>${lang === "en" ? "My role" : "Vai trò của mình"}</h4>
            <p>${t(p.myRole, lang)}</p>
          </div>
          <div class="case-study-block">
            <h4>${lang === "en" ? "What I did" : "Những gì mình đã làm"}</h4>
            <ul>${p.whatIDid.map((w) => `<li>${t(w, lang)}</li>`).join("")}</ul>
          </div>
          <div class="case-study-block">
            <h4>${lang === "en" ? "Outcome" : "Kết quả"}</h4>
            <p class="${p.outcome.vi.startsWith("[") ? "placeholder" : ""}">${t(p.outcome, lang)}</p>
          </div>
        </div>
        <div class="case-study-evidence">
          ${p.evidence.map((e) => `<span><strong>${e.value}</strong> ${t(e.label, lang)}</span>`).join("")}
        </div>
        <div class="case-study-footer">${detailLink}</div>
      </article>`;
      })
      .join("");
  }

  const otherContainer = el("other-work-list");
  if (otherContainer) {
    otherContainer.innerHTML = otherWork
      .map(
        (w) => `
      <article class="work-card reveal">
        <p class="project-kicker">${t(w.kicker, lang)}</p>
        <h3>${t(w.name, lang)}</h3>
        <p>${t(w.desc, lang)}</p>
        <a href="${w.href}" target="_blank" rel="noopener">${t(w.cta, lang)} →</a>
      </article>`
      )
      .join("");
  }
}

function renderEducation(lang) {
  const university = el("edu-university");
  const major = el("edu-major");
  const time = el("edu-time");
  const gpa = el("edu-gpa");
  const coursework = el("edu-coursework");
  const highlightsEl = el("edu-highlights");

  if (university) university.textContent = t(education.university, lang);
  if (major) major.textContent = t(education.major, lang);
  if (time) time.textContent = t(education.time, lang);
  if (gpa) gpa.innerHTML = `<strong>${t(education.gpa, lang)}</strong> GPA`;
  if (coursework) {
    coursework.innerHTML = education.coursework.map((c) => `<li>${t(c, lang)}</li>`).join("");
  }
  if (highlightsEl) {
    highlightsEl.innerHTML = education.highlights
      .map(
        (h) => `
      <div class="activity-field">
        <h4>${t(h.title, lang)}</h4>
        <p>${t(h.desc, lang)}</p>
      </div>`
      )
      .join("");
  }
}

function renderActivities(lang) {
  const grid = el("activity-grid");
  if (grid) {
    grid.innerHTML = activities
      .map(
        (a) => `
      <article class="activity-card reveal">
        <div class="activity-card-head">
          <h3>${t(a.org, lang)}</h3>
          <span class="tag">${t(a.category, lang)}</span>
        </div>
        <p class="activity-meta">${t(a.role, lang)} · ${t(a.time, lang)}</p>
        <div class="activity-field">
          <h4>${lang === "en" ? "Description" : "Mô tả"}</h4>
          <p>${t(a.description, lang)}</p>
        </div>
        <div class="activity-field">
          <h4>${lang === "en" ? "Contribution" : "Đóng góp"}</h4>
          <p>${t(a.contribution, lang)}</p>
        </div>
        <div class="activity-field">
          <h4>${lang === "en" ? "Result" : "Kết quả"}</h4>
          <p>${t(a.result, lang)}</p>
        </div>
      </article>`
      )
      .join("");
  }
  const note = el("activities-note");
  if (note) note.textContent = t(activitiesNote, lang);
}

function renderAchievements(lang) {
  const grid = el("achievement-grid");
  if (!grid) return;
  grid.innerHTML = achievements
    .map(
      (a) => `
    <article class="achievement-card reveal">
      <span class="tag achievement-type">${t(a.type, lang)}</span>
      <h3>${t(a.name, lang)}</h3>
      <p class="achievement-org">${t(a.org, lang)}</p>
      <p class="achievement-date">${t(a.date, lang)}</p>
      ${a.url ? `<a href="${a.url}" target="_blank" rel="noopener">${lang === "en" ? "View credential" : "Xem chứng nhận"} →</a>` : ""}
    </article>`
    )
    .join("");
}

function renderArticles(lang) {
  const grid = el("article-grid");
  if (!grid) return;
  grid.innerHTML = articles
    .map(
      (a) => `
    <article class="article-card reveal">
      <div class="article-thumb">${a.thumbLabel}</div>
      <div class="article-body">
        <p class="article-category">${t(a.category, lang)}</p>
        <h3>${a.title}</h3>
        <p>${t(a.desc, lang)}</p>
        <a href="${a.href}" target="_blank" rel="noopener">${t(a.cta, lang)} →</a>
      </div>
    </article>`
    )
    .join("");
}

function renderClosingContact(lang) {
  const primaryCta = el("contact-cta-primary");
  if (primaryCta) {
    if (profile.email) primaryCta.href = `mailto:${profile.email}`;
    else if (profile.linkedin) primaryCta.href = profile.linkedin;
    else primaryCta.href = profile.github;
  }

  const container = el("closing-socials");
  if (!container) return;
  const items = [];
  items.push(
    profile.linkedin
      ? `<a class="social-link" href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`
      : `<span class="social-link" aria-disabled="true">LinkedIn — ${lang === "en" ? "[Update link]" : "[Cập nhật liên kết]"}</span>`
  );
  items.push(`<a class="social-link" href="${profile.github}" target="_blank" rel="noopener">GitHub</a>`);
  items.push(
    profile.email
      ? `<a class="social-link" href="mailto:${profile.email}">${profile.email}</a>`
      : `<span class="social-link" aria-disabled="true">Email — ${lang === "en" ? "[Update address]" : "[Cập nhật địa chỉ]"}</span>`
  );
  container.innerHTML = items.join("");
}

export function renderAll(lang) {
  renderNav(lang);
  renderHeroSocials(lang);
  renderHighlights(lang);
  renderJourney(lang);
  renderExpertise(lang);
  renderProjects(lang);
  renderEducation(lang);
  renderActivities(lang);
  renderAchievements(lang);
  renderArticles(lang);
  renderClosingContact(lang);
}
