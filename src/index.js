import "./style.css";
import dots from "./images/dots.png";

let arr = [];

const arrCollection = () => {
  const names = document.querySelector("#items").value;
  const boolen = false;
  const id = arr.length;
  arr.push({ names, boolen, id });
};
const arrowImage = document.querySelector("#materialistic");
arrowImage.addEventListener("click", () => {
  arrCollection();
  localStorage.setItem("arr", JSON.stringify(arr));
  window.location.reload();
});
arr = JSON.parse(localStorage.getItem("arr")) || [];

const list = document.querySelector(".container");
for (let i = 0; i < arr.length; i += 1) {
  const itemOfList = document.createElement("div");
  itemOfList.classList.add("list-class");
  list.append(itemOfList);
  const box = document.createElement("input");
  box.type = "checkbox";
  itemOfList.append(box);
  const paragraph = document.createElement("p");
  paragraph.classList.add("para-text");
  paragraph.innerText = arr[i].names;
  itemOfList.append(paragraph);
  const imgs = document.createElement("img");
  imgs.classList.add("list-images");
  itemOfList.append(imgs);
  imgs.src = dots;
}
