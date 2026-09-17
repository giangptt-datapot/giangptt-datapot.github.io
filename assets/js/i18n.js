const LANG_KEY = "ptg-lang";

export function getLang() {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "vi") return stored;
  } catch (err) {
    /* localStorage unavailable — fall back to default */
  }
  return "vi";
}

export function setLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (err) {
    /* ignore write failures (private mode, etc.) */
  }
}

export function t(field, lang) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.vi || "";
}

/** Applies translations to any static markup carrying data-vi / data-en attributes. */
export function applyStaticI18n(lang) {
  document.documentElement.lang = lang === "en" ? "en" : "vi";

  document.querySelectorAll("[data-vi]").forEach((el) => {
    const value = lang === "en" ? el.getAttribute("data-en") || el.getAttribute("data-vi") : el.getAttribute("data-vi");
    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-vi-aria]").forEach((el) => {
    const value = lang === "en" ? el.getAttribute("data-en-aria") || el.getAttribute("data-vi-aria") : el.getAttribute("data-vi-aria");
    el.setAttribute("aria-label", value);
  });
}
