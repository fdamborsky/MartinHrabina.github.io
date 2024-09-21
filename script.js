function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  let originalHTML = '';

  // Function to change the text based on window width
  function changeText() {
    // Select the target h2 element
    const h2Element = document.querySelector('.main .text-box h2');

    // Check if the element exists to avoid errors
    if (h2Element) {
      // Save the original HTML only once
      if (!originalHTML) {
        originalHTML = h2Element.innerHTML; // Store the original HTML content
      }

      // Change the text when the viewport width is 600px or less
      if (window.innerWidth <= 600) {
        h2Element.innerHTML = 'Jedinečný online tréninkový program vedený prvoligovým hráčem Matějem Koubkem, který ti pomůže zlepšit tvé fotbalové dovednosti 17krát '; // Set the new text
      } else {
        h2Element.innerHTML = originalHTML; // Reset to the original HTML content
      }
    }
  }

  // Run the function when the page loads
  changeText();

  // Add an event listener to call the function whenever the window is resized
  window.addEventListener('resize', changeText);


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));