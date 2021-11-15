/**
 * @param {Document} document
 */
function init(document) {
  const root = document.querySelector(":root");
  const menubtn = document.querySelector("[data-component='menubtn']");
  menubtn.addEventListener("click", () => {
    root.classList.toggle("menu-open");
  });
}

init(document);
