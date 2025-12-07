// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  setupContactForm();
});

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("contactAlert");

  if (!form || !alertBox) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    alertBox.classList.add("d-none");
    alertBox.classList.remove("alert-success", "alert-danger");
    alertBox.textContent = "";

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    let isValid = true;

    if (!nameInput.value.trim()) {
      nameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      nameInput.classList.remove("is-invalid");
    }

    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
    }

    if (!messageInput.value.trim()) {
      messageInput.classList.add("is-invalid");
      isValid = false;
    } else {
      messageInput.classList.remove("is-invalid");
    }

    if (!isValid) {
      alertBox.classList.remove("d-none");
      alertBox.classList.add("alert-danger");
      alertBox.textContent = "Please fix the errors in the form and try again.";
      return;
    }

    alertBox.classList.remove("d-none");
    alertBox.classList.add("alert-success");
    alertBox.textContent =
      "Thank you for reaching out! Your message has been received.";

    form.reset();
  });
}

function validateEmail(email) {
  const trimmed = email.trim();
  if (!trimmed) return false;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(trimmed);
}
