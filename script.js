const img = document.getElementById('bouncingImage');
const scoreDisplay = document.getElementById('score');
let score = 0;

let dx = 2; // Change in position along X-axis
let dy = 2; // Change in position along Y-axis

// Initial size
let imgWidth = 276;
let imgHeight = 508;

// Update the score
function updateScore() {
    score++;
    scoreDisplay.innerText = score;
}
function setImage() { 
    img.style.width = `${imgWidth}px`;
    img.style.height = `${imgHeight}px`;
}
// Function to shrink the image
function shrinkImage() {
    const shrinkAmount= Math.random() * 0.5 + 0.5; // Shrink by 1 to 5px width

    imgWidth *= shrinkAmount;
    imgHeight *= shrinkAmount;
    img.style.width = `${imgWidth}px`;
    img.style.height = `${imgHeight}px`;
}

// Move the image and bounce off edges
function moveImage() {
    let x = img.offsetLeft + dx;
    let y = img.offsetTop + dy;

    if (x <= 0 || x + imgWidth >= window.innerWidth) {
        dx = -dx;
    }
    if (y <= 0 || y + imgHeight >= window.innerHeight) {
        dy = -dy;
    }

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    requestAnimationFrame(moveImage);
}
setImage();
// Start moving the image
moveImage();

// Shrink image and update score on click
img.addEventListener('click', () => {
    shrinkImage();
    updateScore();
});
