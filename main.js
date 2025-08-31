/* ===============================
   Navegación activa con scroll
=============================== */
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

/* ===============================
   Botón "Volver arriba"
=============================== */
const backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.padding = "10px 14px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.background = "var(--primary)";
backToTop.style.color = "white";
backToTop.style.fontSize = "18px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.boxShadow = "0 6px 14px rgba(0,0,0,.2)";
backToTop.style.zIndex = "1000";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

/* ===============================
   Menú hamburguesa para móviles
=============================== */
const nav = document.querySelector(".main-nav ul");
const burger = document.createElement("button");
burger.innerHTML = "☰";
burger.id = "burgerBtn";
document.querySelector(".main-header .container").insertBefore(burger, nav);

burger.style.fontSize = "22px";
burger.style.background = "none";
burger.style.border = "none";
burger.style.cursor = "pointer";
burger.style.display = "none";

/* Mostrar solo en pantallas pequeñas */
function checkBurger() {
  if (window.innerWidth <= 768) {
    burger.style.display = "block";
    nav.style.display = "none";
  } else {
    burger.style.display = "none";
    nav.style.display = "flex";
  }
}
checkBurger();
window.addEventListener("resize", checkBurger);

burger.addEventListener("click", () => {
  nav.style.display = (nav.style.display === "none" ? "flex" : "none");
});

/* ===============================
   Animaciones de aparición
=============================== */
const revealElements = document.querySelectorAll(".content-section, .card, .content-article");
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Botón de música
const musicBtn = document.getElementById("musicBtn");
const themeSong = document.getElementById("themeSong");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    themeSong.play();
    isPlaying = true;
    musicBtn.textContent = "⏸️"; // cambia icono a pausa
    musicBtn.setAttribute("aria-label", "Pausar música");
  } else {
    themeSong.pause();
    isPlaying = false;
    musicBtn.textContent = "🎵"; // vuelve a icono de música
    musicBtn.setAttribute("aria-label", "Reproducir música");
  }
});
