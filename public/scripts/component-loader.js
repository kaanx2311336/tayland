async function loadComponents() {
  const targets = document.querySelectorAll("[data-component]");

  await Promise.all(Array.from(targets).map(async (target) => {
    const name = target.dataset.component;
    const response = await fetch(`components/${name}.html`);
    if (!response.ok) {
      target.innerHTML = "";
      return;
    }
    target.innerHTML = await response.text();
  }));

  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadComponents);
