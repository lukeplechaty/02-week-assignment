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

const fullImg = document.getElementById("full-img");
const contaner = document.querySelector("div");
imgs.forEach((item) => {
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
  });
  thisImg.addEventListener("keypress", (e) => {
    if (e.code == "Enter") setFullImg(item);
    else if (e.code == "Space") setFullImg(item);
  });
});

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
