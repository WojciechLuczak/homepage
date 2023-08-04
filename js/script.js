{
  function changeImage() {
    const photo = document.querySelector(".headerContainer__photo");
    const currentImage = photo.src.split("/").pop();

    switch (currentImage) {
      case "image_1.jpg":
        photo.src = "img/image_2.jpg";
        break;
      case "image_2.jpg":
        photo.src = "img/image_3.jpg";
        break;
      case "image_3.jpg":
        photo.src = "img/image_1.jpg";
        break;
    }
    /* this is previous version of coding exchange of the photo:
    
     if (currentImage === "image_1.jpg") {
       photo.src = "img/image_2.jpg";
     } else if (currentImage === "image_2.jpg") {
       photo.src = "img/image_3.jpg";
     } else if (currentImage === "image_3.jpg") {
       photo.src = "img/image_1.jpg";
     }*/
  }
function init () {
  let przycisk = document.querySelector(".headerContainer__button");
  przycisk.addEventListener("click", changeImage);
}
 init();
}