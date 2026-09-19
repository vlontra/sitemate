(() => {
  "use strict";

  const toggle = document.querySelector("[data-price-toggle]");
  const amount = document.querySelector("[data-price-amount]");
  const unit = document.querySelector("[data-price-unit]");
  const callLink = document.querySelector("[data-pricing-whatsapp]");
  if (!toggle || !amount || !unit || !callLink) return;

  let annual = false;
  const render = () => {
    const english = document.documentElement.lang.startsWith("en");
    amount.textContent = annual ? "£990" : "£99";
    unit.textContent = annual ? (english ? "/yr" : "/ano") : (english ? "/mo" : "/mês");
    toggle.setAttribute("aria-checked", String(annual));
    const message = english
      ? `Hello! I'd like to book a call about Contractor Advanced (${annual ? "£990 per year" : "£99 per month"}).`
      : `Olá! Quero agendar uma chamada sobre o Contractor Advanced (${annual ? "£990 por ano" : "£99 por mês"}).`;
    callLink.href = `https://wa.me/447404400524?text=${encodeURIComponent(message)}`;
  };

  toggle.addEventListener("click", () => {
    annual = !annual;
    render();
  });
  document.addEventListener("groundworks:languagechange", render);
  render();
})();
