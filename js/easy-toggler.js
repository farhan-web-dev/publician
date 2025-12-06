// Non-critical: Easy toggler library - loads after user interaction
(function () {
  "use strict";

  // Minimal easy-toggler implementation
  const toggle = ($toggler, attrs) => {
    const _target = $toggler.getAttribute(attrs.toggle);
    document.querySelectorAll(`[${attrs.toggle}]`).forEach((easyBlock) => {
      if (!easyBlock.hasAttribute(attrs.parallel) && easyBlock !== $toggler) {
        const targetEl = document.querySelector(
          easyBlock.getAttribute(attrs.toggle)
        );
        if (targetEl) {
          targetEl.classList.remove(easyBlock.getAttribute(attrs.class));
        }
        const _selfClass = $toggler.getAttribute(attrs.self);
        if (_selfClass) {
          $toggler.classList.remove(_selfClass);
        }
      }
    });
    const targetEl = document.querySelector(_target);
    if (targetEl) {
      targetEl.classList.toggle($toggler.getAttribute(attrs.class));
    }
    const _selfClass = $toggler.getAttribute(attrs.self);
    if (_selfClass) {
      $toggler.classList.toggle(_selfClass);
    }
    attrs.onToggle($toggler);
  };

  const add = ($add, attrs) => {
    const _target = $add.getAttribute(attrs.add);
    const _class = $add.getAttribute(attrs.class);
    document.querySelectorAll(_target).forEach((easyBlock) => {
      easyBlock.classList.add(_class);
    });
    const _selfClass = $add.getAttribute(attrs.self);
    if (_selfClass) {
      $add.classList.add(_selfClass);
    }
    attrs.onAdd($add);
  };

  const remove = ($remove, attrs) => {
    const _target = $remove.getAttribute(attrs.remove);
    const _class = $remove.getAttribute(attrs.class);
    document.querySelectorAll(_target).forEach((easyBlock) => {
      easyBlock.classList.remove(_class);
    });
    const _selfClass = $remove.getAttribute(attrs.self);
    if (_selfClass) {
      $remove.classList.remove(_selfClass);
    }
    attrs.onRemove($remove);
  };

  const rcoes = (e, attrs) => {
    const $rcoes = document.querySelectorAll(`[${attrs.rcoe}]`);
    Array.from($rcoes).forEach(($rcoe) => {
      let block = $rcoe.getAttribute(attrs.toggle);
      let block_class = $rcoe.getAttribute(attrs.class);
      if (!e.target.closest(block)) {
        const blockEl = document.querySelector(block);
        if (blockEl) {
          blockEl.classList.remove(block_class);
        }
        const _selfClass = $rcoe.getAttribute(attrs.self);
        if (_selfClass) {
          $rcoe.classList.remove(_selfClass);
        }
        attrs.onRcoe($rcoe);
      }
    });
  };

  function easyTogglerHandler(e, attrs) {
    const $toggler = e.target.closest(`[${attrs.toggle}]`);
    const $remove = e.target.closest(`[${attrs.remove}]`);
    const $add = e.target.closest(`[${attrs.add}]`);

    if ($toggler) {
      e.preventDefault();
      toggle($toggler, attrs);
    }

    if ($remove) {
      e.preventDefault();
      remove($remove, attrs);
    }

    if ($add) {
      e.preventDefault();
      add($add, attrs);
    }

    if (!$toggler && !$remove && !$add) {
      rcoes(e, attrs);
    }
  }

  const attrsDefault = {
    toggle: "easy-toggle",
    add: "easy-add",
    remove: "easy-remove",
    class: "easy-class",
    rcoe: "easy-rcoe",
    parallel: "easy-parallel",
    self: "easy-self",
    selfRcoe: "easy-self-rcoe",
    onToggle($el) {},
    onAdd($el) {},
    onRemove($el) {},
    onRcoe($el) {},
  };

  const easySetup = (params) => {
    const customAttrs = { ...attrsDefault, ...params };
    document.addEventListener("click", (e) => {
      easyTogglerHandler(e, customAttrs);
    });
  };

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      easySetup({
        toggle: "easy-toggle",
        add: "easy-add",
        remove: "easy-remove",
        class: "easy-class",
        rcoe: "easy-rcoe",
        parallel: "easy-parallel",
        self: "easy-self",
        selfRcoe: "easy-self-rcoe",
        onToggle($el) {},
        onAdd($el) {},
        onRemove($el) {},
        onRcoe($el) {},
      });
    });
  } else {
    easySetup({
      toggle: "easy-toggle",
      add: "easy-add",
      remove: "easy-remove",
      class: "easy-class",
      rcoe: "easy-rcoe",
      parallel: "easy-parallel",
      self: "easy-self",
      selfRcoe: "easy-self-rcoe",
      onToggle($el) {},
      onAdd($el) {},
      onRemove($el) {},
      onRcoe($el) {},
    });
  }
})();
