// Setting up
let number = 0

// Create an array with the 6 stamps
// Check your spelling!!
const stamps = [
  "../svg/tree.svg",
  "../svg/squirrel.svg",
  "../svg/toad.svg",
  "../svg/leaf.svg"
]

// Grabbing the HTML Tag from the document
const stampsTag = document.querySelector("div.stamps")

// adding a const {addStamp} to set the x value and the y value of the added stamp
const addStamp = function (x, y) {
  // creating and <img> tag
  const img = document.createElement("img")
  // setting attr to the <img> and grabbing the img from the [array]
  // and setting the let {numbers} inside the [array]
  // due to my <img> are inside an DIR I have to `backtic` and ES6 the ${stamps} const
  img.setAttribute("src", `img/${stamps[number]}`)

  // Add some Audio
  const audio = document.createElement("audio")
  audio.setAttribute("src", "audio/plop.mp3")
  audio.play()
  // Styling the HTML img with the mouse position collected 
  // from the .addEventListener .pageX and .pageY
  // Converting the number to a pixel value 

  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.width = (Math.floor(Math.random() * 6) + 16) + "%"

  const angle = Math.floor(Math.random() * 360);
  const flip = Math.random() < 0.5 ? 1 : -1;
  img.style.setProperty('--final-rotation', `${angle}deg`);
  img.style.setProperty('--flip-scale', flip);
  img.style.transformOrigin = "center center";

  if (stampsTag.querySelectorAll("img").length >= 25) return;

  // Inside the HTML tag we add a new <img> tag
  stampsTag.append(img)
  img.addEventListener("animationend", () => {
    img.style.transform = `rotate(${angle}deg) scaleX(${flip})`
  })
  setTimeout(() => {
    img.remove()
  }, 8000)
  // After each click we increase the value inside the let {number}
  number = number + 1
  // Add a check to see if the let {number} exceeds the [stamps] array .lenght
  if (number > stamps.length -1) {
    // if it does, reset the let {number} back to 0
    number = 0
  }
}

// Adding an event listener on click 

// Reset it, so no double SVG generation happens
let touchUsed = false

document.addEventListener("touchstart", (event) => {
  touchUsed = true;
  const touch = event.touches[0]
  addStamp(touch.pageX, touch.pageY)
}, {passive: true })

// to see where the users mouse clicked on the .window
document.addEventListener("click", function (event) {
  // disable the "click" event on touch-devices
  if (touchUsed) {
    touchUsed = false
    return;
  }
  addStamp(event.pageX, event.pageY)
})
