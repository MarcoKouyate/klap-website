var burgerMenu = document.getElementById("burgerMenu");
var menu = document.getElementById("menu");

function openMenu(){

  menu.classList.remove("d-none");
  menu.classList.add("d-block");
}

function closeMenu(){
  menu.classList.remove("d-block");
  menu.classList.add("d-none");
}

burgerMenu.addEventListener("click", openMenu,false);
menu.addEventListener("click", closeMenu,false);
