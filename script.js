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
//Image Scroll for Individual Projects Pages
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const imageLinks = document.querySelectorAll('.image-link');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    imageLinks.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            currentIndex = index;
            const imagePath = this.getAttribute('href');
            openImage(imagePath);
        });
    });

    modal.addEventListener('click', function () {
        closeImage();
    });

    modalImage.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    prevBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        changeImage(-1);
    });

    nextBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        changeImage(1);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeImage();
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        }
    });

    function openImage(imagePath) {
        modal.style.display = 'flex';
        modalImage.src = imagePath;
    }

    function closeImage() {
        modal.style.display = 'none';
    }

    function changeImage(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = imageLinks.length - 1;
        } else if (currentIndex >= imageLinks.length) {
            currentIndex = 0;
        }

        const imagePath = imageLinks[currentIndex].getAttribute('href');
        openImage(imagePath);
    }
});