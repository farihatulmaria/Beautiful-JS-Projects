// ------------------- updating date----------------

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ------------------- toggle link----------------

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.add("show-links");
});
