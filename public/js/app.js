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
    submitSuccess: {
      title: "Cadastro enviado com sucesso!",
      message: "Agradecemos o seu interesse! Em breve entraremos em contato com mais informações sobre a sua inscrição.",
      icon: '<svg viewBox="0 0 24 24"><path d="M5 12.5 9.2 16.7 19 7"></path></svg>' // Ícone de checkmark
    },
    submitError: "Erro ao enviar. Tente novamente.",
    loading: "Carregando...",
    invalidToken: "Token inválido.",
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
    submitSuccess: {
      title: "Registration submitted successfully!",
      message: "Thank you for your interest! We will contact you shortly with more information about your enrollment.",
      icon: '<svg viewBox="0 0 24 24"><path d="M5 12.5 9.2 16.7 19 7"></path></svg>'
    },
    submitError: "Error sending. Please try again.",
    loading: "Loading...",
    invalidToken: "Invalid token.",
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
    submitSuccess: {
      title: "¡Registro enviado con éxito!",
      message: "¡Gracias por tu interés! Nos pondremos en contacto contigo en breve con más información sobre tu inscripción.",
      icon: '<svg viewBox="0 0 24 24"><path d="M5 12.5 9.2 16.7 19 7"></path></svg>'
    },
    submitError: "Error al enviar. Inténtalo de nuevo.",
    loading: "Cargando...",
    invalidToken: "Token inválido.",
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
          { value: "GERAL", label: { pt: "Geral",en: "General",es: "General"} },
        ],
      },
      { id: "token", label: { pt: "Qual o token enviado pelo parceiro? *", en: "Which token is sent by the partner? *", es: "¿Qué token es enviado por el socio? *" }, type: "text", required: true, validateToken: true },
    ],
  },
    {
    title: { pt: "Inscrição", en: "Enrollment", es: "Inscripción" },
    description: {
      pt: "Preencha seus dados pessoais e profissionais.",
      en: "Fill in your personal and professional information.",
      es: "Complete sus datos personales y profesionales.",
    },
    fields: [
      {
        id: "fullName",
        label: { pt: "Nome Completo *", en: "Full Name *", es: "Nombre Completo *" },
        type: "text",
        required: true,
        full: true,
      },
      {
        id: "cpf",
        label: { pt: "CPF *", en: "CPF *", es: "CPF *" },
        type: "text",
        required: true,
        mask: "cpf",
      },
      {
        id: "empresa",
        label: { pt: "Empresa *", en: "Company *", es: "Empresa *" },
        type: "select",
        required: true,
        options: ["Armacell", "Brahex", "Bitzer", "Chemours", "DuFrio", "Frigelar", "Nacional Frio", "Soma"],
      },
      {
        id: "segmento",
        label: { pt: "Segmento *", en: "Segment *", es: "Segmento *" },
        type: "select",
        required: true,
        options: ["Aquecimento", "Ventilação", "Ar Condicionado", "Refrigeração"],
      },
      {
        id: "atuacao",
        label: { pt: "Atuação *", en: "Field of Work *", es: "Actuación *" },
        type: "select",
        required: true,
        options: ["Residencial", "Comercial", "Industrial"],
      },
      {
        id: "cidade",
        label: { pt: "Cidade *", en: "City *", es: "Ciudad *" },
        type: "text",
        required: true,
      },
      {
        id: "telefone",
        label: { pt: "Telefone / WhatsApp *", en: "Phone / WhatsApp *", es: "Teléfono / WhatsApp *" },
        type: "tel",
        required: true,
        mask: "phone",
      },
      {
        id: "email",
        label: { pt: "E-mail *", en: "E-mail *", es: "Correo electrónico *" },
        type: "email",
        required: true,
        validateEmail: true,
      },
    ],
  },
  {
    title: { pt: "Turmas e módulos", en: "Course classes", es: "Clases del curso" },
    description: {
      pt: "",
      en: "",
      es: "",
    },
    fields: [
      { id: "turmas", label: { pt: "Turmas *", en: "Classes *", es: "Clases *" }, type: "select", options: [], required: true },
      { id: "modulos", label: { pt: "Módulos *", en: "Modules *", es: "Módulos *" }, type: "select", options: [] ,required: true},
    ],
  },
  {
    title: { pt: "Termo de Inscrição", en: "Enrollment Terms", es: "Término de Inscripción" },
    description: {
      pt: "Leia e aceite os termos para concluir sua inscrição.",
      en: "Read and accept the terms to complete your registration.",
      es: "Lea y acepte los términos para completar su registro.",
    },
    fields: [
      {
        id: "termImage",
        label: {
          pt: "Declaro que li e concordo com a cessão de direitos de imagem",
          en: "I declare that I have read and agree to the assignment of image rights",
          es: "Declaro que he leído y acepto la cesión de derechos de imagen"
        },
        type: "checkbox",
        required: true,
        full: true
      },
      {
        id: "termCosts",
        label: {
          pt: "Declaro que li e concordo que o inscrito é responsável pelos seus próprios gastos como passagens, hospedagens e afins.",
          en: "I declare that I have read and agree that the enrollee is responsible for their own expenses.",
          es: "Declaro que he leído y acepto que el inscrito es responsable de sus propios gastos."
        },
        type: "checkbox",
        required: true,
        full: true
      }
    ],
  },
];

