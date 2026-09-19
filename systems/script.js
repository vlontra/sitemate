const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLabel = (open) => document.documentElement.lang === "en-GB"
  ? (open ? "Close menu" : "Open menu")
  : (open ? "Fechar menu" : "Abrir menu");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const closeNav = () => {
  nav?.classList.remove("is-open");
  header?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", navLabel(false));
};

navToggle?.addEventListener("click", () => {
  const shouldOpen = !nav?.classList.contains("is-open");
  nav?.classList.toggle("is-open", shouldOpen);
  header?.classList.toggle("is-open", shouldOpen);
  document.body.classList.toggle("nav-open", shouldOpen);
  navToggle.setAttribute("aria-expanded", String(shouldOpen));
  navToggle.setAttribute("aria-label", navLabel(shouldOpen));
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) closeNav();
});

const tradeCarousel = document.querySelector("[data-trade-carousel]");
const tradePrev = document.querySelector("[data-trade-prev]");
const tradeNext = document.querySelector("[data-trade-next]");

if (tradeCarousel && tradePrev && tradeNext) {
  const updateTradeControls = () => {
    tradePrev.disabled = tradeCarousel.scrollLeft <= 2;
    tradeNext.disabled = tradeCarousel.scrollLeft + tradeCarousel.clientWidth >= tradeCarousel.scrollWidth - 2;
  };
  const moveTrades = (direction) => {
    const card = tradeCarousel.querySelector(".trade-card");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(tradeCarousel).columnGap) || 0;
    tradeCarousel.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };
  tradePrev.addEventListener("click", () => moveTrades(-1));
  tradeNext.addEventListener("click", () => moveTrades(1));
  tradeCarousel.addEventListener("scroll", updateTradeControls, { passive: true });
  window.addEventListener("resize", updateTradeControls);
  updateTradeControls();
}

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.08 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-faq] .faq-item").forEach((item) => {
  const button = item.querySelector("button");
  const answer = item.querySelector(".faq-answer");

  button?.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll("[data-faq] .faq-item").forEach((otherItem) => {
      const otherButton = otherItem.querySelector("button");
      const otherAnswer = otherItem.querySelector(".faq-answer");
      otherButton?.setAttribute("aria-expanded", "false");
      if (otherAnswer) otherAnswer.hidden = true;
    });

    if (!isOpen) {
      button.setAttribute("aria-expanded", "true");
      if (answer) answer.hidden = false;
    }
  });
});
