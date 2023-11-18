// hamburger menu
function toggleMenu() {
  const hamburger = document.querySelector(".hamburger")
  hamburger.classList.toggle("cross")

  const menuContainer = document.getElementById("menuContainer")
  menuContainer.classList.toggle("active")
}
