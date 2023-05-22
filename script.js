function showSection(sectionId) {
  // Hide all sections
  const sections = document.getElementsByClassName('content');
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';
}

window.onload = function() {
  // Get all nav links
  var navLinks = document.querySelectorAll("nav ul li a");

  // Add event listener to each nav link
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      // Remove active class from all links
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });

      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
};

// Get all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Attach event listener to each menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuItem.querySelector('.description').classList.toggle('show');
  });
});

// Get all the audio elements
const audioElements = document.querySelectorAll('audio');

// Add event listener to each audio element
audioElements.forEach(function(audio) {
  audio.addEventListener('play', function() {
    // Pause other audio elements when one starts playing
    pauseAllOtherAudioElements(audio);
  });
});

// Function to pause all other audio elements
function pauseAllOtherAudioElements(currentAudio) {
  audioElements.forEach(function(audio) {
    if (audio !== currentAudio) {
      audio.pause();
    }
  });
}

// Toggle the display of the music section
function toggleMusicSection() {
  const musicSection = document.getElementById('music');
  musicSection.classList.toggle('show');
}

// Add click event listener to the music section header
const musicSectionHeader = document.querySelector('#music h1');
musicSectionHeader.addEventListener('click', toggleMusicSection);

