const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, // Loop infinito
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  //** botões de navegação  */