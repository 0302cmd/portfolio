// eslint-disable-next-line no-unused-vars
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openInNewTab(url) {
  window.open(url, "_blank").focus();
}
