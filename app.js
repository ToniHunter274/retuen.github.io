document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll("#animated-title span");
    const animatedTitle = document.getElementById("animated-title");
    
    let totalDelay = 0; 
    
    letters.forEach((letter, index) => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      letter.style.color = randomColor;
      totalDelay += 2; // Add 2 seconds for each letter
      letter.style.animationDelay = `${totalDelay}s`;
  
      setTimeout(() => {
        animatedTitle.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }, totalDelay * 1000); 
    });
  
    
    const removalTime = (totalDelay + 3) * 1000; 
    setTimeout(function() {
      animatedTitle.style.opacity = "0";
      setTimeout(() => animatedTitle.remove(), 500); 
    }, removalTime);
  });
  
  
  

document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach((dropdown) => {
      const dropContent = dropdown.querySelector('.dropdown-content');
      dropContent.addEventListener('click', function(event) {
        const flag = event.target.getAttribute('data-flag');
        if (flag) {
          const siblingImg = dropdown.querySelector('.drop-icon');
          siblingImg.src = `images/${flag}.svg`;
        }
      });
    });
});
  
// COUNTDOWN

const launchDate = new Date(2023, 9, 69, 24, 59, 59);

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000); // Update every second

// FAQ

document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach((question) => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const arrow = this.querySelector('.arrow-icon');
  
        if (answer.style.display === 'none' || answer.style.display === '') {
          answer.style.display = 'block';
          arrow.classList.add('arrow-rotate');
        } else {
          answer.style.display = 'none';
          arrow.classList.remove('arrow-rotate');
        }
      });
    });
  });
  