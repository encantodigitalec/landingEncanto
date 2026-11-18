(function () {
  "use strict";

  const scriptUrl = document.currentScript.src;
  const siteRoot = new URL("../", scriptUrl);
  const invitationUrl = new URL("../data/invitations.json", scriptUrl);
  const policyUrl = new URL("../data/service-policies.json", scriptUrl);
  const invitationId = new URLSearchParams(window.location.search).get("id");
  const main = document.querySelector("#contenido");
  const status = document.querySelector("#detail-status");
  const errorPanel = document.querySelector("#detail-error");
  const detail = document.querySelector("#invitation-detail");
  const featureLabels = {
    music: ["M\u00fasica", "M\u00fasica durante la invitaci\u00f3n"],
    map: ["Ubicaciones", "Botones para consultar la ubicaci\u00f3n del evento"],
    agenda: ["Agenda", "Horarios y espacios de la celebraci\u00f3n"],
    rsvp: ["Confirmaci\u00f3n", "Confirmaci\u00f3n de asistencia por WhatsApp"],
    countdown: ["Cuenta regresiva", "Cuenta regresiva para el evento"],
    gallery: ["Galer\u00eda", "Galer\u00eda de fotograf\u00edas"],
    calendar: ["Calendario", "Opci\u00f3n para agregar la fecha al calendario"]
  };
  const categoryLabels = {
    bodas: "Bodas",
    "15-anos": "15 a\u00f1os",
    cumpleanos: "Cumplea\u00f1os",
    "baby-shower": "Baby shower",
    graduaciones: "Graduaciones",
    bautizos: "Bautizos"
  };
  const personalizationLabels = {
    colors: "Colores",
    texts: "Textos",
    photos: "Fotograf\u00edas",
    music: "M\u00fasica",
    location: "Ubicaci\u00f3n",
    agenda: "Agenda",
    rsvp: "Confirmaci\u00f3n de asistencia",
    countdown: "Cuenta regresiva"
  };

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
    return element;
  }

  function appendList(container, values) {
    if (!Array.isArray(values) || values.length === 0) return false;
    const list = document.createElement("ul");
    list.className = "detail-accordion__list";
    values.forEach((value) => {
      if (typeof value !== "string" || !value.trim()) return;
      const item = document.createElement("li");
      item.textContent = value;
      list.append(item);
    });
    if (!list.childElementCount) return false;
    container.append(list);
    return true;
  }

  function createAccordion(title, summary, detailText, listItems) {
    if (!summary && !detailText && (!Array.isArray(listItems) || listItems.length === 0)) return null;
    const accordion = document.createElement("details");
    accordion.className = "detail-accordion";

    const heading = document.createElement("summary");
    heading.textContent = title;
    accordion.append(heading);

    const content = document.createElement("div");
    content.className = "detail-accordion__content";
    if (summary) {
      const paragraph = document.createElement("p");
      paragraph.textContent = summary;
      content.append(paragraph);
    }
    if (detailText) {
      const paragraph = document.createElement("p");
      paragraph.textContent = detailText;
      content.append(paragraph);
    }
    appendList(content, listItems);
    accordion.append(content);
    return accordion;
  }

  function renderImage(model) {
    const visual = document.querySelector("#detail-visual");
    const desktop = model.images && model.images.desktop;
    const mobile = model.images && model.images.mobile;
    const imagePath = desktop || mobile;

    if (!imagePath) {
      visual.classList.add("detail-visual--empty");
      visual.textContent = "Vista previa no disponible";
      visual.setAttribute("role", "img");
      visual.setAttribute("aria-label", `Vista previa no disponible para ${model.name}`);
      return;
    }

    const picture = document.createElement("picture");
    if (mobile) {
      const source = document.createElement("source");
      source.media = "(max-width: 40rem)";
      source.srcset = new URL(mobile, siteRoot).href;
      picture.append(source);
    }

    const image = document.createElement("img");
    image.src = new URL(imagePath, siteRoot).href;
    image.alt = (model.images.alt && String(model.images.alt).trim()) || `Invitaci\u00f3n digital: ${model.name}`;
    image.width = 600;
    image.height = 800;
    image.loading = "eager";
    image.decoding = "async";
    image.addEventListener("error", () => {
      visual.replaceChildren();
      visual.classList.add("detail-visual--empty");
      visual.textContent = "Vista previa no disponible";
      visual.setAttribute("role", "img");
      visual.setAttribute("aria-label", `Vista previa no disponible para ${model.name}`);
    }, { once: true });
    picture.append(image);
    visual.append(picture);
  }

  function renderPersonalization(model) {
    const options = Object.entries(model.personalization || {})
      .filter(([key, enabled]) => enabled === true && personalizationLabels[key]);
    if (!options.length) return;

    const section = document.querySelector("#detail-personalization");
    const list = document.querySelector("#personalization-options");
    options.forEach(([key, label]) => {
      const item = document.createElement("li");
      item.className = "detail-chip";
      const icon = document.createElement("span");
      icon.className = "detail-chip__icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = key === "texts" ? "T" : "\u2713";
      item.append(icon, document.createTextNode(personalizationLabels[key]));
      list.append(item);
    });
    section.hidden = false;
  }

  function renderFeatures(model) {
    const features = Object.entries(model.features || {})
      .filter(([key, enabled]) => enabled === true && featureLabels[key]);
    if (!features.length) return;

    const list = document.querySelector("#feature-list");
    features.forEach(([key]) => {
      const labels = featureLabels[key];
      const item = document.createElement("li");
      item.className = "detail-feature";
      const icon = document.createElement("span");
      icon.className = "detail-feature__icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "\u2713";
      const text = document.createElement("span");
      const title = document.createElement("strong");
      title.textContent = labels[0];
      const description = document.createElement("span");
      description.textContent = labels[1];
      text.append(title, description);
      item.append(icon, text);
      list.append(item);
    });
    document.querySelector("#detail-features").hidden = false;
  }

  function renderAccordions(model, policies) {
    const container = document.querySelector("#detail-accordions");
    const includedItems = Array.isArray(model.included) ? model.included : [];
    const requirements = Array.isArray(model.requirements) ? model.requirements : [];
    const entries = [
      createAccordion("\u00bfQu\u00e9 incluye?", "Tu invitaci\u00f3n digital y un enlace para compartirla con tus invitados.", "", includedItems),
      createAccordion("\u00bfQu\u00e9 necesitamos para comenzar?", "", "", requirements),
      createAccordion("\u00bfC\u00f3mo recibes tu invitaci\u00f3n?", "Cuando apruebes el dise\u00f1o y completes el pago acordado, recibir\u00e1s el enlace definitivo para compartir.", "", []),
      ...["corrections", "payment", "availability", "postDelivery"].map((key) => {
        const policy = policies[key];
        return policy ? createAccordion(policy.title, policy.summary, policy.detail, []) : null;
      })
    ].filter(Boolean);
    container.replaceChildren(...entries);
  }

  function renderContact(model) {
    const number = String((window.ENCANTO_DIGITAL && window.ENCANTO_DIGITAL.whatsappNumero) || "");
    const action = document.querySelector("#detail-contact-action");
    const message = `Hola, me interesa la invitaci\u00f3n digital \"${model.name}\". Quisiera conocer el precio y las opciones de personalizaci\u00f3n.`;
    const href = /^\d{8,15}$/.test(number)
      ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
      : "";

    if (href) {
      const link = document.createElement("a");
      link.className = "button detail-contact__button";
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Consultar por WhatsApp";
      link.setAttribute("aria-label", `Consultar por WhatsApp sobre ${model.name} (se abre en una pesta\u00f1a nueva)`);
      action.append(link);
      return;
    }

    const button = document.createElement("button");
    button.className = "button detail-contact__button";
    button.type = "button";
    button.disabled = true;
    button.textContent = "WhatsApp no disponible";
    action.append(button);
  }

  function showError() {
    status.hidden = true;
    errorPanel.hidden = false;
    main.setAttribute("aria-busy", "false");
  }

  async function loadDetail() {
    if (!invitationId) {
      showError();
      return;
    }

    try {
      const [invitationsResponse, policiesResponse] = await Promise.all([
        fetch(invitationUrl),
        fetch(policyUrl)
      ]);
      if (!invitationsResponse.ok || !policiesResponse.ok) throw new Error("Detail data unavailable");
      const [catalog, policies] = await Promise.all([
        invitationsResponse.json(),
        policiesResponse.json()
      ]);
      const model = Array.isArray(catalog.invitations)
        ? catalog.invitations.find((item) => item && item.id === invitationId && item.published === true)
        : null;
      if (!model) {
        showError();
        return;
      }

      document.title = `${model.name} | Encanto Digital`;
      const description = document.querySelector('meta[name="description"]');
      if (description) description.content = `${model.name}: conoce sus opciones, funciones y condiciones.`;
      const category = categoryLabels[model.category] || String(model.category || "").replace(/-/g, " ");
      setText("#detail-category", category.toUpperCase());
      setText("#detail-title", model.name);
      setText("#detail-description", model.description || "Una invitaci\u00f3n digital para compartir los detalles de tu celebraci\u00f3n.");

      const demoAction = document.querySelector("#detail-demo-action");
      if (typeof model.demoUrl === "string" && /^https:\/\//i.test(model.demoUrl)) {
        const demo = document.createElement("a");
        demo.className = "button";
        demo.href = model.demoUrl;
        demo.target = "_blank";
        demo.rel = "noopener noreferrer";
        demo.textContent = "Ver demo interactiva";
        demo.setAttribute("aria-label", `Ver demo interactiva: ${model.name} (se abre en una pesta\u00f1a nueva)`);
        demoAction.append(demo);
      }

      renderImage(model);
      renderPersonalization(model);
      renderFeatures(model);
      renderAccordions(model, policies);
      renderContact(model);

      status.hidden = true;
      detail.hidden = false;
      main.setAttribute("aria-busy", "false");
    } catch {
      showError();
    }
  }

  const currentYear = document.querySelector("#current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
  loadDetail();
})();
