// Generate random numbers between 1 and 3
let randomNumber1 = Math.floor(Math.random() * 3) + 1;
let randomNumber2 = Math.floor(Math.random() * 3) + 1;

// Decide file extension based on number
function getImageFile(num) {
  if (num === 1) {
    return "images/" + num + ".webp";   // stone.webp
  } else {
    return "images/" + num + ".jpg";    // paper.jpg or scissors.jpg
  }
}

// Update images (assuming you have <img class="images1"> and <img class="images2"> in HTML)
document.querySelector(".images1").setAttribute("src", getImageFile(randomNumber1));
document.querySelector(".images2").setAttribute("src", getImageFile(randomNumber2));
