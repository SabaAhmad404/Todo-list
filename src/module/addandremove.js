/* eslint-disable */
let arr = [];
arr = JSON.parse(localStorage.getItem("arr")) || [];
const addRemove = () => {
  for (let i = 0; i < arr.length; i += 1) {
    const list = document.querySelector(".container");
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
    const editImage = document.createElement("i");
    editImage.classList.add("fa-solid");
    editImage.classList.add("fa-user-pen");
    itemOfList.append(editImage);

    const dotsImage = document.createElement("i");
    dotsImage.classList.add("fa-solid");
    dotsImage.classList.add("fa-ellipsis-vertical");
    itemOfList.append(dotsImage);

    const binImage = document.createElement("i");
    binImage.classList.add("fa-solid");
    binImage.classList.add("fa-trash");
    itemOfList.append(binImage);
    binImage.style.display = "none";
    const deletList = () => {
      const target = dotsImage.id;
      arr.splice(target, 1);

      let newThing = 0;
      if (arr.length > 0) {
        arr.forEach((e) => {
          e.id = newThing;
          newThing += 1;
        });
      }
    };
    dotsImage.addEventListener("click", () => {
      arr = JSON.parse(localStorage.getItem("arr")) || [];
      deletList();
      localStorage.setItem("arr", JSON.stringify(arr));
      binImage.style.display = "none";
      window.location.reload();
    });

    binImage.addEventListener("click", () => {
      arr = JSON.parse(localStorage.getItem("arr")) || [];
      deletList();
      localStorage.setItem("arr", JSON.stringify(arr));
      binImage.style.display = "none";
      window.location.reload();
    });

    editImage.addEventListener("click", () => {
      editImage.style.display = "none";
      const divElement = document.createElement("div");
      divElement.classList.add("inner-div");
      paragraph.append(divElement);
      const editText = document.createElement("input");
      editText.setAttribute("type", "text");
      editText.classList.add("inner-text");
      editText.value = paragraph.innerText;
      divElement.appendChild(editText);

      const editButton = document.createElement("Button");
      editButton.classList.add("inner-button");
      editButton.innerText = "edit";
      divElement.append(editButton);
      editButton.addEventListener("click", () => {
        arr = JSON.parse(localStorage.getItem("arr")) || [];
        arr[i].names = editText.value;
        localStorage.setItem("arr", JSON.stringify(arr));
        window.location.reload();
      });

      dotsImage.style.display = "none";
      binImage.style.display = "block";
    });
  }
};
export { addRemove as default };
