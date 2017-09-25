// $(function(){
	// $("#portfolio .tile a, #portfolio_grid .toolbar a").on("click", function(e){
	// 	e.preventDefault();
	// });	
// });

$(function(){
	// onclick - remove any active class, add active class to current one
	$("#portfolio_grid .toolbar a").on("click", function(e){
		e.preventDefault();
		$(this).addClass("active");
		$(this).nextAll().removeClass("active");
		$(this).prevAll().removeClass("active");
	});
	
});

// main menu toggle

$(function() {

	$("header a.menu_toggle").click(function(){
		$(this).toggleClass("open");
		$("header #main_menu").toggleClass('hide');
	});

});

// portfolio filter
$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});

// scroll top button
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// calling owl- carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	'nav':true,
    // 'loop':true
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
 
  });
  $(".owl-carousel .owl-next").html('<i class="fa fa-chevron-right"></i>');
  $(".owl-carousel .owl-prev").html('<i class="fa fa-chevron-left"></i>');
});

// related posts owlcarousel
$(document).ready(function(){
  $(".owl-carousel2").owlCarousel({
    'nav':false,
    // 'loop':true
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
 
  });
  
});



//smooth scrolling whole page

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
  var animationInterval = 10; //lower is faster
  var scrollSpeed = 10; //lower is faster

  if (end == null) {
    end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}