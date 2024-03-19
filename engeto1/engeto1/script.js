// Menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("header nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuList.style.display = "none";

// Add event listener to the menu icon
menuIcon.addEventListener("click", () => {
  // Toggle the menu icon and menu list
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
    menuList.style.display = "none";
  }
});
