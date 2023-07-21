console.log("witajcie developerzy");

let photo = document.querySelector(".headerContainer__photo");
let przycisk = document.querySelector(".headerContainer__button");

przycisk.addEventListener("click", () => {
    if (photo.src.endsWith("img/image_1.jpg")) {
        photo.src = "img/image_2.jpg";
    } else if (photo.src.endsWith("img/image_2.jpg")) {
        photo.src = "img/image_3.jpg";
    } else if (photo.src.endsWith("img/image_3.jpg")) {
        photo.src = "img/image_1.jpg";
    }
});