/* Stylique Muse contact form
 * Set WEBHOOK_URL to the published n8n production webhook before deployment.
 * Never put Resend or Meta access tokens in this file.
 */
const WEBHOOK_URL = "YOUR_N8N_PRODUCTION_WEBHOOK_URL";

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
const submitButton = form.querySelector('button[type="submit"]');
const submitLabel = form.querySelector(".submit-label");

function showStatus(message, type) {
  status.textContent = message;
  status.className = `form-status ${type}`;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  if (WEBHOOK_URL === "YOUR_N8N_PRODUCTION_WEBHOOK_URL") {
    showStatus("The contact form is designed and ready, but automated messaging has not been connected yet. Please email styliquemuse@gmail.com for now.", "error");
    return;
  }

  const data = new FormData(form);
  const payload = {
    name: String(data.get("name") || "").trim(),
    email: String(data.get("email") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    message: String(data.get("message") || "").trim(),
    whatsappConsent: data.get("whatsappConsent") === "on",
    source: "styliquemuse-website"
  };

  if (!payload.name || !payload.email || !payload.phone || !payload.message) {
    showStatus("Please complete all required fields.", "error");
    return;
  }

  submitButton.disabled = true;
  submitLabel.textContent = "Sending…";
  showStatus("", "");

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("The form could not be submitted.");
    showStatus("Thank you! Your enquiry has been submitted. Please check your inbox for confirmation.", "success");
    form.reset();
  } catch (error) {
    showStatus("We couldn't send your message just now. Please email styliquemuse@gmail.com and try again later.", "error");
  } finally {
    submitButton.disabled = false;
    submitLabel.textContent = "Send my message";
  }
});

const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.textContent = "☰";
}));
document.querySelector("#year").textContent = new Date().getFullYear();
