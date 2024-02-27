// Remove transition effect from key.
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("press"); // // Remove the 'press' class to end the visual effect
}

// Play sound on key press.
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // If no audio element found for the key, exit the function

  audio.currentTime = 0; 
  audio.play();
  key.classList.add("press");
}

// Attach a 'transitionend' event listener to all elements with class 'key'.
const key_box = document.querySelectorAll(".key");
key_box.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

// Attach a 'keydown' event listener to the window object to listen for key presses
window.addEventListener("keydown", playSound);
