// JS for Typing Effect
document.addEventListener('DOMContentLoaded', function () {
    const introText = document.getElementById('intro-text');
    const words = introText.textContent.split(/\s+/); // Split by spaces

    introText.textContent = ''; // Clear the original text

    words.forEach((word, index) => {
        // Create a span for each word
        const span = document.createElement('span');
        span.textContent = word;

        // Add space after each word (except the last one)
        if (index < words.length - 1) {
            span.innerHTML += '&nbsp;';
        }

        introText.appendChild(span);
    });

    // Add a class to trigger the typing animation
    introText.classList.add('typing');
});

//The Star Game 
document.addEventListener('DOMContentLoaded', function () {
    const hiddenStars = document.querySelectorAll('.hidden-star');
    const scoreLedger1 = document.getElementById('score-ledger1');
    const scoreLedger2 = document.getElementById('score-ledger2');
    const congratsMessage = document.getElementById('congrats-message');
    const congratsScoreLedger = document.getElementById('congrats-score-ledger');
    const closeCongratsMessageBtn = document.getElementById('close-congrats-message');

    let totalPoints = 0;
    let allStarsFound = false;

    hiddenStars.forEach(star => {
        star.addEventListener('click', () => {
            const points = parseInt(star.getAttribute('data-points'));
            totalPoints += points;

            // Update the score ledger with filled stars
            const filledStars = totalPoints


            // Update the score ledger with filled stars for score-ledger1
            scoreLedger1.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                const starElement = document.createElement('div');
                starElement.textContent = i < filledStars ? '★' : '☆';
                starElement.classList.add('filled-star');
                scoreLedger1.appendChild(starElement);
            }

            // Update the score ledger with filled stars for score-ledger2
            scoreLedger2.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                const starElement = document.createElement('div');
                starElement.textContent = i < filledStars ? '★' : '☆';
                starElement.classList.add('filled-star');
                scoreLedger2.appendChild(starElement);
}


            // Display congrats message for finding one star
            if (points === 1 && filledStars === 1 && !allStarsFound) {
                showCongratsMessage('You found one of the stars!');
            }

            // Display congrats message for finding all stars
            if (filledStars === 5 && !allStarsFound) {
                allStarsFound = true; // Set flag to true so the message won't display multiple times
                showCongratsMessage('You found all stars. Thank you for exploring my homepage!');
            }

            // You can add additional effects, such as removing the star or changing its style
            star.style.display = 'none';
        });
    });

    // Close congrats message on button click
    closeCongratsMessageBtn.addEventListener('click', () => {
        congratsMessage.style.display = 'none';
    });

    function showCongratsMessage(text) {
        congratsScoreLedger.textContent = text;
        congratsMessage.style.display = 'block';
    }
    
});

// //Project Scrolling

// document.addEventListener("DOMContentLoaded", function () {
//     const projectsSection = document.querySelector(".projects-section");
//     const projectSubsections = document.querySelectorAll(".project-subsection");
  
//     function isInViewport(element) {
//       const rect = element.getBoundingClientRect();
//       return rect.top >= 0 && rect.bottom <= window.innerHeight;
//     }
  
//     function handleScroll() {
//       projectSubsections.forEach((subsection) => {
//         if (isInViewport(subsection)) {
//           subsection.style.opacity = "1";
//           subsection.style.transform = "translateY(0)";
//         } else {
//           subsection.style.opacity = "0";
//           subsection.style.transform = "translateY(50px)";
//         }
//       });
//     }
  
//     document.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check on page load
//   });

