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