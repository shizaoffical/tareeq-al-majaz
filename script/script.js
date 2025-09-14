/////////////////////////////////////////////// Navbar js
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.querySelector(".navbar-overlay");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.add("show");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    navbarCollapse.classList.remove("show");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    navbarCollapse.classList.remove("show");
    overlay.classList.remove("active");
  });

  // Fix dropdown behavior (click + hover)
  const dropdowns = document.querySelectorAll(".nav-item.dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      this.querySelector(".dropdown-menu").classList.add("show");
    });

    dropdown.addEventListener("mouseleave", function () {
      this.querySelector(".dropdown-menu").classList.remove("show");
    });

    dropdown.querySelector(".dropdown-toggle").addEventListener("click", function (e) {
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      const isOpen = dropdownMenu.classList.contains("show");
      
      document.querySelectorAll(".dropdown-menu").forEach((menu) => menu.classList.remove("show"));

      if (!isOpen) {
        dropdownMenu.classList.add("show");
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item.dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => menu.classList.remove("show"));
    }
  });
});

// //////////////////////////////////////////Services slider js
let services = document.querySelectorAll(".service");
let isPaused = false;
let interval;
function moveSlider() {
  if (isPaused) return;
  let firstElement = services[0];
  document.querySelector(".slider").appendChild(firstElement);
  services = document.querySelectorAll(".service");
  services.forEach((service) => service.classList.remove("active"));
  services[1].classList.add("active");
}
function startSlider() {
  interval = setInterval(moveSlider, 1500);
}
function stopSlider() {
  clearInterval(interval);
}
startSlider();
document.querySelector(".slider").addEventListener("click", () => {
  isPaused = !isPaused;
  if (isPaused) {
    stopSlider();
  } else {
    startSlider();
  }
});




