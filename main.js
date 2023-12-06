const domain = "http://192.168.1.8:3000";
const navLink = document.querySelectorAll(".sidebar__nav-link");
const launchAppButton = document.querySelector(".launch-app");
const buyVenButton = document.querySelector(".buy-ven");

const redirectLink = () => {
  window.location.assign(`${domain}/swap`);
};

launchAppButton.addEventListener("click", redirectLink);

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".sidebar__nav-link a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".sidebar__nav-link a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);
window.removeEventListener("scroll", scrollActive);
