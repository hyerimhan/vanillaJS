const body = document.body;

async function randomImage() {
  try {
    const res = await fetch("./images.json");
    const images = await res.json();

    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex].img;

    body.style.background = `url(${imageUrl})no-repeat center`;
    body.style.backgroundSize = "cover";
  } catch (err) {
    console.log(err);
  }
}

document.addEventListener("DOMContentLoaded", randomImage);
