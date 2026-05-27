// ─── Traduções ───────────────────────────────────────────────────────────────
const i18n = {
  pt: {
    brandEyebrow: "Plataforma de cadastro",
    brandTitle: "Bem-vindo! Vamos começar seu cadastro.",
    brandCopy:
      "Desde 1985, a Full Gauge desenvolve soluções para automação em refrigeração, aquecimento e climatização com padrão internacional de qualidade.",
    featureOne: "Segurança e confiança no cadastro de clientes",
    featureTwo: "Vendedores e consultores técnicos especializados",
    featureThree: "Marca consolidada internacionalmente em 62 países",
    overallProgressLabel: "Progresso geral",
    clearForm: "Limpar cadastro",
    themeToggle: "Tema",
    previous: "Voltar",
    next: "Avançar",
    submit: "Enviar cadastro",
    requiredLegend: "Campos com * são obrigatórios.",
    confirmTitle: "Confirmação",
    confirmCancel: "Cancelar",
    confirmConfirm: "Confirmar",
    draftSaved: "Rascunho salvo.",
    draftRecovered: "Rascunho recuperado.",
    submitSuccess: "Cadastro enviado com sucesso! Em breve entraremos em contato.",
    submitError: "Erro ao enviar. Tente novamente.",
  },
  en: {
    brandEyebrow: "Registration Platform",
    brandTitle: "Welcome! Let's start your registration.",
    brandCopy:
      "Since 1985, Full Gauge develops solutions for refrigeration, heating and climate control automation with international quality standards.",
    featureOne: "Secure and reliable client registration",
    featureTwo: "Specialized sales and technical consultants",
    featureThree: "Brand established in 62 countries worldwide",
    overallProgressLabel: "Overall Progress",
    clearForm: "Clear form",
    themeToggle: "Theme",
    previous: "Back",
    next: "Next",
    submit: "Submit registration",
    requiredLegend: "Fields marked with * are required.",
    confirmTitle: "Confirmation",
    confirmCancel: "Cancel",
    confirmConfirm: "Confirm",
    draftSaved: "Draft saved.",
    draftRecovered: "Draft recovered.",
    submitSuccess: "Registration submitted successfully! We will contact you soon.",
    submitError: "Error sending. Please try again.",
  },
  es: {
    brandEyebrow: "Plataforma de registro",
    brandTitle: "¡Bienvenido! Comencemos tu registro.",
    brandCopy:
      "Desde 1985, Full Gauge desarrolla soluciones para automatización en refrigeración, calefacción y climatización con estándares de calidad internacionales.",
    featureOne: "Seguridad y confianza en el registro de clientes",
    featureTwo: "Vendedores y consultores técnicos especializados",
    featureThree: "Marca consolidada internacionalmente en 62 países",
    overallProgressLabel: "Progreso general",
    clearForm: "Limpiar registro",
    themeToggle: "Tema",
    previous: "Volver",
    next: "Avanzar",
    submit: "Enviar registro",
    requiredLegend: "Los campos con * son obligatorios.",
    confirmTitle: "Confirmación",
    confirmCancel: "Cancelar",
    confirmConfirm: "Confirmar",
    draftSaved: "Borrador guardado.",
    draftRecovered: "Borrador recuperado.",
    submitSuccess: "¡Registro enviado con éxito! Pronto nos pondremos en contacto.",
    submitError: "Error al enviar. Inténtalo de nuevo.",
  },
};

