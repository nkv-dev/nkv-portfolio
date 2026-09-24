function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn?.querySelector(".btn-text");
  const btnIcon = submitBtn?.querySelector(".btn-icon");
  const btnLoader = submitBtn?.querySelector(".btn-loader");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (successMessage) successMessage.classList.add("hidden");
    if (errorMessage) errorMessage.classList.add("hidden");

    if (submitBtn) submitBtn.disabled = true;
    btnText?.classList.add("hidden");
    btnIcon?.classList.add("hidden");
    btnLoader?.classList.remove("hidden");
    btnLoader?.classList.add("flex");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        const counter = document.getElementById("charCount");
        if (counter) counter.textContent = "0";
        if (successMessage) successMessage.classList.remove("hidden");
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      if (errorMessage) errorMessage.classList.remove("hidden");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      btnText?.classList.remove("hidden");
      btnIcon?.classList.remove("hidden");
      btnLoader?.classList.add("hidden");
      btnLoader?.classList.remove("flex");
    }
  });
}

function initCharacterCounter() {
  const textarea = document.getElementById("message");
  const counter = document.getElementById("charCount");
  if (!textarea || !counter) return;

  textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length;
  });
}

function initFormValidation() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("blur", () => {
      const isValid = field.hasAttribute("required") ? field.value.trim() !== "" : true;
      field.setAttribute("aria-invalid", String(!isValid));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
  initCharacterCounter();
  initFormValidation();
});