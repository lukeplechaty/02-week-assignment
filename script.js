console.log("hi");

let imgs = [
  { src: "my-cats.jpg", alt: "my cats" },
  { src: "ginger-cat.jpg", alt: "ginger cat" },
  { src: "sleeping-cat.jpg", alt: "sleeping ginger cat" },
  {
    src: "sleeping-cat-with-toy.jpg",
    alt: "sleeping black and white cat with toy",
  },
  { src: "sleeping-kitten.jpg", alt: "sleeping kitten" },
  { src: "kitten-at-play.jpg", alt: "kitten playing" },
];
let id = 0;

const contaner = document.querySelector("div");
imgs.forEach((item, index) => {
  const thisImg = document.createElement("img");
  thisImg.src = "./images/" + item.src;
  thisImg.srcset = `
  ./images/2000/${item.src} 2000w,
  ./images/1000/${item.src} 1000w,
  ./images/500/${item.src} 500w,
  ./images/200/${item.src} 200w,
  `;
  thisImg.alt = item.alt;
  thisImg.tabIndex = "0";
  contaner.append(thisImg);
  thisImg.addEventListener("click", (e) => {
    setFullImg(item);
    id = index;
  });
  thisImg.addEventListener("keypress", (e) => {
    if (e.code == "Enter") {
      setFullImg(item);
      id = index;
    } else if (e.code == "Space") {
      setFullImg(item);
      id = index;
    }
  });
});

const fullImg = document.getElementById("full-img");
function setFullImg(item) {
  fullImg.src = "./images/" + item.src;
  fullImg.srcset = `
  ./images/2000/${item.src} 2000w,
  ./images/1000/${item.src} 1000w,
  ./images/500/${item.src} 500w,
  ./images/200/${item.src} 200w,
  `;
  fullImg.alt = item.alt;
}

const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

leftButton.addEventListener("click", (e) => {
  id--;
  if (id < 0) id = imgs.length - 1;
  setFullImg(imgs[id]);
});
rightButton.addEventListener("click", (e) => {
  id++;
  if (id > imgs.length - 1) id = 0;
  setFullImg(imgs[id]);
});
