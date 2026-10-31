let imgArr = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let index = 0;
function showImg() {
  document.getElementById("container").innerHTML =
    `<img src="./img/${imgArr[index]}" width="300" height="350" />`;
    document.getElementById("img_no").innerHTML = index+1
}
function nextImg() {
  index++;
  if (index === imgArr.length) {
    index = 0;
  }
  showImg();
}
function prevImg() {
  index--;
  if (index === -1) {
    index = imgArr.length - 1;
  }
  showImg();
}
