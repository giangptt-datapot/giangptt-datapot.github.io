import { getLang, setLang, applyStaticI18n } from "./i18n.js";

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initNavToggle() {
  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");
  if (!navToggle || !nav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest(".nav-links a")) {
      nav.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function initLangSwitch() {
  const buttons = document.querySelectorAll("[data-lang-option]");
  if (!buttons.length) return;

  function applyLang(lang) {
    applyStaticI18n(lang);
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-option") === lang));
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-option");
      setLang(lang);
      applyLang(lang);
    });
  });

  applyLang(getLang());
}

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initNavToggle();
  initLangSwitch();
});
