/* 
 Doing toggle without toggle()

const navToggles = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggles.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});
 */

//  Doing toggle with toggle()

const navToggles = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggles.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
