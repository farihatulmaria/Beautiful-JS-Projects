const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randoamNum = getRandomNum();
  document.body.style.backgroundColor = colors[randoamNum];
  color.textContent = colors[randoamNum];
});
// color.addEventListener("click", function () {});
function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
