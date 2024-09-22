$(document).ready(function() {
    $(window).scroll(function() {
        // if ($(document).scrollTop() > 50) {
        //     $('#navbar').addClass('navbar-shrink');
        // } else {
        //     $('#navbar').removeClass('navbar-shrink');
        // }
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("myBar").style.width = scrolled + "%";
    });

    // let currentSection = 'about'; 
    
    // function scrollToSection(sectionId) {
    //     const sections = document.querySelector('.sections');
    //     const sectionIndex = {
    //         'about': 0,
    //         'skills': 1,
    //         'projects': 2
    //     };
        
    //     const offset = sectionIndex[sectionId] * -100;  // Calculate percentage offset
    //     sections.style.transform = `translateX(${offset}%)`;  // Right to left scrolling
        
    //     highlightActiveMenu(sectionId); // Highlight the active menu item
        
    // }
    
    // function highlightActiveMenu(sectionId) {
    //     document.querySelector(`#nav-${currentSection}`).classList.remove('active');
    //     document.querySelector(`#nav-${sectionId}`).classList.add('active');
    //     currentSection = sectionId;
    // }
    let currentSectionIndex = 0; // Keep track of the current section index
const sectionIds = ['home', 'about', 'contact']; // List of section IDs
let isScrolling = false; // To avoid rapid fire scrolling

// Scroll to the section based on index
function scrollToSection(sectionId) {
  const sections = document.querySelector('.sections');
  const sectionIndex = sectionIds.indexOf(sectionId);

  if (sectionIndex === -1) return;

  const offset = sectionIndex * -100;  // Calculate percentage offset
  sections.style.transform = `translateX(${offset}%)`;

  highlightActiveMenu(sectionId);
  currentSectionIndex = sectionIndex; // Update current section index
}

// Highlight the active menu item
function highlightActiveMenu(sectionId) {
  sectionIds.forEach(id => {
    document.querySelector(`#nav-${id}`).classList.remove('active');
  });
  document.querySelector(`#nav-${sectionId}`).classList.add('active');
}

// Handle scroll event
function handleScroll(event) {
  if (isScrolling) return; // Prevent rapid scroll events from triggering too fast

  const direction = event.deltaY > 0 ? 1 : -1; // Determine if the scroll is up or down

  if (direction === 1 && currentSectionIndex < sectionIds.length - 1) {
    // Scroll down to next section
    currentSectionIndex++;
  } else if (direction === -1 && currentSectionIndex > 0) {
    // Scroll up to previous section
    currentSectionIndex--;
  }

  // Scroll to the appropriate section based on updated index
  scrollToSection(sectionIds[currentSectionIndex]);

  // Prevent further scrolls for 1 second (debouncing)
  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 1000); // Adjust delay for smoother control
}

// Attach scroll event listener
window.addEventListener('wheel', handleScroll);

});