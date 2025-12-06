// Non-critical: Form and accordion functionality - loads after user interaction
(function () {
  "use strict";

  // Accordion functionality
  const initAccordion = () => {
    const accordion = document.querySelector(".accordion");
    if (accordion) {
      const togglerClass = "footer__title";
      const itemClass = "footer__title";
      const itemClosedClass = "is-open";

      const closeAccordionItems = (accordion, itemClass, itemClosedClass) => {
        accordion
          .querySelectorAll(`.${itemClass}`)
          .forEach((element, index) => {
            if (index !== 0) {
              element.classList.remove(itemClosedClass);
            }
          });
      };

      closeAccordionItems(accordion, itemClass, itemClosedClass);

      accordion.addEventListener("click", (event) => {
        const toggler = event.target.closest(`.${togglerClass}`);
        if (toggler) {
          const item = toggler.closest(`.${itemClass}`);
          const isOpened = item.classList.contains(itemClosedClass);
          if (isOpened) {
            item.classList.remove(itemClosedClass);
          } else {
            item.classList.add(itemClosedClass);
          }
        }
      });
    }
  };

  // Language select functionality
  const initLangSelect = () => {
    const langSelect = document.querySelector(".lang-select");
    if (langSelect) {
      const langLinks = langSelect.querySelectorAll(".lang-select__option a");
      langLinks.forEach((link) => {
        link.addEventListener("click", () => {
          langSelect.classList.remove("active");
        });
      });
    }
  };

  // Initialize on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initAccordion();
      initLangSelect();
    });
  } else {
    initAccordion();
    initLangSelect();
  }
})();