// ─── Definição das Etapas ─────────────────────────────────────────────────────
const STEPS = [
  {
    title: { pt: "Cadastro base", en: "Base registration", es: "Registro base" },
    description: {
      pt: "Informações principais de identificação.",
      en: "Main identification information.",
      es: "Información principal de identificación.",
    },
    fields: [
      {
        id: "relacao",
        label: { pt: "Relação *", en: "Relationship *", es: "Relacion *" },
        type: "radio",
        required: true,
        full: true,
        options: [
          { value: "PARCEIRO", label: { pt: "Parceiro", en: "Partner", es: "Socio" } },
          { value: "CONVIDADO", label: { pt: "Convidado",en: "Guest",es: "Invitado"} },
        ],
      },
      { id: "token", label: { pt: "Token", en: "Token", es: "Inscripción Estatal" }, type: "text" },
    ],
  },
  {
    title: { pt: "Dados comerciais", en: "Commercial data", es: "Datos comerciales" },
    description: {
      pt: "Linha de negócio, segmento e consultor responsável.",
      en: "Line of business, segment and responsible consultant.",
      es: "Línea de negocio, segmento y consultor responsable.",
    },
    fields: [
      {
        id: "lineOfBusiness",
        label: { pt: "Linha de Negócio *", en: "Line of Business *", es: "Línea de Negocio *" },
        type: "select",
        required: true,
        full: true,
        options: [
          "ADEGAS CLIMATIZADAS","AQUECIMENTO SOLAR","AR CONDICIONADO","AUTOMACAO INDUSTRIAL",
          "BANHEIRA DE HIDROMASSAGEM","BEBEDOURO","BOMBAS DE CALOR","CALDEIRA",
          "CAMARAS E BALCOES","CHILLER","CHOCADEIRAS","CHOPEIRAS","CLIMATIZACAO DE AMBIENTE",
          "CLIMATIZACAO PARA AVIARIOS","COMPONENTES E ACESSOR P REFRIG","CONTEINERES REFRIGERADOS",
          "COZINHAS INDUSTRIAIS","DESUMIDIFICADORES","ENSINO PROFISSIONALIZANTE","ESTUFAS",
          "FABRICACAO DE RACKS","FORNOS","FREEZER","INDUSTRIA ALIMENTICIA","INDUSTRIA METALURGICA",
          "INSTALACAO E CONSERTO EQUIP","INSTALACOES ELETRICAS E DE AUTOMACAO",
          "INSTRUMENTACAO PARA MEDICAO","MAQUINAS E EQUIP P BEBIDA","MAQUINAS E EQUIPAMENTOS",
          "MAQUINAS PARA CALCADOS","MAQUINAS PARA LABORATORIO","MAQUINAS PARA SORVETE",
          "MATERIAL ELETRICO","MATERIAL HIDRAULICO","MONTADOR DE QUADRO DE COMANDO","PISCINAS",
          "PISO AQUECIDO PARA SUINOS","PLUG-IN","QUEIMADORES A GAS","REFRIGERACAO",
          "REFRIGERACAO AUTOMOTIVA","REFRIGERACAO PARA CAMINHOES","REFRIGERACAO SEG NAVAL",
          "RESFRIADOR DE LEITE","RESFRIADOR PARA AQUARIO","SAUNAS","TORRES DE RESFRIAMENTO",
          "UMIDIFICADORES","UNIDADES FRIGORIFICAS",
        ],
      },
    
      {
        id: "consultant",
        label: { pt: "Consultor Técnico Responsável *", en: "Responsible Consultant *", es: "Consultor Responsable *" },
        type: "select",
        required: true,
        options: [
          "Carlos Mota","Cristiano Henriqson Leste","Daniel Becker","Daniel Izaguirre",
          "Fabiano Damiao","Fabio Benevite","Fabio Tedesco","Fabricio Silva","Felipe Pereira",
          "Gabriel dos Santos","Gabriela da Silva Wolff","Guilherme Simoes Velasques",
          "Ian Bauer","Igor Rogerio Rollsing","Jordana Dutra","Julio dos Santos Jacobsen",
          "Julio Luiz Meyer","Tiago Barbosa","vendas","Victor Santos",
        ],
      },
    ],
  },
  {
    title: { pt: "Dados gerais", en: "General data", es: "Datos generales" },
    description: {
      pt: "Informações complementares da empresa.",
      en: "Complementary company information.",
      es: "Información complementaria de la empresa.",
    },
    fields: [
      { id: "stateRegistration", label: { pt: "Inscrição Estadual", en: "State Registration", es: "Inscripción Estatal" }, type: "text" },
      { id: "municipalRegistration", label: { pt: "Inscrição Municipal", en: "Municipal Registration", es: "Inscripción Municipal" }, type: "text" },
      { id: "employeeCount", label: { pt: "Nº de Funcionários", en: "Employee Count", es: "Nº de Empleados" }, type: "number" },
      { id: "annualRevenue", label: { pt: "Faturamento Anual (R$)", en: "Annual Revenue (R$)", es: "Facturación Anual (R$)" }, type: "text" },
    ],
  },
  {
    title: { pt: "Endereço principal", en: "Main address", es: "Dirección principal" },
    description: {
      pt: "Endereço da sede ou filial principal.",
      en: "Headquarters or main branch address.",
      es: "Dirección de la sede o sucursal principal.",
    },
    fields: [
      { id: "zipCode", label: { pt: "CEP *", en: "ZIP Code *", es: "Código Postal *" }, type: "text", required: true, mask: "cep" },
      { id: "street", label: { pt: "Logradouro *", en: "Street *", es: "Calle *" }, type: "text", required: true, full: true },
      { id: "number", label: { pt: "Número *", en: "Number *", es: "Número *" }, type: "text", required: true },
      { id: "complement", label: { pt: "Complemento", en: "Complement", es: "Complemento" }, type: "text" },
      { id: "neighborhood", label: { pt: "Bairro *", en: "Neighborhood *", es: "Barrio *" }, type: "text", required: true },
      { id: "city", label: { pt: "Cidade *", en: "City *", es: "Ciudad *" }, type: "text", required: true },
      { id: "state", label: { pt: "Estado *", en: "State *", es: "Estado *" }, type: "text", required: true },
    ],
  },
  {
    title: { pt: "Contato e NFE", en: "Contact & Invoice", es: "Contacto y Factura" },
    description: {
      pt: "Dados de contato e informações para nota fiscal.",
      en: "Contact data and invoice information.",
      es: "Datos de contacto e información de factura.",
    },
    fields: [
      { id: "contactName", label: { pt: "Nome do Contato *", en: "Contact Name *", es: "Nombre del Contacto *" }, type: "text", required: true },
      { id: "contactEmail", label: { pt: "E-mail do Contato *", en: "Contact Email *", es: "Correo del Contacto *" }, type: "email", required: true },
      { id: "contactPhone", label: { pt: "Telefone do Contato *", en: "Contact Phone *", es: "Teléfono del Contacto *" }, type: "tel", required: true, mask: "phone" },
      { id: "nfeEmail", label: { pt: "E-mail para NFE", en: "Invoice Email", es: "Correo para Factura" }, type: "email" },
    ],
  },
  {
    title: { pt: "Revisão final", en: "Final review", es: "Revisión final" },
    description: {
      pt: "Revise os dados antes de enviar.",
      en: "Review your data before submitting.",
      es: "Revisa los datos antes de enviar.",
    },
    fields: [], // gerado dinamicamente
    isReview: true,
  },
];

