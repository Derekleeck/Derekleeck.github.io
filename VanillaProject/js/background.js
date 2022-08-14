const images = [
  "spain1.jpg",
  "spain2.jpg",
  "spain3.jpg",
  "spain4.jpg",
  "spain5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);