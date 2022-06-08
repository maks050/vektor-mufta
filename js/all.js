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


/*to-top btn*/
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

/*form*/
function start_form(name) {  
  $(document).ready(function() {
    $('.'+ name).click(function() {
      $('<div class="form-wrap"></div>').insertAfter('#content').load("./html/" + name +".html");
      $('<div class="form_bg"></div>').insertAfter('.form-wrap');
      $("head").append("<link href='./html/" + name +".css' rel='stylesheet' type='text/css'>");
    });
  });
}

function remove_form(){ 
 $('.form_bg, .form-wrap').fadeOut(300, function(){ $(this).remove() }) 
}


start_form('callback');
start_form('send-form');



