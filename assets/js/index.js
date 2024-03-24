const textareaInitDelay = 100;


// Get all textareas with the class "custom-text"
const textareas = document.querySelectorAll('.custom-text');

// Add event listener to each textarea
textareas.forEach(textarea => {
  textarea.addEventListener('input', function(event) {
    // Get the input value
    const inputValue = event.target.value;

    // Get the current selection range
    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;
    
    // Replace any characters that are not a-z, A-Z, 0-9, period, comma, space, or newline with an empty string
    const sanitizedValue = inputValue.replace(/[^a-zA-Z0-9., \n-]/g, '');

    // Update the textarea value with the sanitized value
    event.target.value = sanitizedValue;

    // Restore the selection range
    event.target.setSelectionRange(selectionStart, selectionEnd);
  });
});



var circles = document.querySelectorAll('.circle');

// Add click event listener to each circle
circles.forEach(function(circle) {
    circle.addEventListener('click', function() {
        // Get the current color of the text
        var currentColor = window.getComputedStyle(this).color;

        // Check if the circle is in hover state
        var isHovered = window.getComputedStyle(this).getPropertyValue('color') === 'rgb(1, 1, 1)'; // Check if the color is yellow

        // Toggle between colors
        if (currentColor === 'rgb(200, 200, 200)' || isHovered) {
            this.style.color = 'white';
        } else {
            this.style.color = '';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
  // Array of fonts
  var fonts = ['Knoffer-160', 'Knoffer-80', 'Knoffer-Round', 'Knoffer-Spikes', 'Knoffer-45', 'Knoffer-40', 'Knoffer-Liquido', 'Knoffer-Dots-01'];
  var currentIndex = 1; // Index to keep track of the current font

  var changeFontElement = document.getElementById('change-font');

  // Add click event listener
  changeFontElement.addEventListener('click', function() {
      // Change font
      changeFontElement.style.fontFamily = fonts[currentIndex];
      
      // Update current index for next font change
      currentIndex++;

      // If currentIndex exceeds the length of the fonts array, reset it to 0
      if (currentIndex >= fonts.length) {
          currentIndex = 0;
      }
  });
});



  document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("text-schrofer-sketches");
    const container = document.getElementById("scroll-container");
    const texts = ["Schrofer Sketches", "Schrofer spetches", "schrofer specches", "schrofer specihes", "schrofer specimes", "schrofer specimen"];
    let lastKnownScrollPosition = 0;
    let ticking = false;
  
    function handleScroll(scrollPos) {
      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // Calculate the percentage of the target's position relative to the container
      const targetVisiblePercent = ((containerRect.bottom - targetRect.top) / containerRect.height) * 100;
      
      if (targetVisiblePercent < 50) {
        target.textContent = texts[0];
      } else if (targetVisiblePercent < 65) {
        target.textContent = texts[1];
      } else if (targetVisiblePercent < 75) {
        target.textContent = texts[2];
      } else if (targetVisiblePercent < 85) {
        target.textContent = texts[3];
      } else if (targetVisiblePercent < 95) {
        target.textContent = texts[4];
      } else {
        target.textContent = texts[5]; // Default text or the last phase
      }
    }
  
    container.addEventListener("scroll", function(e) {
      lastKnownScrollPosition = window.scrollY;
  
      if (!ticking) {
        window.requestAnimationFrame(function() {
          handleScroll(lastKnownScrollPosition);
          ticking = false;
        });
  
        ticking = true;
      }
    });
  });



document.addEventListener("DOMContentLoaded", () => {
    const introText = document.getElementById("intro-text");
    const scrollContainer = document.getElementById("scroll-container");

    const updateOpacityBasedOnScroll = () => {
        // Determine the distance from the top of introText to the top of the scrollContainer
        let introTextOffsetTop = introText.offsetTop;
        // Get the current scroll position within scrollContainer
        let scrollY = scrollContainer.scrollTop;
        // Calculate introText's top relative to the scrolled position
        let introTextRelativeTop = introTextOffsetTop - scrollY;

        // Calculate viewport height
        let viewportHeight = window.innerHeight;

        // Define trigger points for opacity change
        let startOpacityChangeAt = viewportHeight * 0.9; // Start changing opacity at 70% of the viewport height
        let fullOpacityAt = viewportHeight * 0.7; // Full opacity reached at 30% of the viewport height

        // Calculate the distance over which opacity changes (from start to full visibility)
        let opacityChangeDistance = startOpacityChangeAt - fullOpacityAt;

        // Initialize opacity to 0
        let opacity = 0;

        if (introTextRelativeTop <= startOpacityChangeAt) {
            // Calculate how far introText has entered the opacity change range
            let distanceIntoChange = startOpacityChangeAt - introTextRelativeTop;
            // Normalize and calculate opacity based on position within the change range
            opacity = Math.min(1, distanceIntoChange / opacityChangeDistance);
        }

        // Apply calculated opacity to introText
        introText.style.opacity = opacity;
    };

    // Attach scroll event listener to scrollContainer
    scrollContainer.addEventListener("scroll", updateOpacityBasedOnScroll);

    // Run once on load in case the initial scroll position should affect opacity
    updateOpacityBasedOnScroll();
});


document.addEventListener("DOMContentLoaded", () => {
  const introText = document.getElementById("intro-text-02");
  const scrollContainer = document.getElementById("scroll-container");

  const updateOpacityBasedOnScroll = () => {
      // Determine the distance from the top of introText to the top of the scrollContainer
      let introTextOffsetTop = introText.offsetTop;
      // Get the current scroll position within scrollContainer
      let scrollY = scrollContainer.scrollTop;
      // Calculate introText's top relative to the scrolled position
      let introTextRelativeTop = introTextOffsetTop - scrollY;

      // Calculate viewport height
      let viewportHeight = window.innerHeight;

      // Define trigger points for opacity change
      let startOpacityChangeAt = viewportHeight * 0.2; // Start changing opacity at 70% of the viewport height
      let fullOpacityAt = viewportHeight * 0; // Full opacity reached at 30% of the viewport height

      // Calculate the distance over which opacity changes (from start to full visibility)
      let opacityChangeDistance = startOpacityChangeAt - fullOpacityAt;

      // Initialize opacity to 0
      let opacity = 0;

      if (introTextRelativeTop <= startOpacityChangeAt) {
          // Calculate how far introText has entered the opacity change range
          let distanceIntoChange = startOpacityChangeAt - introTextRelativeTop;
          // Normalize and calculate opacity based on position within the change range
          opacity = Math.min(1, distanceIntoChange / opacityChangeDistance);
      }

      // Apply calculated opacity to introText
      introText.style.opacity = opacity;
  };

  // Attach scroll event listener to scrollContainer
  scrollContainer.addEventListener("scroll", updateOpacityBasedOnScroll);

  // Run once on load in case the initial scroll position should affect opacity
  updateOpacityBasedOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const introText = document.getElementById("intro-text-03");
  const scrollContainer = document.getElementById("scroll-container");

  const updateOpacityBasedOnScroll = () => {
      // Determine the distance from the top of introText to the top of the scrollContainer
      let introTextOffsetTop = introText.offsetTop;
      // Get the current scroll position within scrollContainer
      let scrollY = scrollContainer.scrollTop;
      // Calculate introText's top relative to the scrolled position
      let introTextRelativeTop = introTextOffsetTop - scrollY;

      // Calculate viewport height
      let viewportHeight = window.innerHeight;

      // Define trigger points for opacity change
      let startOpacityChangeAt = viewportHeight * 0.6; // Start changing opacity at 70% of the viewport height
      let fullOpacityAt = viewportHeight * 0.4; // Full opacity reached at 30% of the viewport height

      // Calculate the distance over which opacity changes (from start to full visibility)
      let opacityChangeDistance = startOpacityChangeAt - fullOpacityAt;

      // Initialize opacity to 0
      let opacity = 0;

      if (introTextRelativeTop <= startOpacityChangeAt) {
          // Calculate how far introText has entered the opacity change range
          let distanceIntoChange = startOpacityChangeAt - introTextRelativeTop;
          // Normalize and calculate opacity based on position within the change range
          opacity = Math.min(1, distanceIntoChange / opacityChangeDistance);
      }

      // Apply calculated opacity to introText
      introText.style.opacity = opacity;
  };

  // Attach scroll event listener to scrollContainer
  scrollContainer.addEventListener("scroll", updateOpacityBasedOnScroll);

  // Run once on load in case the initial scroll position should affect opacity
  updateOpacityBasedOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const introText = document.getElementById("intro-text-04");
  const scrollContainer = document.getElementById("scroll-container");

  const updateOpacityBasedOnScroll = () => {
      // Determine the distance from the top of introText to the top of the scrollContainer
      let introTextOffsetTop = introText.offsetTop;
      // Get the current scroll position within scrollContainer
      let scrollY = scrollContainer.scrollTop;
      // Calculate introText's top relative to the scrolled position
      let introTextRelativeTop = introTextOffsetTop - scrollY;

      // Calculate viewport height
      let viewportHeight = window.innerHeight;

      // Define trigger points for opacity change
      let startOpacityChangeAt = viewportHeight * 0.6; // Start changing opacity at 70% of the viewport height
      let fullOpacityAt = viewportHeight * 0.4; // Full opacity reached at 30% of the viewport height

      // Calculate the distance over which opacity changes (from start to full visibility)
      let opacityChangeDistance = startOpacityChangeAt - fullOpacityAt;

      // Initialize opacity to 0
      let opacity = 0;

      if (introTextRelativeTop <= startOpacityChangeAt) {
          // Calculate how far introText has entered the opacity change range
          let distanceIntoChange = startOpacityChangeAt - introTextRelativeTop;
          // Normalize and calculate opacity based on position within the change range
          opacity = Math.min(1, distanceIntoChange / opacityChangeDistance);
      }

      // Apply calculated opacity to introText
      introText.style.opacity = opacity;
  };

  // Attach scroll event listener to scrollContainer
  scrollContainer.addEventListener("scroll", updateOpacityBasedOnScroll);

  // Run once on load in case the initial scroll position should affect opacity
  updateOpacityBasedOnScroll();
});


document.addEventListener("DOMContentLoaded", () => {
  const introText = document.getElementById("download");
  const scrollContainer = document.getElementById("scroll-container");

  const updateOpacityBasedOnScroll = () => {
      // Determine the distance from the top of introText to the top of the scrollContainer
      let introTextOffsetTop = introText.offsetTop;
      // Get the current scroll position within scrollContainer
      let scrollY = scrollContainer.scrollTop;
      // Calculate introText's top relative to the scrolled position
      let introTextRelativeTop = introTextOffsetTop - scrollY;

      // Calculate viewport height
      let viewportHeight = window.innerHeight;

      // Define trigger points for opacity change
      let startOpacityChangeAt = viewportHeight * 0.3; // Start changing opacity at 70% of the viewport height
      let fullOpacityAt = viewportHeight * 0.02; // Full opacity reached at 30% of the viewport height

      // Calculate the distance over which opacity changes (from start to full visibility)
      let opacityChangeDistance = startOpacityChangeAt - fullOpacityAt;

      // Initialize opacity to 0
      let opacity = 0;

      if (introTextRelativeTop <= startOpacityChangeAt) {
          // Calculate how far introText has entered the opacity change range
          let distanceIntoChange = startOpacityChangeAt - introTextRelativeTop;
          // Normalize and calculate opacity based on position within the change range
          opacity = Math.min(1, distanceIntoChange / opacityChangeDistance);
      }

      // Apply calculated opacity to introText
      introText.style.opacity = opacity;
  };

  // Attach scroll event listener to scrollContainer
  scrollContainer.addEventListener("scroll", updateOpacityBasedOnScroll);

  // Run once on load in case the initial scroll position should affect opacity
  updateOpacityBasedOnScroll();
});


document.addEventListener("DOMContentLoaded", () => {
  const sketchGrid = document.querySelector(".sketch-grid");
  const scrollContainer = document.getElementById("scroll-container");

  const updateOpacity = () => {
      // Define the range within which the opacity will change
      // Starts changing at a point where sketchGridTop is less than 80% of the viewport height
      const startChangeAt = window.innerHeight * 0.8;
      // And reaches full opacity (1) when sketchGridTop is less than 40% of the viewport height
      const endChangeAt = window.innerHeight * 0.4;

      const sketchGridTop = sketchGrid.getBoundingClientRect().top;
      let opacity = 0;

      if (sketchGridTop <= startChangeAt) {
          if (sketchGridTop <= endChangeAt) {
              opacity = 1; // Full opacity
          } else {
              // Calculate opacity based on the current position within the transition range
              // Normalize the value to smoothly transition from 0 to 1
              opacity = (startChangeAt - sketchGridTop) / (startChangeAt - endChangeAt);
          }
      }

      sketchGrid.style.opacity = Math.min(opacity, 1);
  };

  scrollContainer.addEventListener("scroll", updateOpacity);
  updateOpacity(); // Set initial opacity based on current scroll position
});



document.addEventListener("DOMContentLoaded", () => {
  const changeFont = document.getElementById("change-font");
  const scrollContainer = document.getElementById("scroll-container");

  const updateOpacityForChangeFont = () => {
      // Starts changing at a point higher than 50% of the viewport height, adjust as needed
      const startChangeAt = window.innerHeight * 0.7; // Example: Start changing at 70% of the viewport height
      // Full opacity (1) is reached when changeFontTop is less than 40% of the viewport height
      const endChangeAt = window.innerHeight * 0.4;

      const changeFontTop = changeFont.getBoundingClientRect().top;
      let opacity = 0;

      if (changeFontTop <= startChangeAt) {
          if (changeFontTop <= endChangeAt) {
              opacity = 1; // Full opacity
          } else {
              // Calculate opacity based on the current position within the transition range
              // Normalize the value to smoothly transition from 0 to 1
              opacity = (startChangeAt - changeFontTop) / (startChangeAt - endChangeAt);
          }
      }

      // Ensure opacity does not exceed 1
      changeFont.style.opacity = Math.min(opacity, 1);
  };

  scrollContainer.addEventListener("scroll", updateOpacityForChangeFont);
  updateOpacityForChangeFont(); // Set initial opacity based on current scroll position
});



document.addEventListener('DOMContentLoaded', () => {
  // Select all textarea elements with the .custom-text class
  const textareas = document.querySelectorAll('.custom-text');

  const adjustHeight = (element) => {
    // Reset height to ensure the scrollHeight calculation is correct
    element.style.height = 'auto';
    // Set the height to scrollHeight to include all content
    element.style.height = `${element.scrollHeight}px`;
  };

  // Iterate over each textarea and attach the input event listener
  textareas.forEach(textarea => {
    textarea.addEventListener('input', () => adjustHeight(textarea));

    // Initial adjustment in case of pre-filled content
    adjustHeight(textarea);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSizeSlider');
  const textarea = document.getElementById('regular');

  // Function to adjust the height of textarea
  const adjustHeight = (element) => {
      element.style.height = 'auto'; // Reset height to ensure proper calculation
      element.style.height = element.scrollHeight + 'px'; // Adjust height based on scroll height
  };

  slider.addEventListener('input', function() {
      // Update font size based on slider value
      const fontSize = this.value;
      textarea.style.fontSize = fontSize + 'px';

      // Proportionally adjust line height (example: 1.16 times the font size)
      textarea.style.lineHeight = (fontSize * 1.16) + 'px';
      
      // Adjust textarea height to fit new content size
      adjustHeight(textarea);
  });
  
  setTimeout( ( ) => {
    slider.dispatchEvent( new Event( 'input' ) );
  }, textareaInitDelay );

  // Initial adjustment for pre-filled content
  adjustHeight(textarea);
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSizeSlider-02');
  const textarea = document.getElementById('rounded');

  // Function to adjust the height of textarea
  const adjustHeight = (element) => {
      element.style.height = 'auto'; // Reset height to ensure proper calculation
      element.style.height = element.scrollHeight + 'px'; // Adjust height based on scroll height
  };

  slider.addEventListener('input', function() {
      // Update font size based on slider value
      const fontSize = this.value;
      textarea.style.fontSize = fontSize + 'px';

      // Proportionally adjust line height (example: 1.16 times the font size)
      textarea.style.lineHeight = (fontSize * 1.16) + 'px';

      // Adjust textarea height to fit new content size
      adjustHeight(textarea);
  });
  
  setTimeout( ( ) => {
    slider.dispatchEvent( new Event( 'input' ) );
  }, textareaInitDelay );

  // Initial adjustment for pre-filled content
  adjustHeight(textarea);
});




document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSizeSlider-03');
  const textarea = document.getElementById('liquido');

  // Function to adjust the height of textarea
  const adjustHeight = (element) => {
      element.style.height = 'auto'; // Reset height to ensure proper calculation
      element.style.height = element.scrollHeight + 'px'; // Adjust height based on scroll height
  };

  slider.addEventListener('input', function() {
      // Update font size based on slider value
      const fontSize = this.value;
      textarea.style.fontSize = fontSize + 'px';

      // Proportionally adjust line height (example: 1.16 times the font size)
      textarea.style.lineHeight = (fontSize * 1.16) + 'px';

      // Adjust textarea height to fit new content size
      adjustHeight(textarea);
  });

  setTimeout( ( ) => {
    slider.dispatchEvent( new Event( 'input' ) );
  }, textareaInitDelay );

  // Initial adjustment for pre-filled content
  adjustHeight(textarea);
});



document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSizeSlider-04');
  const textarea = document.getElementById('outoutline');

  // Function to adjust the height of textarea
  const adjustHeight = (element) => {
      element.style.height = 'auto'; // Reset height to ensure proper calculation
      element.style.height = element.scrollHeight + 'px'; // Adjust height based on scroll height
  };

  slider.addEventListener('input', function() {
      // Update font size based on slider value
      const fontSize = this.value;
      textarea.style.fontSize = fontSize + 'px';

      // Proportionally adjust line height (example: 1.16 times the font size)
      textarea.style.lineHeight = (fontSize * 1.02) + 'px';

      // Adjust textarea height to fit new content size
      adjustHeight(textarea);
  });

  setTimeout( ( ) => {
    slider.dispatchEvent( new Event( 'input' ) );
  }, textareaInitDelay );

  // Initial adjustment for pre-filled content
  adjustHeight(textarea);
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSizeSlider-05');
  const textarea = document.getElementById('slantoutline');

  // Function to adjust the height of textarea
  const adjustHeight = (element) => {
      element.style.height = 'auto'; // Reset height to ensure proper calculation
      element.style.height = element.scrollHeight + 'px'; // Adjust height based on scroll height
  };

  slider.addEventListener('input', function() {
      // Update font size based on slider value
      const fontSize = this.value;
      textarea.style.fontSize = fontSize + 'px';

      // Proportionally adjust line height (example: 1.16 times the font size)
      textarea.style.lineHeight = (fontSize * 1.02) + 'px';

      // Adjust textarea height to fit new content size
      adjustHeight(textarea);
  });

  setTimeout( ( ) => {
    slider.dispatchEvent( new Event( 'input' ) );
  }, textareaInitDelay );

  // Initial adjustment for pre-filled content
  adjustHeight(textarea);
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSizeSlider-06');
  const textarea = document.getElementById('outline');

  // Function to adjust the height of textarea
  const adjustHeight = (element) => {
      element.style.height = 'auto'; // Reset height to ensure proper calculation
      element.style.height = element.scrollHeight + 'px'; // Adjust height based on scroll height
  };

  slider.addEventListener('input', function() {
      // Update font size based on slider value
      const fontSize = this.value;
      textarea.style.fontSize = fontSize + 'px';

      // Proportionally adjust line height (example: 1.16 times the font size)
      textarea.style.lineHeight = (fontSize * 1.06) + 'px';

      // Adjust textarea height to fit new content size
      adjustHeight(textarea);
  });

  setTimeout( ( ) => {
    slider.dispatchEvent( new Event( 'input' ) );
  }, textareaInitDelay );

  // Initial adjustment for pre-filled content
  adjustHeight(textarea);
});