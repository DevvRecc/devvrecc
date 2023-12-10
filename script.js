// Get the audio element by its ID
var audio = document.getElementById("backgroundMusic");
// Set the volume (0.0 to 1.0)
audio.volume = 0.03; // This will set the volume to 3%

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    event.preventDefault(); // Prevent default spacebar behavior (e.g., page scrolling)
    if (audio.paused) {
      audio.play(); // If paused, play the audio
    } else {
      audio.pause(); // If playing, pause the audio
    }
  }
});

// JavaScript to add the fade-in class to .name when the page loads
document.addEventListener("DOMContentLoaded", function() {
    var nameElement = document.querySelector(".name");
    nameElement.classList.add("fade-in");
});