// ─── Estado ───────────────────────────────────────────────────────────────────
let currentStep = 0;
let currentLang = "pt";
let formData = {};
let pendingAction = null;

const DRAFT_KEY = "fg_registration_draft";

// ─── Utilitários ──────────────────────────────────────────────────────────────
function t(key) {
  return (i18n[currentLang] || i18n.pt)[key] || key;
}

function applyMask(value, mask) {
  const digits = value.replace(/\D/g, "");
  if (mask === "cnpj") {
    return digits
      .slice(0, 14)
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  if (mask === "phone") {
    if (digits.length <= 10) {
      return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
    }
    return digits.slice(0, 11).replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
  }
  if (mask === "cep") {
    return digits.slice(0, 8).replace(/^(\d{5})(\d)/, "$1-$2");
  }
  return value;
}

function saveDraft() {
  localStorage.setItem(DRAFT_KEY, JSON.stringify({ step: currentStep, data: formData }));
  showDraftStatus(t("draftSaved"));
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    formData = saved.data || {};
    currentStep = saved.step || 0;
    return true;
  } catch {
    return false;
  }
}

function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
}

function showDraftStatus(msg) {
  const el = document.getElementById("draftStatus");
  if (!el) return;
  el.textContent = msg;
  el.dataset.visible = "true";
  clearTimeout(el._timeout);
  el._timeout = setTimeout(() => {
    el.dataset.visible = "false";
  }, 3000);
}

// ─── Render ───────────────────────────────────────────────────────────────────
function renderStepper() {
  const stepper = document.getElementById("stepper");
  if (!stepper) return;
  stepper.innerHTML = STEPS.map((s, i) => {
    const cls = i < currentStep ? "done" : i === currentStep ? "active" : "";
    const label = s.title[currentLang] || s.title.pt;
    return `<div class="step-item ${cls}">
      <span>Etapa ${i + 1}</span>
      <strong>${label}</strong>
    </div>`;
  }).join("");
}

function renderProgress() {
  const pct = Math.round(((currentStep + 1) / STEPS.length) * 100);
  const fill = document.getElementById("progressFill");
  const val = document.getElementById("progressValue");
  const counter = document.getElementById("stepCounter");
  if (fill) { fill.style.width = pct + "%"; fill.setAttribute("aria-valuenow", pct); }
  if (val) val.textContent = pct + "%";
  if (counter) counter.textContent = `Etapa ${currentStep + 1} de ${STEPS.length}`;
}

