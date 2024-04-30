//$('.gallery').slick({
  //slidesToShow: 5,
  //slidesToScroll: 1,
  //autoplay: true,
  //autoplaySpeed: 0,
  //speed: 5000,
  //pauseOnHover: false,
  //cssEase: 'linear'
//});

$(document).ready(function(){
  $('.gallery-1').slick({
     slidesToShow: 5,
     //slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 0,
     speed: 5000,
     //pauseOnHover: false,
     cssEase: 'linear',
     responsive: [
     {
     breakpoint: 1024,
     settings: {
         slidesToShow: 3,
         //slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 0,
         speed: 5000,
         //pauseOnHover: false,
         cssEase: 'linear',
         //infinite: false,
         //dots: false
         //rtl: true,
     }
     },
     {
     breakpoint: 600,
     settings: {
         slidesToShow: 2,
         //slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 0,
         speed: 5000,
         //pauseOnHover: false,
         cssEase: 'linear',
         //infinite: false,
         //dots: false
         //rtl: true,
     }
     },
     {
     breakpoint: 480,
     settings: {
         slidesToShow: 1,
         //slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 0,
         speed: 5000,
         //pauseOnHover: false,
         cssEase: 'linear',
         //infinite: false,
         //dots: false
         //rtl: true,
     }
     }
     ]
  });
  
  $('.gallery-2').slick({
      slidesToShow: 5,
      //slidesToScroll: -5,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      //pauseOnHover: false,
      cssEase: 'linear',
      //cssEase: 'cubic-bezier(0, -0.780, 0.735, -0.045)',
      //rtl: false,
      responsive: [
      {
      breakpoint: 1024,
      settings: {
          slidesToShow: 3,
          //slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          //pauseOnHover: false,
          cssEase: 'linear',
          //rtl: false,
          //infinite: false,
          //dots: false
      }
      },
      {
      breakpoint: 600,
      settings: {
          slidesToShow: 2,
          //slidesToScroll: 1,
          toplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          //pauseOnHover: false,
          cssEase: 'linear',
          //rtl: false,
          //infinite: false,
          //dots: false
      }
      },
      {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          //slidesToScroll: 1,
          toplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          //pauseOnHover: false,
          cssEase: 'linear',
          //rtl: false,
          //infinite: false,
          //dots: false
      }
      }
      ]
  });

  $('.industries-container').slick({
    //dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    //arrows: false,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          //dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          //arrows: false,
          //dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //arrows: false,
          //dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.latest-projects-container').slick({
    //dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          //dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          //dots: false
        }
      },
      /*{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }*/
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.test-content').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      /*{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }*/
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});
  /*$('.industries-container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });*/


/*$(document).ready(function(){
    $(".owl-one").owlCarousel({
        items:5,
        loop:true,
        margin:50,
        delay:2000,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
  });

  $(document).ready(function(){
    $(".owl-two").owlCarousel({
        items:3,
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
  });*/
