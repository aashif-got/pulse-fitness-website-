// ==========================================================================
// Wellspring Family Clinic — site scripts
// Features: mobile menu toggle, FAQ accordion, appointment form validation
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Mobile menu toggle ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when a link is tapped (mobile)
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- FAQ accordion (services page) ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", function () {
      var isOpen = item.getAttribute("data-open") === "true";
      // Close any other open items for a clean single-open accordion
      document.querySelectorAll(".faq-item").forEach(function (other) {
        other.setAttribute("data-open", "false");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      item.setAttribute("data-open", isOpen ? "false" : "true");
      question.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  });

  /* ---------- Appointment form validation (contact page) ---------- */
  var form = document.getElementById("appointment-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      var fields = [
        { id: "full-name", check: function (v) { return v.trim().length >= 2; } },
        { id: "email", check: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); } },
        { id: "phone", check: function (v) { return /^[0-9+\-\s()]{7,15}$/.test(v.trim()); } },
        { id: "department", check: function (v) { return v.trim().length > 0; } },
        { id: "preferred-date", check: function (v) { return v.trim().length > 0; } }
      ];

      fields.forEach(function (field) {
        var input = document.getElementById(field.id);
        if (!input) return;
        var row = input.closest(".form-row");
        var ok = field.check(input.value);
        if (row) row.classList.toggle("invalid", !ok);
        if (!ok) valid = false;
      });

      var statusBox = document.getElementById("form-status");

      if (valid) {
        form.reset();
        document.querySelectorAll(".form-row.invalid").forEach(function (r) {
          r.classList.remove("invalid");
        });
        if (statusBox) {
          statusBox.textContent = "Thank you — your appointment request has been received. Our team will call you to confirm a time.";
          statusBox.classList.add("visible");
        }
      } else {
        if (statusBox) {
          statusBox.textContent = "Please check the highlighted fields and try again.";
          statusBox.classList.add("visible");
          statusBox.style.background = "#FBE4D8";
          statusBox.style.color = "#B24A26";
        }
      }
    });
  }

});
