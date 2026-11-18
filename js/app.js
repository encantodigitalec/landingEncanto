(function () {
  "use strict";

  const config = window.ENCANTO_DIGITAL || { whatsappNumero: "", invitaciones: [] };
  const catalog = document.querySelector("#catalog-grid");
  const filters = document.querySelector("#catalog-filters");
  const emptyState = document.querySelector("#catalog-empty");
  const contactButton = document.querySelector("#contact-button");
  const categoryNames = {
    bodas: "Bodas",
    "15-anos": "15 años",
    "baby-shower": "Baby shower",
    graduaciones: "Graduaciones"
  };

  function validModel(model) {
    if (!model || model.activo !== true || typeof model.id !== "string" ||
        typeof model.nombre !== "string" || typeof model.estilo !== "string" ||
        typeof model.categoria !== "string" || !/^[a-z0-9-]+$/.test(model.categoria) ||
        typeof model.imagen !== "string" || typeof model.demoUrl !== "string") {
      return false;
    }

    let imageUrl;
    let demoUrl;
    try {
      imageUrl = new URL(model.imagen, document.baseURI);
      demoUrl = new URL(model.demoUrl);
    } catch {
      return false;
    }

    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(model.id) &&
      Boolean(model.nombre.trim() && model.estilo.trim()) &&
      /^assets\/invitaciones\/[a-z0-9_-]+\.(?:svg|png|jpe?g|webp)$/i.test(model.imagen) &&
      imageUrl.origin === window.location.origin &&
      !model.imagen.startsWith("/") && !model.imagen.split("/").includes("..") &&
      demoUrl.protocol === "https:";
  }

  function categoryLabel(category) {
    if (Object.prototype.hasOwnProperty.call(categoryNames, category)) return categoryNames[category];
    return category.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function createWhatsAppUrl(message) {
    const number = String(config.whatsappNumero || "");
    if (!/^\d{8,15}$/.test(number)) return "";
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  function createContactAction(name) {
    const message = name
      ? `Hola, me interesa la invitación ${name} de Encanto Digital. Quisiera conocer más información.`
      : "Hola, quisiera conocer más información sobre las invitaciones digitales de Encanto Digital.";
    const href = createWhatsAppUrl(message);

    if (!href) {
      const button = document.createElement("button");
      button.className = "button button--card";
      button.type = "button";
      button.disabled = true;
      button.textContent = "WhatsApp próximamente";
      return button;
    }

    const link = document.createElement("a");
    link.className = "button button--card";
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Consultar por WhatsApp";
    return link;
  }

  function createCard(model) {
    const article = document.createElement("article");
    article.className = "card invitation-card";

    const image = document.createElement("img");
    image.className = "card__image";
    image.src = model.imagen;
    image.alt = `Portada de ${model.nombre}`;
    image.loading = "lazy";
    image.decoding = "async";

    const content = document.createElement("div");
    content.className = "card__content";

    const category = document.createElement("p");
    category.className = "card__meta";
    category.textContent = categoryLabel(model.categoria);

    const title = document.createElement("h3");
    title.textContent = model.nombre;

    const style = document.createElement("p");
    style.textContent = model.estilo;

    const actions = document.createElement("div");
    actions.className = "card__actions";

    const demo = document.createElement("a");
    demo.className = "button button--secondary button--card";
    demo.href = model.demoUrl;
    demo.target = "_blank";
    demo.rel = "noopener noreferrer";
    demo.textContent = "Ver demo";
    demo.setAttribute("aria-label", `Ver demo de ${model.nombre} (se abre en una pestaña nueva)`);

    actions.append(demo, createContactAction(model.nombre));
    content.append(category, title, style, actions);
    article.append(image, content);
    return article;
  }

  function renderCatalog() {
    const seenIds = new Set();
    const models = Array.isArray(config.invitaciones)
      ? config.invitaciones.filter((model) => {
          if (!validModel(model) || seenIds.has(model.id)) return false;
          seenIds.add(model.id);
          return true;
        })
      : [];
    const categories = [...new Set(models.map((model) => model.categoria))];
    const filterButtons = [];
    let selectedCategory = "todas";

    catalog.replaceChildren();
    filters.replaceChildren();
    filters.hidden = categories.length === 0;

    if (categories.length === 0) {
      emptyState.textContent = "Estamos preparando los primeros diseños. Vuelve pronto para descubrir el catálogo.";
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;

    function addFilter(value, label) {
      const button = document.createElement("button");
      button.className = "filter-button";
      button.type = "button";
      button.textContent = label;
      button.setAttribute("aria-pressed", String(value === selectedCategory));
      button.addEventListener("click", () => {
        selectedCategory = value;
        filterButtons.forEach((filter) => filter.setAttribute("aria-pressed", String(filter.dataset.category === value)));
        renderCards();
      });
      button.dataset.category = value;
      filterButtons.push(button);
      filters.append(button);
    }

    addFilter("todas", "Todas");
    categories.forEach((category) => addFilter(category, categoryLabel(category)));

    function renderCards() {
      const visibleModels = selectedCategory === "todas"
        ? models
        : models.filter((model) => model.categoria === selectedCategory);
      catalog.replaceChildren(...visibleModels.map(createCard));
    }

    renderCards();
  }

  function setupMobileMenu() {
    const button = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("#site-navigation");
    const mobileQuery = window.matchMedia("(max-width: 40rem)");

    function applyLayout() {
      button.hidden = !mobileQuery.matches;
      navigation.hidden = mobileQuery.matches && button.getAttribute("aria-expanded") !== "true";
      if (!mobileQuery.matches) button.setAttribute("aria-expanded", "false");
    }

    function closeMenu(restoreFocus) {
      button.setAttribute("aria-expanded", "false");
      navigation.hidden = true;
      if (restoreFocus) button.focus();
    }

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      navigation.hidden = expanded;
      if (!expanded) navigation.querySelector("a")?.focus();
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a") && mobileQuery.matches) closeMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileQuery.matches && button.getAttribute("aria-expanded") === "true") {
        closeMenu(true);
      }
    });

    mobileQuery.addEventListener("change", applyLayout);
    applyLayout();
  }

  function setupRevealMotion() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = document.querySelectorAll("main > section:not(.hero)");
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    sections.forEach((section) => observer.observe(section));
  }

  if (contactButton) {
    const href = createWhatsAppUrl("Hola, quisiera conocer más información sobre las invitaciones digitales de Encanto Digital.");
    if (href) {
      const link = document.createElement("a");
      link.id = contactButton.id;
      link.className = contactButton.className;
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Escríbenos por WhatsApp";
      contactButton.replaceWith(link);
    }
  }

  renderCatalog();
  setupMobileMenu();
  setupRevealMotion();

  const currentYear = document.querySelector("#current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
})();
