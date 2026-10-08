(function () {
  "use strict";

  const products = [
    {
      id: "everyday-tote",
      name: "The Everyday Tote",
      type: "tote",
      label: "Primary gift",
      description: "A simple, useful starting point for a client’s next chapter.",
      visualClass: "visual-tote"
    },
    {
      id: "matching-tote",
      name: "The Matching Tote",
      type: "tote",
      label: "Primary gift",
      description: "A tote designed to pair naturally with a thoughtful add-on.",
      visualClass: "visual-tote-alt"
    },
    {
      id: "pet-add-ons",
      name: "Pet Add-ons",
      type: "add-on",
      label: "Optional addition",
      description: "Choose from documented accessories like bandanas, bows, collars, or leashes.",
      visualClass: "visual-addon"
    }
  ];

  const productGrid = document.querySelector("#product-grid");
  const emptyState = document.querySelector("#empty-state");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const selectionCount = document.querySelector("#selection-count");
  const selectionWord = document.querySelector("#selection-word");
  const selectionMessage = document.querySelector("#selection-message");
  const inquiryLink = document.querySelector("#inquiry-link");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector("#site-nav");
  const selectedProducts = new Set();

  function renderProducts(filter) {
    const visibleProducts = filter === "all"
      ? products
      : products.filter(function (product) { return product.type === filter; });

    productGrid.innerHTML = visibleProducts.map(function (product) {
      const isSelected = selectedProducts.has(product.id);
      return [
        '<article class="product-card">',
        '<div class="product-visual ' + product.visualClass + '"><div class="visual-shape" aria-hidden="true"></div></div>',
        '<div class="product-info">',
        '<span class="product-meta">' + product.label + '</span>',
        '<h3>' + product.name + '</h3>',
        '<p>' + product.description + '</p>',
        '<button class="select-gift' + (isSelected ? " is-selected" : "") + '" type="button" data-product-id="' + product.id + '" aria-pressed="' + isSelected + '">' + (isSelected ? "Added to inquiry" : "Add to inquiry") + "</button>",
        "</div>",
        "</article>"
      ].join("");
    }).join("");

    emptyState.hidden = visibleProducts.length > 0;
  }

  function updateInquiry() {
    const count = selectedProducts.size;
    selectionCount.textContent = count;
    selectionWord.textContent = count === 1 ? "item" : "items";
    selectionMessage.textContent = count === 0
      ? "Choose a tote to get started."
      : "Your selections are ready to share with us.";
    inquiryLink.href = count === 0 ? "#gifts" : "#inquiry";
    inquiryLink.textContent = count === 0 ? "Choose a gift →" : "Inquiry selections ready →";
  }

  productGrid.addEventListener("click", function (event) {
    const button = event.target.closest("[data-product-id]");
    if (!button) return;

    const productId = button.getAttribute("data-product-id");
    if (selectedProducts.has(productId)) {
      selectedProducts.delete(productId);
    } else {
      selectedProducts.add(productId);
    }

    const activeFilter = document.querySelector(".filter-button.is-active").getAttribute("data-filter");
    renderProducts(activeFilter);
    updateInquiry();
  });

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (item) { item.classList.remove("is-active"); });
      button.classList.add("is-active");
      renderProducts(button.getAttribute("data-filter"));
    });
  });

  menuToggle.addEventListener("click", function () {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  siteNav.addEventListener("click", function (event) {
    if (event.target.matches("a")) {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  renderProducts("all");
  updateInquiry();
}());