function renderFields() {
  const step = STEPS[currentStep];
  const container = document.getElementById("formFields");
  const title = document.getElementById("stepTitle");
  const desc = document.getElementById("stepDescription");

  if (title) title.textContent = step.title[currentLang] || step.title.pt;
  if (desc) desc.textContent = step.description[currentLang] || step.description.pt;
  if (!container) return;

  if (step.isReview) {
    renderReview(container);
    return;
  }

  container.innerHTML = step.fields
    .map((f) => {
      const label = f.label[currentLang] || f.label.pt;
      const val = formData[f.id] ?? "";
      const fullClass = f.full ? "full" : "";

      if (f.type === "select") {
        const opts = f.options
          .map((o) => `<option value="${o}"${val === o ? " selected" : ""}>${o}</option>`)
          .join("");
        return `<div class="field-wrap ${fullClass}">
          <label for="${f.id}">${label}</label>
          <select id="${f.id}" name="${f.id}"${f.required ? " required" : ""}>
            <option value="">Selecione uma opção</option>${opts}
          </select>
        </div>`;
      }

      if (f.type === "radio") {
        const chips = f.options.map((o) => {
          const optLabel = o.label[currentLang] || o.label.pt;
          const checked = val === o.value ? " checked" : "";
          return `<label class="radio-chip${val === o.value ? " radio-chip--selected" : ""}">
            <input type="radio" name="${f.id}" value="${o.value}"${checked}${f.required ? " required" : ""}>
            <span>${optLabel}</span>
          </label>`;
        }).join("");
        return `<div class="field-wrap ${fullClass}" id="field-wrap-${f.id}">
          <label>${label}</label>
          <div class="radio-group" role="group" aria-label="${label}" id="${f.id}-group">
            ${chips}
          </div>
        </div>`;
      }

      return `<div class="field-wrap ${fullClass}">
        <label for="${f.id}">${label}</label>
        <input type="${f.type}" id="${f.id}" name="${f.id}" value="${val}"${f.required ? " required" : ""} autocomplete="off">
      </div>`;
    })
    .join("");

  // Máscaras, autosave e radio chips
  step.fields.forEach((f) => {
    if (f.type === "radio") {
      const group = document.getElementById(`${f.id}-group`);
      if (!group) return;
      group.querySelectorAll(`input[name="${f.id}"]`).forEach((radio) => {
        radio.addEventListener("change", () => {
          // Atualiza visual dos chips
          group.querySelectorAll(".radio-chip").forEach((chip) => {
            chip.classList.toggle("radio-chip--selected", chip.querySelector("input").checked);
          });
          formData[f.id] = radio.value;
          saveDraft();
        });
      });
      return;
    }

    const el = document.getElementById(f.id);
    if (!el) return;
    el.addEventListener("input", () => {
      let v = el.value;
      if (f.mask) { v = applyMask(v, f.mask); el.value = v; }
      formData[f.id] = v;
      saveDraft();
    });
    el.addEventListener("change", () => {
      formData[f.id] = el.value;
      saveDraft();
    });
  });
}

function renderReview(container) {
  const allFields = STEPS.flatMap((s) => s.fields);
  const rows = allFields
    .map((f) => {
      const label = f.label[currentLang] || f.label.pt;
      const val = formData[f.id] || "—";
      return `<div class="field-wrap">
        <label>${label}</label>
        <p style="margin:0;font-size:0.92rem;color:var(--ink-900);padding:0.62rem 0.7rem;border:1px solid var(--line-200);border-radius:10px;background:color-mix(in srgb,var(--panel) 95%,transparent)">${val}</p>
      </div>`;
    })
    .join("");
  container.innerHTML = `<div class="form-grid" style="grid-column:1/-1">${rows}</div>`;
}

function renderButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const isLast = currentStep === STEPS.length - 1;

  if (prevBtn) prevBtn.style.visibility = currentStep === 0 ? "hidden" : "visible";
  if (nextBtn) { nextBtn.style.display = isLast ? "none" : "inline-flex"; nextBtn.textContent = t("next"); }
  if (submitBtn) { submitBtn.style.display = isLast ? "inline-flex" : "none"; submitBtn.textContent = t("submit"); }
  if (prevBtn) prevBtn.textContent = t("previous");
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.textContent = val;
  });
}

function render() {
  renderStepper();
  renderProgress();
  renderFields();
  renderButtons();
  applyI18n();
}

