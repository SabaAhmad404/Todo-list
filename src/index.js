import './style.css';
import addRemove from './module/addandremove.js';

let arr = [];

const arrCollection = () => {
  const names = document.querySelector('#items').value;
  const boolen = false;
  const id = arr.length;
  arr.push({ names, boolen, id });
};
const arrowImage = document.querySelector('#materialistic');
arrowImage.addEventListener('click', () => {
  arrCollection();
  localStorage.setItem('arr', JSON.stringify(arr));
  window.location.reload();
});
arr = JSON.parse(localStorage.getItem('arr')) || [];
addRemove();
