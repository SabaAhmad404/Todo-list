import './style.css';
import dots from './images/dots.png';

const arr = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'clean the house',
    completed: false,
    index: 2,
  },
  {
    description: 'complete the project',
    completed: true,
    index: 3,
  },
];

const list = document.querySelector('.container');
for (let i = 0; i < arr.length; i += 1) {
  const itemOfList = document.createElement('div');
  itemOfList.classList.add('list-class');
  list.append(itemOfList);
  const box = document.createElement('input');
  box.type = 'checkbox';
  itemOfList.append(box);
  const paragraph = document.createElement('p');
  paragraph.classList.add('para-text');
  paragraph.innerText = arr[i].description;
  itemOfList.append(paragraph);
  const imgs = document.createElement('img');
  imgs.classList.add('list-images');
  itemOfList.append(imgs);
  imgs.src = dots;
}
