const domain = "http://192.168.1.8:3000";
const navLinks = document.querySelectorAll(".sidebar__nav-item");
const launchAppButton = document.querySelector(".launch-app");
const buyVenButton = document.querySelector(".buy-ven");
const menuButton = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".sidebar__nav-list");
const closeMenuButton = document.querySelector(".close-menu-button");

const redirectLink = () => {
  window.location.assign(`${domain}/swap`);
};

launchAppButton.addEventListener("click", redirectLink);

const sections = document.querySelectorAll("section");

function activeLink(li) {
  navLinks.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}

navLinks.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
    toggleMenu();
  })
);

function toggleMenu() {
  menu.classList.toggle("open");
}

menuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);

// window.onscroll = () => {
//   sections.forEach((section) => {
//     let top = window.scrollY;
//     let offset = section.offsetTop;
//     let height = section.offsetHeight;
//     let id = section.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       const target = document.querySelector(`[href='#${id}']`).parentElement;
//       activeLink(target);
//     }
//   });
// };
