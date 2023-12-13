const domain = "https://exchange.abstradex.xyz";
const navLinks = document.querySelectorAll(".sidebar__nav-item");
const launchAppButton = document.querySelector(".launch-app");
const buyVenButton = document.querySelector("#buy-ven");
const menuButton = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".sidebar__nav-list");
const closeMenuButton = document.querySelector(".close-menu-button");
const container = document.querySelector("body");
// const preLoadingElm = document.querySelector("#pre-loading");

// function initLoading() {
//   let loadCount = 0,
//     imgs = document.querySelectorAll("img").length;
//   let imgLoaded = imagesLoaded(container);

//   imgLoaded
//     .on("progress", () => {
//       loadCount++;
//       percent = ((loadCount / imgs) * 100).toFixed();
//       console.log(percent);
//       handleLoading(percent);
//     })
//     .on("always", () => {
//       console.log("always");
//     })
//     .on("fail", () => {
//       console.log("fail");
//     })
//     .on("done", () => {
//       setTimeout(() => hideLoading(), 1500);
//     });
// }

// initLoading();

function handleLoading(percent) {
  const textProgress = document.querySelector("#pre-loading-text");
  textProgress.innerHTML = `${percent}%`;
}

// function hideLoading() {
//   preLoadingElm.classList.add("is-loaded");
//   container.classList.remove("is-disable-scroll");
// }

const redirectLink = () => {
  window.location.assign(`${domain}`);
};

launchAppButton.addEventListener("click", redirectLink);

buyVenButton.addEventListener("click", redirectLink);

const sections = document.querySelectorAll("section[id]");
console.log(sections);

function activeLink(li) {
  navLinks.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}

navLinks.forEach((item) => {
  const secId = item.getAttribute("data-id");
  item.addEventListener("click", function () {
    activeLink(this);
    toggleMenu();
    sections[`${secId}`].scrollIntoView();
  });
});

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
