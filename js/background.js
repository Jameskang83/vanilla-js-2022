
const mainBgImg = document.getElementById("bg-img");

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");

img.src = `img/${chosenImage}`;
mainBgImg.appendChild(img);

// const bgImage = document.createElement("img");

// const fragment  = document.createDocumentFragment();
// const img = fragment
//     .appendChild(document.createElement("section"))
//     .appendChild(document.createElement("div"))
//     .appendChild(document.createElement("img"));
// document.body.appendChild(fragment);
// document.body.appendChild(img);