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

// Seleciona o botão
const backToTopButton = document.getElementById("back-to-top");

// Adiciona um listener de rolagem na janela
window.addEventListener("scroll", () => {
  // Verifica a quantidade de rolagem vertical
  if (window.scrollY > 300) {
    backToTopButton.style.display = "flex";
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.display = "none";
    backToTopButton.style.opacity = "0";
  }
});

// Adiciona um listener de clique ao botão
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Rola suavemente para o topo
  });
});
