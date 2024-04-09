// ! Navigation bar effects on scroll
window.addEventListener("scroll", (e) => {
  const Header = document.querySelector("header");
  if (window.scrollY > 10) {
    Header.classList.add("sticky");
  } else {
    Header.classList.remove("sticky");
  }
});

// ! Portfolio section - Modal
// const modal = document.querySelector(".modal");
// const openBtn = document.querySelector("#open-modal");

// const closeBtn = document.querySelector("#modal-close-btn");

// openBtn.onclick = function () {
//   modal.classList.add("modal-show");
// };

// closeBtn.onclick = function () {
//   modal.classList.remove("modal-show");
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.classList.remove("modal-show");
//   }
// };

const modal = document.querySelectorAll(".modal");
const openBtn = document.querySelectorAll("#open-modal");
const closeBtn = document.querySelectorAll("#modal-close-btn");

openBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modal[index].classList.add("modal-show");
  });
});

closeBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modal[index].classList.remove("modal-show");
  });
});

window.onclick = function (event) {
  if (event.target.classList[0] == "modal") {
    modal.forEach((mod) => {
      mod.addEventListener("click", () => {
        mod.classList.remove("modal-show");
      });
    });
  }
};

// ! Website dark/light theme
const themeContainer = document.querySelector(".theme-btn");
const moonBtn = document.querySelector(".fa-moon");
const sunBtn = document.querySelector(".fa-sun");

const savedTheme = localStorage.getItem("dark-theme");
const savedIcon = localStorage.getItem("dark-theme");

if (savedIcon == "true") {
  moonBtn.classList.add("d-none");
  sunBtn.classList.add("d-block");
}
if (savedIcon == "false") {
  moonBtn.classList.remove("d-none");
  sunBtn.classList.add("d-none");
  sunBtn.classList.remove("d-block");
}
if (savedTheme == "true") {
  document.body.classList.add("dark-theme");
}
if (savedTheme == "false") {
  document.body.classList.remove("dark-theme");
}

themeContainer.addEventListener("click", () => {
  moonBtn.classList.toggle("d-none");
  sunBtn.classList.toggle("d-block");

  document.body.classList.toggle("dark-theme");

  localStorage.setItem("dark-theme", getCurrentTheme());
  localStorage.setItem("theme-btn", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? true : false;

const getCurrentIcon = () =>
  themeContainer.childNodes[3].classList.contains("d-block") ? true : false;

// ! Scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 500) {
    scrollBtn.classList.add("active");
  } else {
    scrollBtn.classList.remove("active");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ! Navigation menu items active on page scroll
window.addEventListener("scroll", (e) => {
  const section = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-item a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-item a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

// ! Responsive navigation menu toggle
const navBar = document.querySelector(".navigation");
const navMenu = document.querySelector(".nav-menu-btn");
const navClose = document.querySelector(".nav-close-btn");
const navItem = document.querySelectorAll(".nav-item a");
console.log(navItem);

navMenu.addEventListener("click", () => {
  navBar.classList.add("active");
});

navClose.addEventListener("click", () => {
  navBar.classList.remove("active");
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

window.onclick = function (event) {
  if (event.target.classList[0] == "navigation") {
    navBar.classList.remove("active");
  }
};

// ! Scroll reveal animations
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1900,
  delay: 50,
});

ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02", {
  //   delay: 500,
  origin: "left",
});
ScrollReveal().reveal(
  ".home .info h3, .home .info p, .about-info, .about-info .btn",
  {
    //   delay: 600,
    origin: "right",
  }
);
ScrollReveal().reveal(".home .info .btn", {
  //   delay: 700,
  origin: "bottom",
});
ScrollReveal().reveal(".media-icon li", {
  //   delay: 500,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".home-img, .about-img", {
  //   delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".about .professional-list li", {
  //   delay: 600,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(".skills-description, .services-description", {
  //   delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".skills-description, .services-description", {
  //   delay: 700,
  origin: "left",
});
ScrollReveal().reveal(
  ".service-card, .services-description , .education, .awards ,.project .img-card ,.experience-card",
  {
    //   delay: 800,
    origin: "bottom",
    interval: 200,
  }
);
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
