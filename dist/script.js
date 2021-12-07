const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const Leftcolor = document.querySelector(".left-color");
const Rightcolor = document.querySelector(".right-color");

const title = document.getElementById("title");


// Initial Gradient
document.body.style.backgroundImage = 'linear-gradient(#e66465, #9198e5)';


//Event Listender + Get Random number assigned to color name
btn.addEventListener("click", function () {
  let hexLeftColor = "#";
  for (let i = 0; i < 6; i++) {
    hexLeftColor += hex[getRandomNumber()];}
    let hexRightColor = "#";
  for (let i = 0; i < 6; i++) {
    hexRightColor += hex[getRandomNumber()];
  }
  
  // Change background Color
document.body.style.backgroundImage = "linear-gradient(to right, "+ hexLeftColor +", "+ hexRightColor +")";
  Leftcolor.textContent = hexLeftColor;
  Rightcolor.textContent = hexRightColor;
});


// Event Listener to change title color
btn.addEventListener("click", function () {
  let titleColor = "#";
  for (let i = 0; i < 6; i++) {
    titleColor += hex[getRandomNumber()];
  }
  
//Change title color
  title.style.color = titleColor;
});


// Get random number and round down wih Math.floor
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}