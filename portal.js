(function () {
  "use strict";

  var config = window.CINDERFANG_PORTAL_CONFIG || {};
  var baseUrl = String(config.backendBaseUrl || "").trim().replace(/\/+$/, "");
  var status = document.querySelector("[data-backend-status]");
  var links = document.querySelectorAll("[data-backend-link]");

  function backendPath(path) {
    return baseUrl ? baseUrl + path : "#access";
  }

  links.forEach(function (link) {
    var path = link.getAttribute("data-backend-link");
    link.setAttribute("href", backendPath(path));
    link.addEventListener("click", function (event) {
      if (!baseUrl) {
        event.preventDefault();
        if (status) {
          status.textContent = "The secure employee backend URL has not been configured for this deployment yet.";
          status.classList.add("is-warning");
        }
        document.querySelector("#access").scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  if (status) {
    status.textContent = baseUrl
      ? "Secure employee access is available through the configured Cinderfang backend."
      : "Backend URL not configured — this public page is ready, but employee sign-in remains disabled until the private HTTPS backend is deployed.";
    if (!baseUrl) status.classList.add("is-warning");
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}());
