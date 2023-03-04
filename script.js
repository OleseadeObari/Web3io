"use strict";
const menu = document.querySelector(".opened");
const closeMenu = document.querySelector(".closed");
const navMenu = document.querySelector(".nav-menu");
const backdrop = document.querySelector(".backdrop");

menu.addEventListener("click", function () {
  backdrop.classList.remove("hidden");
  console.log("backdrop has been activated");
  navMenu.classList.remove("hide");
  console.log("nav menu has been added");
  closeMenu.classList.remove("close");
});

closeMenu.addEventListener("click", function () {
  menu.classList.add("open");
  closeMenu.classList.add("close");
  backdrop.classList.add("hidden");
});
backdrop.addEventListener("click", function () {
  backdrop.classList.add("hidden");
  closeMenu.classList.add("close");
});
