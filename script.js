const texts = ['My Name is Kevin Dixon', "I am a Frontend Developer"];
let currentIndex = 0;
let currentText = '';
let charIndex = 0;
let typingSpeed = 150; // Speed of typing in milliseconds
let deletingSpeed = 50; // Speed of deleting in milliseconds
let isDeleting = false;

function type() {
  const textElement = document.getElementById('text-container');

  if (isDeleting) {
    // Remove a character
    currentText = texts[currentIndex].substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Add a character
    currentText = texts[currentIndex].substring(0, charIndex + 1);
    charIndex++;
  }

  textElement.textContent = currentText;

  // If the current text is fully typed out
  if (!isDeleting && charIndex === texts[currentIndex].length) {
    // Pause before starting to delete
    setTimeout(() => {
      isDeleting = true;
      setTimeout(type, typingSpeed); // Start deleting after a pause
    }, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    // Move to the next text
    isDeleting = false;
    currentIndex = (currentIndex + 1) % texts.length; // Cycle through texts
    setTimeout(type, 500); // Pause before typing the next text
  } else {
    // Continue typing or deleting
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}

// Start the typewriter effect
type();