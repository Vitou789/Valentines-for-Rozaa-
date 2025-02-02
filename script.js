// script.js
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

// Event listener for "Yes" button
yesBtn.addEventListener('click', () => {
  response.textContent = "Yay!! 💗 Roza, you’re so cutee!!";
  response.classList.remove('hidden');
});

let noBtnScale = 1; // Initial scale of the "No" button

// Event listener for "No" button hover
noBtn.addEventListener('mouseover', () => {
  // Enlarge the "Yes" button
  yesBtn.style.transform = 'scale(1.5)';

  // Shrink the "No" button
  noBtnScale -= 0.1; // Reduce scale by 10% each time
  if (noBtnScale < 0.3) noBtnScale = 0.3; // Don't let it get too small
  noBtn.style.transform = `scale(${noBtnScale})`;

  // Move the "No" button randomly
  const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Disable the "No" button after a few hovers
  if (noBtnScale <= 0.5) {
    noBtn.disabled = true;
    noBtn.style.opacity = '0.5'; // Make it look disabled
    noBtn.style.cursor = 'not-allowed';
  }
});

// Reset the "Yes" button size when not hovering over "No"
noBtn.addEventListener('mouseleave', () => {
  yesBtn.style.transform = 'scale(1)';
});

// Event listener for "No" button click
noBtn.addEventListener('click', () => {
  if (!noBtn.disabled) {
    response.textContent = "Oh no, Roza... 😢 Maybe next time?";
    response.classList.remove('hidden');
  }
});