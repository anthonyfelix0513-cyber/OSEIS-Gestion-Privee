// Adresse de réception du formulaire de contact — à remplacer par l'adresse réelle d'OSEIS.
const CONTACT_EMAIL = "contact@oseis.fr";

document.documentElement.classList.remove("no-js");

// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  });
}

// Apparition au défilement
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}

// Formulaire de contact : ouvre le client mail de la personne (aucun serveur requis)
const form = document.getElementById("contact-form");
if (form) {
  const status = document.getElementById("form-status");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (form.website.value) return; // anti-spam (champ piège)
    const d = new FormData(form);
    const subject = `[OSEIS] ${d.get("sujet")} — ${d.get("nom")}`;
    const body = [
      `Nom : ${d.get("nom")}`,
      `E-mail : ${d.get("email")}`,
      `Téléphone : ${d.get("tel") || "non renseigné"}`,
      `Sujet : ${d.get("sujet")}`,
      "",
      d.get("message"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Votre messagerie va s'ouvrir avec le message prêt à envoyer. Merci de votre confiance.";
  });
}
