import { getLang, setLang, applyStaticI18n } from "./i18n.js";
import { renderAll } from "./render.js";

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

function initScrollSpy() {
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const links = Array.from(document.querySelectorAll(".nav-links a"));
  if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
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

function initLangSwitch() {
  const buttons = document.querySelectorAll("[data-lang-option]");
  if (!buttons.length) return;

  function applyLang(lang) {
    applyStaticI18n(lang);
    renderAll(lang);
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

  applyLang(getLang());
}

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initNavToggle();
  initLangSwitch();
  initScrollSpy();
  initReveal();
});
