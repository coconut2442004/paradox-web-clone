$(".slider-service-carousel").slick({
  autoplay: true,
  infinite: false,
  arrows: false,

  // the magic
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: "unslick", // destroys slick
    },
  ],
});

$(".slider-portfolio-carousel").slick({
  autoplay: true,
  infinite: true,
  dots: true,
  arrows: false,

  // the magic
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 2,
        dots: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: "unslick", // destroys slick
    },
  ],
});

$(".slider-review-carousel").slick({
  autoplay: true,
  infinite: true,
  dots: true,
  arrows: false,

  // the magic
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: "unslick", // destroys slick
    },
  ],
});
