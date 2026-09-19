(() => {
  "use strict";

  const dataConfig = window.GROUNDWORKS_DIRECTORY_CONFIG || {};
  let traders = [];

  const copy = {
    pt: {
      "nav.home": "Início",
      "nav.professionals": "Profissionais",
      "nav.categories": "Categorias",
      "nav.systems": "GroundWorks Systems",
      "nav.register": "Cadastrar empresa",
      "hero.eyebrow": "Profissionais brasileiros no Reino Unido",
      "hero.title": "Encontre o profissional certo perto de você.",
      "hero.description": "Busque por especialidade e região para encontrar quem pode ajudar no seu próximo projeto.",
      "search.locationLabel": "Onde você precisa?",
      "search.tradeLabel": "Que tipo de serviço?",
      "search.button": "Buscar",
      "categories.eyebrow": "Explore por especialidade",
      "categories.title": "Serviços para todos os projetos",
      "listings.eyebrow": "Diretório GroundWorks",
      "listings.title": "Profissionais disponíveis",
      "listings.loading": "Carregando profissionais…",
      "listings.loadMore": "Ver mais profissionais",
      "error.title": "Não foi possível carregar os profissionais.",
      "error.text": "Tente novamente em instantes.",
      "error.retry": "Tentar novamente",
      "sort.label": "Ordenar por",
      "filters.clear": "Limpar filtro",
      "empty.title": "Nenhum profissional encontrado",
      "empty.text": "Tente outra região ou especialidade.",
      "empty.button": "Ver todos",
      "join.eyebrow": "Você trabalha com construção ou manutenção?",
      "join.title": "Cadastre sua empresa gratuitamente.",
      "join.text": "O cadastro pelo WhatsApp estará disponível em breve.",
      "footer.description": "Profissionais brasileiros para projetos em Londres e região.",
      "footer.note": "Perfis em fase de confirmação.",
      "profile.back": "Voltar ao diretório",
      "profile.loading": "Carregando perfil…"
    },
    en: {
      "nav.home": "Home",
      "nav.professionals": "Professionals",
      "nav.categories": "Categories",
      "nav.systems": "GroundWorks Systems",
      "nav.register": "List your business",
      "hero.eyebrow": "Brazilian professionals in the United Kingdom",
      "hero.title": "Find the right professional near you.",
      "hero.description": "Search by trade and service area to find someone for your next project.",
      "search.locationLabel": "Where do you need help?",
      "search.tradeLabel": "What service do you need?",
      "search.button": "Search",
      "categories.eyebrow": "Browse by trade",
      "categories.title": "Services for every project",
      "listings.eyebrow": "GroundWorks Directory",
      "listings.title": "Available professionals",
      "listings.loading": "Loading professionals…",
      "listings.loadMore": "Show more professionals",
      "error.title": "We couldn't load the professionals.",
      "error.text": "Please try again in a moment.",
      "error.retry": "Try again",
      "sort.label": "Sort by",
      "filters.clear": "Clear filter",
      "empty.title": "No professionals found",
      "empty.text": "Try another location or trade.",
      "empty.button": "View everyone",
      "join.eyebrow": "Do you work in construction or property maintenance?",
      "join.title": "List your business for free.",
      "join.text": "WhatsApp registration will be available soon.",
      "footer.description": "Brazilian professionals for projects across London and nearby areas.",
      "footer.note": "Profiles are currently being confirmed.",
      "profile.back": "Back to directory",
      "profile.loading": "Loading profile…"
    }
  };

  const ui = {
    pt: {
      allLocations: "Todas as regiões",
      greaterLondon: "Londres e região",
      allTrades: "Todos os serviços",
      sortOptions: [
        ["recommended", "Mais completos"],
        ["az", "Nome: A–Z"],
        ["za", "Nome: Z–A"],
        ["website", "Com website primeiro"]
      ],
      result: (count) => `${count} ${count === 1 ? "profissional encontrado" : "profissionais encontrados"}`,
      active: (trade, location) => [trade, location].filter(Boolean).join(" · "),
      showPhone: "Mostrar telefone",
      website: "Ver website",
      profile: "Ver perfil completo",
      noWebsite: "Website não informado",
      comingSoon: "Esse link será ativado quando os dados finais estiverem definidos.",
      profileServices: "Especialidades",
      serviceArea: "Área de atendimento",
      profileNotice: "Este perfil está em fase de confirmação. Os dados podem ser atualizados ou removidos a pedido do profissional.",
      profileMissing: "Perfil não encontrado",
      profileMissingText: "O profissional que você procura não está disponível ou o endereço está incorreto.",
      profileMissingButton: "Voltar ao diretório",
      profileLoadError: "Não foi possível carregar este perfil. Tente novamente em instantes.",
      count: (number) => `${number} ${number === 1 ? "profissional" : "profissionais"}`
    },
    en: {
      allLocations: "All locations",
      greaterLondon: "London and nearby areas",
      allTrades: "All services",
      sortOptions: [
        ["recommended", "Most complete"],
        ["az", "Name: A–Z"],
        ["za", "Name: Z–A"],
        ["website", "With website first"]
      ],
      result: (count) => `${count} ${count === 1 ? "professional found" : "professionals found"}`,
      active: (trade, location) => [trade, location].filter(Boolean).join(" · "),
      showPhone: "Show phone number",
      website: "View website",
      profile: "View full profile",
      noWebsite: "Website not provided",
      comingSoon: "This link will be activated when the final details are available.",
      profileServices: "Specialities",
      serviceArea: "Service area",
      profileNotice: "This profile is being confirmed. Details can be updated or removed at the professional's request.",
      profileMissing: "Profile not found",
      profileMissingText: "The professional you are looking for is unavailable or the address is incorrect.",
      profileMissingButton: "Back to directory",
      profileLoadError: "We couldn't load this profile. Please try again in a moment.",
      count: (number) => `${number} ${number === 1 ? "professional" : "professionals"}`
    }
  };

  const categories = {
    cleaner: { pt: "Limpeza", en: "Cleaning", icon: "sparkle" },
    electrician: { pt: "Eletricista", en: "Electrician", icon: "bolt" },
    painter: { pt: "Pintura e decoração", en: "Painting & decorating", icon: "paint" },
    builder: { pt: "Construção e reformas", en: "Building & renovation", icon: "hardhat" },
    roofer: { pt: "Telhados", en: "Roofing", icon: "roof" },
    landscaper: { pt: "Jardinagem e paisagismo", en: "Gardening & landscaping", icon: "leaf" },
    plumber: { pt: "Encanamento", en: "Plumbing", icon: "drop" },
    carpenter: { pt: "Carpintaria", en: "Carpentry", icon: "ruler" },
    flooring: { pt: "Pisos e azulejos", en: "Flooring & tiling", icon: "tiles" },
    plasterer: { pt: "Plaster e drywall", en: "Plastering & drywall", icon: "trowel" },
    handyman: { pt: "Handyman", en: "Handyman", icon: "tools" },
    "interior-designer": { pt: "Design de interiores", en: "Interior design", icon: "plan" }
  };

  const iconPaths = {
    sparkle: '<path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z"/>',
    bolt: '<path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>',
    paint: '<path d="M4 5h11v7H4z"/><path d="M15 8h3v5h-6v3"/><path d="M10 16h4v6h-4z"/>',
    hardhat: '<path d="M4 16a8 8 0 0 1 16 0"/><path d="M3 16h18v4H3z"/><path d="M12 8v8"/>',
    roof: '<path d="m3 12 9-7 9 7"/><path d="M6 11v9h12v-9"/><path d="M10 20v-6h4v6"/>',
    leaf: '<path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z"/><path d="M4 21c3-5 7-8 12-11"/>',
    drop: '<path d="M12 3s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z"/><path d="M9 16a3 3 0 0 0 3 2"/>',
    ruler: '<path d="m4 17 13-13 3 3L7 20H4v-3Z"/><path d="m14 7 3 3M11 10l2 2M8 13l3 3"/>',
    tiles: '<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/>',
    trowel: '<path d="M3 15h12L9 9 3 15Z"/><path d="m10 11 5-5"/><path d="M14 5h6v3h-6z"/>',
    tools: '<path d="m14 6 4-4 4 4-4 4"/><path d="m16 8-8 8"/><path d="m9 18-3 3-3-3 3-3"/><path d="m5 4 15 15"/>',
    plan: '<path d="M4 4h16v16H4z"/><path d="M9 4v7h11M4 15h9v5"/>'
  };

  const state = {
    language: localStorage.getItem("groundworks-language") === "en" ? "en" : "pt",
    trade: "all",
    location: "all",
    sort: "recommended",
    visible: 12,
    dataReady: false,
    dataError: false
  };

  const londonExceptions = new Set(["Oxford", "Bristol", "Dormansland"]);

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const validWebsite = (value) => {
    try {
      const url = new URL(value);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch { return ""; }
  };

  const validImage = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : "";
    } catch { return ""; }
  };

  const categoryName = (key) => categories[key]?.[state.language] || key;
  const icon = (key, className = "") => `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[categories[key]?.icon] || iconPaths.tools}</svg>`;
  const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("").toUpperCase();

  function normalizeTrader(record) {
    return {
      id: String(record.id ?? ""),
      name: String(record.name ?? ""),
      category: String(record.category ?? ""),
      services: Array.isArray(record.services) ? record.services.filter((value) => typeof value === "string") : [],
      area: String(record.area ?? ""),
      phone: String(record.phone ?? ""),
      website: String(record.website ?? ""),
      description: String(record.description ?? ""),
      image_url: String(record.image_url ?? ""),
      featured: record.featured === true
    };
  }

  async function loadTraders() {
    if (dataConfig.source !== "supabase" || !dataConfig.supabaseUrl || !dataConfig.publishableKey) {
      throw new Error("Directory data source is not configured");
    }

    const allRecords = [];
    const pageSize = 500;
    for (let offset = 0; ; offset += pageSize) {
      const url = new URL("/rest/v1/professionals", dataConfig.supabaseUrl);
      url.searchParams.set("select", "id,name,category,services,area,phone,website,description,image_url,featured");
      url.searchParams.set("status", "eq.published");
      url.searchParams.set("order", "name.asc");
      url.searchParams.set("limit", String(pageSize));
      url.searchParams.set("offset", String(offset));

      const response = await fetch(url, {
        headers: { apikey: dataConfig.publishableKey },
        cache: "no-store"
      });
      if (!response.ok) throw new Error(`Directory request failed (${response.status})`);
      const page = await response.json();
      if (!Array.isArray(page)) throw new Error("Directory response is invalid");
      allRecords.push(...page);
      if (page.length < pageSize) break;
    }

    return allRecords.map(normalizeTrader).filter((record) => record.id && record.name);
  }

  function applyLanguage() {
    document.documentElement.lang = state.language === "pt" ? "pt-BR" : "en-GB";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const translated = copy[state.language][element.dataset.i18n];
      if (translated) element.textContent = translated;
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.textContent = state.language === "pt" ? "EN" : "PT";
      button.setAttribute("aria-label", state.language === "pt" ? "Mudar idioma para inglês" : "Switch language to Portuguese");
    });
    document.title = document.body.dataset.page === "profile"
      ? (state.language === "pt" ? "Perfil profissional | GroundWorks Directory" : "Professional profile | GroundWorks Directory")
      : "GroundWorks Directory";
  }

  function showToast(message = ui[state.language].comingSoon) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  }

  function bindSharedControls() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        state.language = state.language === "pt" ? "en" : "pt";
        localStorage.setItem("groundworks-language", state.language);
        applyLanguage();
        if (state.dataReady && document.body.dataset.page === "directory") renderDirectory();
        if (state.dataReady && document.body.dataset.page === "profile") renderProfile();
        if (state.dataError) showDataError();
      });
    });

    document.querySelectorAll("[data-coming-soon]").forEach((button) => {
      button.addEventListener("click", () => showToast());
    });

    document.querySelectorAll("[data-current-year]").forEach((element) => {
      element.textContent = new Date().getFullYear();
    });

    const header = document.querySelector("[data-header]");
    if (header && !header.classList.contains("site-header-solid")) {
      const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 28);
      updateHeader();
      window.addEventListener("scroll", updateHeader, { passive: true });
    }

    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(open));
        nav.classList.toggle("is-open", open);
        header?.classList.toggle("is-open", open);
        document.body.classList.toggle("nav-open", open);
      });
      nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        header?.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      }));
    }
  }

  function renderFilters() {
    const locationSelect = document.querySelector("[data-location]");
    const tradeSelect = document.querySelector("[data-trade]");
    const sortSelect = document.querySelector("[data-sort]");
    if (!locationSelect || !tradeSelect || !sortSelect) return;

    const areas = [...new Set(traders.map((trader) => trader.area).filter((area) => area && area !== "London"))]
      .sort((a, b) => a.localeCompare(b, "en"));

    locationSelect.innerHTML = [
      `<option value="all">${ui[state.language].allLocations}</option>`,
      `<option value="greater-london">${ui[state.language].greaterLondon}</option>`,
      ...areas.map((area) => `<option value="${escapeHtml(area)}">${escapeHtml(area)}</option>`)
    ].join("");
    locationSelect.value = state.location;

    tradeSelect.innerHTML = [
      `<option value="all">${ui[state.language].allTrades}</option>`,
      ...Object.keys(categories).map((key) => `<option value="${key}">${escapeHtml(categoryName(key))}</option>`)
    ].join("");
    tradeSelect.value = state.trade;

    sortSelect.innerHTML = ui[state.language].sortOptions
      .map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`)
      .join("");
    sortSelect.value = state.sort;
  }

  function renderCategories() {
    const track = document.querySelector("[data-category-track]");
    if (!track) return;
    track.innerHTML = Object.entries(categories).map(([key, meta]) => {
      const count = traders.filter((trader) => trader.category === key || trader.services.includes(key)).length;
      return `
        <button class="category-card${state.trade === key ? " is-active" : ""}" type="button" data-category="${key}" aria-pressed="${state.trade === key}">
          <span class="category-card-icon">${icon(key)}</span>
          <span>
            <strong>${escapeHtml(meta[state.language])}</strong><br />
            <small>${escapeHtml(ui[state.language].count(count))}</small>
          </span>
        </button>`;
    }).join("");

    track.querySelectorAll("[data-category]").forEach((button) => {
      button.addEventListener("click", () => {
        state.trade = state.trade === button.dataset.category ? "all" : button.dataset.category;
        state.visible = 12;
        document.querySelector("[data-trade]").value = state.trade;
        renderDirectory();
        document.querySelector("#profissionais")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function filteredTraders() {
    const filtered = traders.filter((trader) => {
      const matchesTrade = state.trade === "all" || trader.category === state.trade || trader.services.includes(state.trade);
      const matchesLocation = state.location === "all"
        || (state.location === "greater-london" && !londonExceptions.has(trader.area))
        || trader.area === state.location;
      return matchesTrade && matchesLocation;
    });

    return filtered.sort((a, b) => {
      if (state.sort === "az") return a.name.localeCompare(b.name, state.language);
      if (state.sort === "za") return b.name.localeCompare(a.name, state.language);
      if (state.sort === "website") return Number(Boolean(b.website)) - Number(Boolean(a.website)) || a.name.localeCompare(b.name);
      if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
      const completeness = (record) => Number(Boolean(record.website)) * 2 + Number(Boolean(record.phone)) + record.services.length * 0.05;
      return completeness(b) - completeness(a) || a.name.localeCompare(b.name);
    });
  }

  function traderCard(trader) {
    const website = validWebsite(trader.website);
    const image = validImage(trader.image_url);
    const serviceTags = trader.services.slice(0, 3)
      .map((service) => `<span class="service-tag">${escapeHtml(categoryName(service))}</span>`)
      .join("");
    return `
      <article class="trader-card">
        <div class="trader-visual${image ? " has-image" : ""}">
          ${image ? `<img src="${escapeHtml(image)}" alt="" loading="lazy" />` : `
            <span class="trader-visual-icon">${icon(trader.category)}</span>
            <span class="trader-initials" aria-hidden="true">${escapeHtml(initials(trader.name))}</span>`}
        </div>
        <div class="trader-content">
          <span class="category-label">${escapeHtml(categoryName(trader.category))}</span>
          <h3>${escapeHtml(trader.name)}</h3>
          <span class="location-row">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>
            ${escapeHtml(trader.area)}
          </span>
          <div class="service-tags">${serviceTags}</div>
          <div class="card-actions">
            ${trader.phone ? `<button class="card-action" type="button" data-phone="${escapeHtml(trader.phone)}">${ui[state.language].showPhone}</button>` : ""}
            ${website ? `<a class="card-action card-action-primary" href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">${ui[state.language].website}</a>` : `<span class="card-action" aria-disabled="true">${ui[state.language].noWebsite}</span>`}
          </div>
          <a class="card-profile-link" href="profile.html?id=${encodeURIComponent(trader.id)}">${ui[state.language].profile}</a>
        </div>
      </article>`;
  }

  function bindPhoneButtons(root = document) {
    root.querySelectorAll("[data-phone]").forEach((button) => {
      button.addEventListener("click", () => {
        button.textContent = button.dataset.phone;
        button.classList.add("is-revealed");
        button.removeAttribute("data-phone");
      }, { once: true });
    });
  }

  function renderListings() {
    if (!state.dataReady) return;
    const grid = document.querySelector("[data-trader-grid]");
    const empty = document.querySelector("[data-empty]");
    const loadMore = document.querySelector("[data-load-more]");
    const summary = document.querySelector("[data-result-summary]");
    const activeFilter = document.querySelector("[data-active-filter]");
    const activeFilterLabel = document.querySelector("[data-active-filter-label]");
    if (!grid || !empty || !loadMore || !summary) return;

    const result = filteredTraders();
    summary.textContent = ui[state.language].result(result.length);
    grid.innerHTML = result.slice(0, state.visible).map(traderCard).join("");
    empty.hidden = result.length > 0;
    grid.hidden = result.length === 0;
    loadMore.hidden = result.length <= state.visible;
    loadMore.parentElement.hidden = result.length <= state.visible;

    const tradeLabel = state.trade === "all" ? "" : categoryName(state.trade);
    const locationLabel = state.location === "all" ? "" : state.location === "greater-london" ? ui[state.language].greaterLondon : state.location;
    if (activeFilter && activeFilterLabel) {
      activeFilter.hidden = !tradeLabel && !locationLabel;
      activeFilterLabel.textContent = ui[state.language].active(tradeLabel, locationLabel);
    }
    bindPhoneButtons(grid);
  }

  function renderDirectory() {
    if (!state.dataReady) return;
    applyLanguage();
    renderFilters();
    renderCategories();
    renderListings();
  }

  function showDataError() {
    if (document.body.dataset.page === "directory") {
      const loading = document.querySelector("[data-directory-loading]");
      const error = document.querySelector("[data-load-error]");
      if (loading) loading.hidden = true;
      if (error) error.hidden = false;
      document.querySelector("[data-trader-grid]").hidden = true;
      document.querySelector("[data-empty]").hidden = true;
      document.querySelector(".load-more-wrap").hidden = true;
      document.querySelector("[data-result-summary]").textContent = "";
      return;
    }

    const root = document.querySelector("[data-profile-root]");
    if (root) root.innerHTML = `
      <section class="profile-not-found">
        <h1>${copy[state.language]["error.title"]}</h1>
        <p>${ui[state.language].profileLoadError}</p>
        <button class="button button-dark" type="button" data-retry>${copy[state.language]["error.retry"]}</button>
      </section>`;
  }

  async function hydrateData() {
    state.dataReady = false;
    state.dataError = false;
    const directoryLoading = document.querySelector("[data-directory-loading]");
    const directoryError = document.querySelector("[data-load-error]");
    if (directoryLoading) directoryLoading.hidden = false;
    if (directoryError) directoryError.hidden = true;
    if (document.body.dataset.page === "profile") {
      const root = document.querySelector("[data-profile-root]");
      if (root) root.innerHTML = `<div class="profile-loading" data-i18n="profile.loading">${copy[state.language]["profile.loading"]}</div>`;
    }

    try {
      traders = await loadTraders();
      state.dataReady = true;
      if (directoryLoading) directoryLoading.hidden = true;
      if (document.body.dataset.page === "directory") renderDirectory();
      if (document.body.dataset.page === "profile") renderProfile();
    } catch (error) {
      console.error("GroundWorks directory could not load:", error);
      state.dataError = true;
      showDataError();
    }
  }

  function initDirectory() {
    const form = document.querySelector("[data-search-form]");
    const location = document.querySelector("[data-location]");
    const trade = document.querySelector("[data-trade]");
    const sort = document.querySelector("[data-sort]");

    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      state.location = location.value;
      state.trade = trade.value;
      state.visible = 12;
      renderDirectory();
      document.querySelector("#profissionais")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    sort?.addEventListener("change", () => {
      state.sort = sort.value;
      state.visible = 12;
      renderListings();
    });

    document.querySelector("[data-load-more]")?.addEventListener("click", () => {
      state.visible += 12;
      renderListings();
    });

    const reset = () => {
      state.trade = "all";
      state.location = "all";
      state.visible = 12;
      renderDirectory();
    };
    document.querySelector("[data-reset]")?.addEventListener("click", reset);
    document.querySelector("[data-clear-filter]")?.addEventListener("click", reset);

    const track = document.querySelector("[data-category-track]");
    document.querySelector("[data-rail-prev]")?.addEventListener("click", () => track?.scrollBy({ left: -420, behavior: "smooth" }));
    document.querySelector("[data-rail-next]")?.addEventListener("click", () => track?.scrollBy({ left: 420, behavior: "smooth" }));

    document.querySelector("[data-retry]")?.addEventListener("click", hydrateData);
    hydrateData();
  }

  function renderProfile() {
    if (!state.dataReady) return;
    applyLanguage();
    if (window.scrollY !== 0) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const root = document.querySelector("[data-profile-root]");
    if (!root) return;
    const id = new URLSearchParams(window.location.search).get("id");
    const trader = traders.find((record) => record.id === id);

    if (!trader) {
      root.innerHTML = `
        <section class="profile-not-found">
          <h1>${ui[state.language].profileMissing}</h1>
          <p>${ui[state.language].profileMissingText}</p>
          <a class="button button-dark" href="./">${ui[state.language].profileMissingButton}</a>
        </section>`;
      return;
    }

    document.title = `${trader.name} | GroundWorks Directory`;
    const website = validWebsite(trader.website);
    const image = validImage(trader.image_url);
    root.innerHTML = `
      <nav class="profile-breadcrumb" aria-label="Breadcrumb">
        <a href="./">${copy[state.language]["nav.home"]}</a><span aria-hidden="true">/</span><span>${escapeHtml(categoryName(trader.category))}</span>
      </nav>
      <article class="profile-card">
        <div class="profile-visual${image ? " has-image" : ""}">
          ${image ? `<img src="${escapeHtml(image)}" alt="" />` : `
            <span class="profile-visual-icon">${icon(trader.category)}</span>
            <span class="profile-initials" aria-hidden="true">${escapeHtml(initials(trader.name))}</span>`}
        </div>
        <div class="profile-content">
          <span class="category-label">${escapeHtml(categoryName(trader.category))}</span>
          <h1>${escapeHtml(trader.name)}</h1>
          ${trader.description ? `<p class="profile-description">${escapeHtml(trader.description)}</p>` : ""}
          <span class="location-row profile-location">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>
            ${escapeHtml(trader.area)}
          </span>
          <section class="profile-section">
            <h2>${ui[state.language].profileServices}</h2>
            <div class="profile-services">${trader.services.map((service) => `<span class="service-tag">${escapeHtml(categoryName(service))}</span>`).join("")}</div>
          </section>
          <section class="profile-section">
            <h2>${ui[state.language].serviceArea}</h2>
            <span class="location-row">${escapeHtml(trader.area)}</span>
          </section>
          <div class="profile-actions">
            ${trader.phone ? `<button class="button button-outline" type="button" data-phone="${escapeHtml(trader.phone)}">${ui[state.language].showPhone}</button>` : ""}
            ${website ? `<a class="button button-dark" href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">${ui[state.language].website}</a>` : ""}
          </div>
          <p class="profile-notice">${ui[state.language].profileNotice}</p>
        </div>
      </article>`;
    bindPhoneButtons(root);
  }

  applyLanguage();
  bindSharedControls();
  if (document.body.dataset.page === "directory") initDirectory();
  if (document.body.dataset.page === "profile") {
    document.querySelector("[data-profile-root]")?.addEventListener("click", (event) => {
      if (event.target.closest("[data-retry]")) hydrateData();
    });
    hydrateData();
  }
})();
