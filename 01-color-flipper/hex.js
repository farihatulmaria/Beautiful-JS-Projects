const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const btnInput = document.getElementById("btn-input");
const inputColor = document.getElementById("input-color");
const color = document.querySelector(".color");


btnInput.addEventListener("click", function () {
  document.body.style.backgroundColor = inputColor.value;
});
 
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNum()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

 
color.addEventListener("hover", function(){
  copyToClipboard(color.textContent)
})

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

