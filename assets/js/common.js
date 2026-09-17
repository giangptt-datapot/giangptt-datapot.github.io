import { getLang, setLang, applyStaticI18n } from "./i18n.js";
import { renderChrome } from "./render.js";

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

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  // Content is visible by default (see CSS). Only opt into the hidden→visible
  // transition once the observer that guarantees revealing it again is set up.
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.documentElement.classList.add("reveal-enabled");
  items.forEach((item) => observer.observe(item));
}

function refreshReveal() {
  // Re-run once dynamically-rendered content adds new .reveal nodes.
  requestAnimationFrame(initReveal);
}

/**
 * Shared bootstrap for every page: footer year, mobile nav, language switch,
 * chrome (nav/footer), and progressive-enhancement scroll reveal.
 * `renderContent(lang)`, if given, renders the page's own data-driven sections.
 */
export function bootstrap(renderContent) {
  initYear();
  initNavToggle();

  const buttons = document.querySelectorAll("[data-lang-option]");

  function applyLang(lang) {
    applyStaticI18n(lang);
    renderChrome(lang);
    if (renderContent) renderContent(lang);
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-option") === lang));
    });
    refreshReveal();
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-option");
      setLang(lang);
      applyLang(lang);
    });
  });

  document.addEventListener("DOMContentLoaded", () => applyLang(getLang()));
}