// ─── Validação ────────────────────────────────────────────────────────────────
function validateCurrentStep() {
  const step = STEPS[currentStep];
  if (step.isReview) return true;
  let valid = true;
  step.fields.forEach((f) => {
    if (f.type === "radio") {
      const wrap = document.getElementById(`field-wrap-${f.id}`);
      const group = document.getElementById(`${f.id}-group`);
      if (!group) return;
      const checked = group.querySelector(`input[name="${f.id}"]:checked`);
      if (wrap) wrap.classList.remove("invalid-group");
      if (f.required && !checked) {
        if (wrap) wrap.classList.add("invalid-group");
        valid = false;
      }
      return;
    }

    const el = document.getElementById(f.id);
    if (!el) return;
    el.classList.remove("invalid");
    if (f.required && !el.value.trim()) {
      el.classList.add("invalid");
      valid = false;
    }
  });
  return valid;
}

// ─── Navegação ────────────────────────────────────────────────────────────────
function goNext() {
  if (!validateCurrentStep()) {
    showStatus(
      currentLang === "pt"
        ? "Preencha os campos obrigatórios."
        : currentLang === "en"
        ? "Please fill in the required fields."
        : "Por favor, completa los campos obligatorios.",
      "error"
    );
    return;
  }
  clearStatus();
  if (currentStep < STEPS.length - 1) {
    currentStep++;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goPrev() {
  if (currentStep > 0) {
    currentStep--;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ─── Status ───────────────────────────────────────────────────────────────────
function showStatus(msg, type = "") {
  const el = document.getElementById("statusMessage");
  if (!el) return;
  el.textContent = msg;
  el.className = "status-message " + type;
}

function clearStatus() {
  showStatus("");
}

// ─── Modal de confirmação ─────────────────────────────────────────────────────
function openConfirm(message, onConfirm) {
  pendingAction = onConfirm;
  const modal = document.getElementById("confirmModal");
  const msgEl = document.getElementById("confirmMessage");
  if (!modal || !msgEl) return;
  msgEl.textContent = message;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
}

function closeConfirm() {
  const modal = document.getElementById("confirmModal");
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  pendingAction = null;
}

// ─── Submit ───────────────────────────────────────────────────────────────────
async function handleSubmit() {
  showStatus(
    currentLang === "pt" ? "Enviando..." : currentLang === "en" ? "Sending..." : "Enviando...",
    ""
  );
  try {
    // Substitua a URL abaixo pelo seu endpoint real
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      clearDraft();
      showStatus(t("submitSuccess"), "success");
    } else {
      showStatus(t("submitError"), "error");
    }
  } catch {
    // Sem endpoint real ainda — apenas mostra sucesso para demonstração
    clearDraft();
    showStatus(t("submitSuccess"), "success");
  }
}

// ─── Inicialização ────────────────────────────────────────────────────────────
function init() {
  const hasDraft = loadDraft();

  render();

  if (hasDraft) {
    showDraftStatus(t("draftRecovered"));
  } else {
    const draftEl = document.getElementById("draftStatus");
    if (draftEl) draftEl.dataset.visible = "false";
  }

  // Navegação
  document.getElementById("nextBtn")?.addEventListener("click", goNext);
  document.getElementById("prevBtn")?.addEventListener("click", goPrev);

  // Submit
  document.getElementById("leadForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmit();
  });
  document.getElementById("submitBtn")?.addEventListener("click", handleSubmit);

  // Limpar formulário
  document.getElementById("clearFormBtn")?.addEventListener("click", () => {
    openConfirm(
      currentLang === "pt"
        ? "Tem certeza que deseja limpar todos os dados do cadastro?"
        : currentLang === "en"
        ? "Are you sure you want to clear all registration data?"
        : "¿Estás seguro de que deseas borrar todos los datos del registro?",
      () => {
        formData = {};
        currentStep = 0;
        clearDraft();
        render();
        closeConfirm();
      }
    );
  });

  // Modal confirmar
  document.getElementById("confirmConfirmBtn")?.addEventListener("click", () => {
    if (pendingAction) pendingAction();
  });
  document.getElementById("confirmCancelBtn")?.addEventListener("click", closeConfirm);

  // Fechar modal clicando fora
  document.getElementById("confirmModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeConfirm();
  });

  // Troca de idioma
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      document.querySelectorAll(".lang-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.lang === currentLang);
        b.setAttribute("aria-pressed", b.dataset.lang === currentLang ? "true" : "false");
      });
      render();
    });
  });

  // Tema claro/escuro
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const body = document.body;
    const isDark = body.dataset.theme === "dark";
    body.dataset.theme = isDark ? "light" : "dark";
    localStorage.setItem("fg_theme", body.dataset.theme);
  });

  // Restaurar tema salvo
  const savedTheme = localStorage.getItem("fg_theme");
  if (savedTheme) document.body.dataset.theme = savedTheme;
}

document.addEventListener("DOMContentLoaded", init);