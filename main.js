const baseUrl = "https://exchange.abstradex.xyz";
const navLinks = document.querySelectorAll(".sidebar__nav-item");
const launchAppButton = document.querySelector(".launch-app");
const buyVenButton = document.querySelector("#buy-ven");
const menuButton = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".sidebar__nav-list");
const closeMenuButton = document.querySelector(".close-menu-button");
const container = document.querySelector("body");
const switchNetwork = document.querySelector(".switch-network-wrapper");
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

const redirectLink = (domain) => {
  window.location.assign(`${domain}`);
};

window.addEventListener("click", () => {
  switchNetwork.classList.remove("open");
});

launchAppButton.addEventListener("click", (e) => {
  e.stopPropagation();
  switchNetwork.classList.toggle("open");
});

buyVenButton.addEventListener("click", () => redirectLink(baseUrl));

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