// ─── Estado ───────────────────────────────────────────────────────────────────
let currentStep = 0;
let currentLang = "pt";
let formData = {};
let pendingAction = null;
let isFetchingTurmas = false;
let isFetchingModulos = false;

// ─── Utilitários ──────────────────────────────────────────────────────────────
function t(key) {
  return (i18n[currentLang] || i18n.pt)[key] || key;
}

function applyMask(value, mask) {
  const digits = value.replace(/\D/g, "");
  if (mask === "cpf") {
    return digits
      .slice(0, 11)
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2");
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
        const isLoading = (f.id === "turmas" && isFetchingTurmas) || (f.id === "modulos" && isFetchingModulos);
        const placeholder = isLoading ? t("loading") : "Selecione uma opção";

        const opts = (f.options || [])
          .map((o) => {
            const isObj = typeof o === "object" && o !== null;
            const optVal = isObj ? o.value : o;
            let optLabel = isObj ? o.label : o;
            
            // Suporte para traduções ou labels simples vindo da API
            if (optLabel && typeof optLabel === "object") optLabel = optLabel[currentLang] || optLabel.pt || optVal;
            
            return `<option value="${optVal}"${val === optVal ? " selected" : ""}>${optLabel}</option>`;
          })
          .join("");
        return `<div class="field-wrap ${fullClass} ${isLoading ? 'loading-select' : ''}">
          <label for="${f.id}">${label}</label>
          <select id="${f.id}" name="${f.id}"${f.required ? " required" : ""}${isLoading ? " disabled" : ""}>
            <option value="">${placeholder}</option>${opts}
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

      if (f.type === "checkbox") {
        const checked = val === true ? " checked" : "";
        return `<div class="field-wrap ${fullClass} checkbox-wrap">
          <label class="checkbox-label" for="${f.id}">
            <input type="checkbox" id="${f.id}" name="${f.id}" ${checked} ${f.required ? "required" : ""}>
            <span>${label}</span>
          </label>
        </div>`;
      }

            // Campo normal (text, email, tel, number, etc)
      const errorId = `${f.id}-error`;
      return `<div class="field-wrap ${fullClass}">
        <label for="${f.id}">${label}</label>
        <input
          type="${f.type}"
          id="${f.id}"
          name="${f.id}"
          value="${val}"
          ${f.required ? "required" : ""}
          ${(f.validateEmail || f.validateToken) ? `aria-describedby="${errorId}"` : ""}
          autocomplete="off">
        ${(f.validateEmail || f.validateToken) ? `<span class="input-error-msg" id="${errorId}" role="alert"></span>` : ""}
      </div>`;
    })
    .join("");

  // === EVENT LISTENERS (corrigido) ===
  step.fields.forEach((f) => {
    if (f.type === "radio") {
      const group = document.getElementById(`${f.id}-group`);
      if (!group) return;
      group.querySelectorAll(`input[name="${f.id}"]`).forEach((radio) => {
        radio.addEventListener("change", () => {
          group.querySelectorAll(".radio-chip").forEach((chip) => {
            chip.classList.toggle("radio-chip--selected", chip.querySelector("input").checked);
          });
          formData[f.id] = radio.value;
        });
      });
      return; // só sai do radio
    }

    // Para todos os outros campos (incluindo token)
    const el = document.getElementById(f.id);
    if (!el) return;

        el.addEventListener("input", () => {
      let v = el.value;
      if (f.mask) {
        v = applyMask(v, f.mask);
        el.value = v;
      }
      formData[f.id] = v;

      // Limpa erro de e-mail em tempo real
      if (f.validateEmail) {
        const errSpan = document.getElementById(`${f.id}-error`);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(v.trim())) {
          el.classList.remove("invalid");
          if (errSpan) errSpan.textContent = "";
        }
      }

      // Limpa erro de token em tempo real
      if (f.validateToken) {
        const errSpan = document.getElementById(`${f.id}-error`);
        if (v.trim().startsWith("FG-")) {
          el.classList.remove("invalid");
          if (errSpan) errSpan.textContent = "";
        }
      }
    });

    el.addEventListener("change", () => {
      formData[f.id] = el.value;

      // Se mudar a turma, busca os módulos
      if (f.id === "turmas" && el.value) {
        fetchModulosData(el.value);
      }
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
    el.removeAttribute("data-error");

    if (f.type === "checkbox") {
      if (f.required && !el.checked) {
        el.classList.add("invalid");
        valid = false;
      }
    } else {
      if (f.required && !el.value.trim()) {
        el.classList.add("invalid");
        valid = false;
        return;
      }
    }

        if (f.validateEmail && el.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const errSpan = document.getElementById(`${f.id}-error`);
      if (!emailRegex.test(el.value.trim())) {
        el.classList.add("invalid");
        const msg = currentLang === "en"
          ? "Enter a valid e-mail address."
          : currentLang === "es"
          ? "Ingrese un correo electrónico válido."
          : "Informe um e-mail válido.";
        if (errSpan) errSpan.textContent = msg;
        valid = false;
      } else {
        if (errSpan) errSpan.textContent = "";
      }
    }

    if (f.validateToken && el.value.trim()) {
      const errSpan = document.getElementById(`${f.id}-error`);
      if (!el.value.trim().startsWith("FG-")) {
        el.classList.add("invalid");
        if (errSpan) errSpan.textContent = t("invalidToken");
        valid = false;
      } else {
        if (errSpan) errSpan.textContent = "";
      }
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
      handleSuccessfulSubmission(); // Chama a nova função para lidar com o sucesso
    } else {
      showStatus(t("submitError"), "error");
    }
  } catch {
    showStatus(t("submitError"), "error");
  }
}

// Nova função para lidar com o envio bem-sucedido: esconde o formulário e mostra a mensagem permanente
function handleSuccessfulSubmission() {
  const wizardContent = document.getElementById("wizardContent");
  const statusMessageWrapper = document.getElementById("statusMessageWrapper");

  if (wizardContent) {
    wizardContent.style.display = 'none'; // Oculta todo o conteúdo do wizard
  }
  if (statusMessageWrapper) {
    statusMessageWrapper.style.display = 'block'; // Garante que o wrapper da mensagem de status esteja visível
    showStatus(i18n[currentLang].submitSuccess, "success", true); // Exibe a mensagem de sucesso permanentemente
  }
}

// ─── Busca de Dados Externos ──────────────────────────────────────────────────
async function fetchTurmasData() {
  isFetchingTurmas = true;
  // Se o usuário já estiver na etapa das turmas, renderiza o estado de loading
  const turmasStep = STEPS.find(s => s.fields.some(f => f.id === 'turmas'));
  if (STEPS[currentStep] === turmasStep) renderFields();

  try {
    const response = await fetch('/api/turmas?v=' + Date.now());

    if (response.ok && !response.bodyUsed) {
      const data = await response.json();

      const turmasStep = STEPS.find(s => s.fields.some(f => f.id === 'turmas'));
      if (turmasStep) {
        const field = turmasStep.fields.find(f => f.id === 'turmas');
        field.options = Array.isArray(data.data) 
          ? data.data.map(t => ({ value: t.id, label: t.id + ' - '+t.name })) 
          : [];
        // Se estivermos na etapa das turmas, renderiza novamente
        if (STEPS[currentStep] === turmasStep) renderFields();
      }
    }
  } catch (err) {
    console.error("Erro ao carregar turmas:", err);
  } finally {
    isFetchingTurmas = false;
    if (STEPS[currentStep] === turmasStep) renderFields();
  }
}

async function fetchModulosData(classId) {
  isFetchingModulos = true;
  const modulosStep = STEPS.find(s => s.fields.some(f => f.id === 'modulos'));
  if (STEPS[currentStep] === modulosStep) renderFields();

  try {
    const response = await fetch(`/api/modulos?classId=${classId}&v=${Date.now()}`);

    if (response.ok) {
      const data = await response.json();
      if (modulosStep) {
        const field = modulosStep.fields.find(f => f.id === 'modulos');
        
        // Mapeia os dados vindo da API (ajuste as chaves conforme o retorno do seu backend)
        field.options = Array.isArray(data.data) 
          ? data.data.map(m => ({ 
              value: m.id, 
              label: m.id + " - "+ m.name 
            })) 
          : [];
          
        if (STEPS[currentStep] === modulosStep) renderFields();
      }
    }
  } catch (err) {
    console.error("Erro ao carregar módulos:", err);
  } finally {
    isFetchingModulos = false;
    if (STEPS[currentStep] === modulosStep) renderFields();
  }
}

// ─── Inicialização ────────────────────────────────────────────────────────────
function init() {
  render();

  // Oculta o wrapper da mensagem de status na inicialização
  const statusMessageWrapper = document.getElementById("statusMessageWrapper");
  if (statusMessageWrapper) {
    statusMessageWrapper.style.display = 'none';
  }
  fetchTurmasData();

  // Navegação
  document.getElementById("nextBtn")?.addEventListener("click", goNext);
  document.getElementById("prevBtn")?.addEventListener("click", goPrev);

  // Submit
  document.getElementById("leadForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmit();
  });

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