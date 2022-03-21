new VenoBox();
$('.counter').counterUp({
    delay: 20,
    time: 1000
});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<span class="prevArrow"><i class="fas fa-angle-left"></i>',
    nextArrow:'<span class="nextArrow"><i class="fas fa-angle-right"></i>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false
          }
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false
          }
        },
        {
          breakpoint: 668,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
          }
        }
      ]
  });