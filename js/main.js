const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  speed: 600,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
});


let a = document.querySelectorAll('a');

for (let element of a) {
  element.addEventListener('click', function (event) {
    const dataFancybox = this.dataset.fancybox;
    if( !Boolean(dataFancybox )) {
      event.preventDefault();
    }
  })
}
