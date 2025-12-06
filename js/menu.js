// Critical: Menu functionality - loads immediately
(function () {
  "use strict";

  const headerMenu = document.querySelector(".header-menu");
  const menuButton = document.querySelector(".menu-button");
  const headerLinks = document.querySelectorAll(".header-menu__link");

  if (!headerMenu || !menuButton) return;

  const showMenu = () => {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "close menu");
    headerMenu.classList.remove("header-menu--closed");
    headerMenu.classList.add("header-menu--opened");
  };

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "open menu");
    headerMenu.classList.add("header-menu--closed");
    headerMenu.classList.remove("header-menu--opened");
  };

  menuButton.addEventListener("click", () => {
    if (headerMenu.classList.contains("header-menu--closed")) {
      showMenu();
    } else {
      closeMenu();
    }
  });

  headerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (headerMenu.classList.contains("header-menu--opened")) {
        closeMenu();
      }
      const target = document.querySelector("#" + link.href.split("#")[1]);
      if (target) {
        window.scroll({
          behavior: "smooth",
          left: 0,
          top: target.offsetTop,
        });
      }
    });
  });
})();
