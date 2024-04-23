const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNum()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
function getRandomNum() {
  return Math.floor(Math.random() * hex.length);
}

/* 
I did it all by myself

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorChangingBtn = document.getElementById("btn");
const colorName = document.querySelector(".color");

colorChangingBtn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  colorName.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
*/

const copyToClipboard = (element) => {
  const copyText = element.innerText;

  const el = document.createElement("input");
  el.value = copyText;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

