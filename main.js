// Loader hide on page load
// Loader hide on page load + iniciar partículas
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      iniciarParticulas(); // ✅ iniciar partículas después
    }, 1500);
  } else {
    iniciarParticulas(); // fallback
  }
});

// Función para cargar partículas
function iniciarParticulas() {
  tsParticles.load("tsparticles", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outMode: "bounce",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
      },
    },
    background: {
      color: "#0d0d0d",
    },
  });
}

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
  e.preventDefault();

  const inputName = document.getElementById("name").value.trim();
  const inputEmail = document.getElementById("email").value.trim();
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let hasErrors = false;

  if (!inputName) {
    errorMessages[0].textContent = "Debes ingresar un nombre valido";
    errorMessages[0].classList.add("errorMessage");
    hasErrors = true;
  } else {
    errorMessages[0].style.display = "none";
  }

  if (!inputEmail || !regEx.test(inputEmail)) {
    errorMessages[1].textContent = "Debes ingresar un email valido";
    errorMessages[1].classList.add("errorMessage");
    hasErrors = true;
  } else {
    errorMessages[1].style.display = "none";
  }

  if (hasErrors) return;

  Swal.fire({
    title: "Exito!",
    text: "El formulario ha sido enviado con exito!, pronto estaremos en contacto contigo.",
    icon: "success",
  });

  form.reset();
});
