import showParticles from "./js/particlesConfig.js";

// Loader hide on page load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1500);
  } 
});

// Elements
const hamburguerMenu = document.querySelector("#hamburguer__menu");
const responsiveNav = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__link");

// Show Menu (Tablet and Mobile)
hamburguerMenu.addEventListener("click", () => {
  responsiveNav.classList.toggle("active");
});

// Remove class .active from CSS once the user click any link
links.forEach((link) => {
  link.addEventListener("click", () => {
    if (responsiveNav.classList.contains("active")) {
      responsiveNav.classList.remove("active");
    }
  });
});

// Form Section
const form = document.getElementById("form");
const errorMessages = document.getElementsByClassName("errorMessage");

form.addEventListener("submit", (e) => {
  const inputName = document.getElementById("name").value.trim();
  const inputEmail = document.getElementById("email").value.trim();
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let hasErrors = false;

  if (!inputName) {
    errorMessages[0].textContent = "Debes ingresar un nombre válido";
    hasErrors = true;
  } else {
    errorMessages[0].textContent = "";
  }

  if (!inputEmail || !regEx.test(inputEmail)) {
    errorMessages[1].textContent = "Debes ingresar un email válido";
    hasErrors = true;
  } else {
    errorMessages[1].textContent = "";
  }

  if (hasErrors) {
    e.preventDefault();
    return;
  }
});


showParticles()