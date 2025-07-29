console.log('Hello World!');
const faders = document.querySelectorAll('.fade-in');

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    faders.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  function toggleMenu() {
      const mobileNav = document.getElementById('mobile-nav');
      const desktopNav = document.getElementById('desktop-nav');
      if (mobileNav.style.display === 'none') {
        mobileNav.innerHTML += desktopNav.innerHTML;
        mobileNav.style.display = 'flex';
      } else {
        mobileNav.style.display = 'none';
      }
    }
    
    function closeNav(){
      const mobileNav = document.getElementById('mobile-nav');
      mobileNav.innerHTML ="" ;

      mobileNav.style.display = 'none';
    }
    
    
    
    
    
    
    
  slides.forEach((slide, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Function to show slide
function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));
  slides[n].classList.add('active');
  dots[n].classList.add('active');
}

// Function to handle dot click
function handleDotClick(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Add event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => handleDotClick(index));
});

// Swipe functionality
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX > endX + 50) {
    // Swipe left
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  } else if (startX < endX - 50) {
    // Swipe right
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
}

// Auto-slide functionality (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);
