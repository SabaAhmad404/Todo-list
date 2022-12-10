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

    const binImage = document.createElement("i");
    binImage.classList.add("fa-solid");
    binImage.classList.add("fa-trash");
    itemOfList.append(binImage);
    //delet//
    const deletList = () => {
      const target = binImage.id;
      arr.splice(target, 1);

      let newThing = 0;
      if (arr.length > 0) {
        arr.forEach((e) => {
          e.id = newThing;
          newThing += 1;
        });
      }
    };

    binImage.addEventListener("click", () => {
      arr = JSON.parse(localStorage.getItem("arr")) || [];
      deletList();
      localStorage.setItem("arr", JSON.stringify(arr));
      binImage.style.display = "none";
      window.location.reload();
    });

    paragraph.addEventListener("click", () => {
      const divElement = document.createElement("div");
      divElement.classList.add("inner-div");
      itemOfList.append(divElement);
      const editText = document.createElement("input");
      editText.setAttribute("type", "text");
      editText.classList.add("inner-text");
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
      binImage.style.display = "block";
    });
  }
};
export { addRemove as default };
