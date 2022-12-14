let arr = [];
const checkingList = (box) => {
  if (box.checked) {
    arr = JSON.parse(localStorage.getItem('arr')) || [];
    arr[box.id].completed = true;
    localStorage.setItem('arr', JSON.stringify(arr));
  } else {
    arr = JSON.parse(localStorage.getItem('arr')) || [];
    arr[box.id].completed = false;
    localStorage.setItem('arr', JSON.stringify(arr));
  }
  window.location.reload();
};

export { checkingList as default };
