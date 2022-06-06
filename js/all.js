jQuery(document).ready(function($){
  $('.otziv-box').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev-otziv'),
    nextArrow: $('.next-otziv'),
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

jQuery(document).ready(function($){
  $('.our-partner-box').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.prev-partner'),
    nextArrow: $('.next-partner'),
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});


jQuery(document).ready(function($){
  $('.o-nas-box').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: $('.prev-o-nas'),
    nextArrow: $('.next-o-nas'),
  });
});



/*exform*/

jQuery(document).ready(function($) {
  
$('.style-callback4').exform({theme:'style-callback4', wrapper: "style-callback4", message : false});
$('.callback').exform({theme:'callback'});
$('#ankr2 > div > a.send').exform({theme:'request'});

$(".mob-menu").click(function () {
    $(this).next('ul').slideToggle();
});

});

/*плавный скролл*/


$(document).ready(function() {
  $("a.scroll").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

$(document).ready(function() {
  var btn = $('#Go_Top');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
});