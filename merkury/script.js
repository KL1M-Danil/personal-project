const menuItems = document.querySelectorAll(".menu-items");
const icon = document.querySelector(".menu-icon");
const mastheadMenu = document.querySelector(".masthead-menu");
//const masthead = document.querySelector(".masthead");

icon.addEventListener("click", onIconClick);

function onIconClick(event) {
  event.preventDefault();

  mastheadMenu.classList.toggle("masthead-menu-open");

  //masthead.classList.toggle("masthead-open");

  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].classList.toggle("menu-item-open");
  }
}
