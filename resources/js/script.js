$(document).ready(function() {
    /* For sticky navigation */
    $('.js__section__about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '12%;'
    });
    
    /* Buttons */
    $('.js__scroll_visit').click(function() {
        $('html, body').animate({scrollTop: $('.js__section__visit').offset().top}, 1000);
    });
    $('.js__scroll_about').click(function() {
        $('html, body').animate({scrollTop: $('.js__section__about').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    
            // Select all links with hashes
        $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  offset: '12%;'
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused 
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
    
   /* Animation on scroll */
    $('.js__wp__1').waypoint(function(direction) {
       $('.js__wp__1').addClass('animated fadeInLeft');
       $('.js__wp__11').addClass('animated fadeInRightBig');
    }, {
        offset: '75%'
    });
    $('.js__wp__2').waypoint(function(direction) {
       $('.js__wp__2').addClass('animated fadeInLeft');
       $('.js__wp__22').addClass('animated fadeInRightBig');
    }, {
        offset: '75%'
    });
    $('.js__wp__3').waypoint(function(direction) {
        $('.js__wp__3').addClass('animated fadeInLeft');
        $('.js__wp__33').addClass('animated fadeInRightBig');
    }, {
        offset: '75%'
    });
    $('.js__wp__4').waypoint(function(direction) {
       $('.js__wp__4').addClass('animated fadeInLeft');
       $('.js__wp__44').addClass('animated fadeInRightBig');
    }, {
        offset: '75%'
    });
    $('.js__wp__5').waypoint(function(direction) {
       $('.js__wp__55').addClass('animated pulse');
       $('.js__wp__555').addClass('animated pulse'); 
       $('.js__wp__5').addClass('animated pulse');
    }, {
        offset: '100%'
    });
    
    $('.js__wp__5555').waypoint(function(direction) {
       $('.js__wp__5555').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
   /* Mobile navigation */
    $('.js__nav_icon').click(function(direction) {
        var nav = $('.js__main_nav');
        var icon = $('.js__nav_icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });
});