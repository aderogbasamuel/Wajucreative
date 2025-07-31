const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 30,
  
  // Navigation arrows
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  
});