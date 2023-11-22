const domain = "http://192.168.1.8:3000";
const navLink = document.querySelectorAll(".sidebar__nav-link");
const launchAppButton = document.querySelector("#launch-app");
const buyVenButton = document.querySelector("#buy-ven");

const redirectLink = () => {
  window.location.assign(`${domain}/swap`);
};

navLink.forEach((link) => {
  link.addEventListener("click", redirectLink);
});

launchAppButton.addEventListener("click", redirectLink);
buyVenButton.addEventListener("click", redirectLink);
