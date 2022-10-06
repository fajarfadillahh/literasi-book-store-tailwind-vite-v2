import "../css/index.css";

// ===== SHOW MENU =====
function showMenu(menuId, toggleId) {
  let menu = document.getElementById(menuId);
  let toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show-menu");
    });
  }
}
showMenu("header-menu", "header-toggle");
