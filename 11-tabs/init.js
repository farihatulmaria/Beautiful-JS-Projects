const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (event) {
  const id = event.target.dataset.id;
  if (id) {
    //   removing .active from button
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      event.target.classList.add("active");
    });
    // hide other articles
    articles.forEach(function (articles) {
      articles.classList.remove("active");
      event.target.classList.add("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
