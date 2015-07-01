/*
  In this file will be present most of the hard programming and performance of
  The web application, here is the hard logic, handlers methods of the 
  DOM elements events.
  This section is used to declare global variables, with values used Throughout
  The system, especially those that keeps session variable values from php
*/


/* ------------------------------------------------------ *\
 [Variables] 'Zone'
\* ------------------------------------------------------ */

var section;

/* ------------------------------------------------------ *\
 [functions] 'Zone'
 function nameFunction (arg) {
 }
\* ------------------------------------------------------ */


/* ------------------------------------------------------ *\
 [functions] validateEmail
\* ------------------------------------------------------ */

function validateEmail(email) {
    var re = /^(([^<>()[\]\\., ;:\s@\"] + (\.[^<>()[\]\\., ;:\s@\"] + )*)|(\". + \"))@((\[[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\])|(([a-zA-Z\-0-9] + \.) + [a-zA-Z] {2, }))$/;
    //return re.test(email);
    return true;
}

/* ------------------------------------------------------ *\
 [functions] resetAlert
\* ------------------------------------------------------ */

//It performs whit alertify libary an css
function resetAlert () {
    alertify.set({
        labels : {
            ok     : "OK",
            cancel : "Cancel"
        },
        delay : 5000,
        buttonReverse : false,
        buttonFocus   : "ok"
    });
 }
 

/* ------------------------------------------------------ *\
 [functions] 'Zone'
 var Method = {
 function_name : function(event) {}
 }

 for event name event handlers methods use indicate the name
 of the event and the element afected
\* ------------------------------------------------------ */



/*Make a group of methods for each url defined in room.js, in order to control the elements events, 
  and the porformance of  each section. 
  Depending on the complexity of the url, could be more than one group of methods.
  Could exist some group of general methods*/

/* ------------------------------------------------------ *\
 [Methods] Home
\* ------------------------------------------------------ */

var matchMediaMethods ={
  gumbyInit : function () {
    'use strict';

    // not touch device or no touch events required so auto initialize here
    if((!Gumby.touchDevice || !Gumby.touchEvents) && Gumby.autoInit) {
      window.Gumby.init();

    // load jQuery mobile touch events
    } else if(Gumby.touchEvents && Gumby.touchDevice) {
      Gumby.debug('Loading jQuery mobile touch events');
      // set timeout to 2sec
      yepnope.errorTimeout = 2000;
      Modernizr.load({
        test: Modernizr.touch,
        yep: Gumby.touchEvents+'/jquery.mobile.custom.min.js',
        complete: function() {
          // error loading jQuery mobile
          if(!$.mobile) {
            Gumby.error('Error loading jQuery mobile touch events');
          }

          // if not auto initializing
          // this will allow helpers to fire when initialized
          Gumby.touchEventsLoaded = true;

          // auto initialize
          if(Gumby.autoInit) {
            window.Gumby.init();

          // if already manually initialized then fire helpers
          } else if(Gumby.uiModulesReady) {
            Gumby.helpers();
          }
        }
      });
    }

    // if AMD return Gumby object to define
    if(typeof define == "function" && define.amd) {
      define(window.Gumby);
    }
  },
  contentScrollarea : function () {
    /* Main Content Scrollbar
    ========================= */
    if (matchMedia('only screen and (min-width: 1025px)').matches) {
      $('.content #scrollarea').niceScroll({
        cursorcolor:'#ED6C00',
        cursorwidth: '10px',
        horizrailenabled: false,
        autohidemode: false,
        cursorborder: false,
        grabcursorenabled: true,
        zindex: 1500,
      });
    }

    if (matchMedia('only screen and (min-width: 768px)').matches) {
      $('.content #scrollarea').niceScroll({
        cursorcolor:'#ED6C00',
        horizrailenabled: false,
        autohidemode: false,
        cursorborder: false,
        grabcursorenabled: true,
        zindex: 1500,
      });
    }

    /* Sliders
    =========================*/
    // intro text slider
    $('.intro-text-slider').flexslider({
      animation: "fade",
      directionNav: false,
      smoothHeight: false,
      slideshow: false,
    });

    // single project page
    $('.full-slider').flexslider({
      animation: "slide",
      directionNav: true,
      smoothHeight: false,
      controlNav: false,
    });

    if (matchMedia('only screen and (max-width: 768px)').matches) {
      //block slider
      $('.block-slider').flexslider({
        animation: "slide",
        directionNav: true,
        smoothHeight: false,
        controlNav: true,
        slideshow:false,
        controlsContainer: ".block-nav",
        manualControls: ".block-slider-nav li.nav-button"
      });
    }
    if (matchMedia('only screen and (min-width: 768px)').matches) {
      //block slider
      $('.block-slider').flexslider({
        animation: "slide",
        directionNav: false,
        smoothHeight: false,
        controlNav: true,
        slideshow:false,
        controlsContainer: ".block-nav",
        manualControls: ".block-slider-nav li.nav-button"
      });
    }

    //img nav slider
    $('.img-nav-slider').flexslider({
      animation: "fade",
      smoothHeight: false,
      controlNav: true,
      directionNav: true,
      slideshow:false,
      controlsContainer: ".img-nav",
      manualControls: ".img-slider-nav li.nav-button"
    });

    //home-default-slider
    $('#slides.home').superslides({
      play:9990,
    });
    function slideAnimation(element, animation){
      element = $('.slide-caption');
      $(document).on('animated.slides',
        function() {
          element.addClass('animated ' + animation);
          window.setTimeout( function(){
            element.removeClass('animated' + animation);
          }, 9900);
        }
      );
    }
    slideAnimation('.slide-caption', 'fadeInRightBig');

    $('.content #scrollarea').scroll(function(){
      var scroll = $('.content #scrollarea').scrollTop();
      // Display back to top button
      if (scroll >= 850) {
        $('.back-to-top').addClass('active');
      } else {
        $('.back-to-top').removeClass('active');
      }
      // fade slideshow caption on scroll
      if (scroll >= 250){
        $('.slide-caption .do-fade').addClass('fade');
        $('header.top-main').addClass('is-scrolling');
        $('.search-modal').addClass('is-scrolling');
      }else{
        $('.slide-caption .do-fade').removeClass('fade')
        $('header.top-main').removeClass('is-scrolling');
        $('.search-modal').removeClass('is-scrolling');
      }

      if (scroll >= 350){
        $('header.top-main').addClass('is-scrolling');
      }else{
        $('header.top-main').removeClass('is-scrolling');
      }
    });

    /* Intro 100% Height
    ========================= */
    if (matchMedia('only screen and (min-width: 1025px)').matches) {
      var viewportHeight = $(window).height();
       $('#intro').css('height', viewportHeight + 'px');
       $(window).resize(function() {
            var viewportHeight = $(window).height();
            $('#intro').css('height', viewportHeight + 'px');
        });
    }

    /*home slider height - header height */
    var navH = $('header.top-main').height();
    var viewportH = $(window).height();
    var newH = viewportH - navH;
    $('#slides').css('max-height', newH);
    $('.first-block').css('padding-top', navH);

    if (matchMedia('only screen and (min-width: 1025px)').matches) {
      $('#intro').css('max-height', newH);
    }
    if (section === 'home') {
      $("ul.site-nav").addClass('scroll-nav');
      $(".smoothScroll:first-child .href").addClass('current');
    } else {
      $("ul.site-nav").removeClass('scroll-nav');
    }
    if (section === 'blog') {
      $("ul.site-nav li.change_blog").addClass('active');
      $("ul.site-nav li.change_contact").removeClass('active');
    }
    if (section === 'contact') {
      $("ul.site-nav li.change_contact").addClass('active');
      $("ul.site-nav li.change_blog").removeClass('active');
    }   
  }
}
var siteNavMethod = {
  slickNav : function () {
    /* Responsive Menu
      ========================= */
      $('.site-nav').slicknav({
        label: '',
        duration: 600,
        closedSymbol: '&#155;',
        openedSymbol: '&#187;'
      });    
  }
}
/* ------------------------------------------------------ *\
 [Methods] Animated
\* ------------------------------------------------------ */

var animatedMethods = {
    animated : function () {
        $('.animated').appear(function(){
          var element = $(this);
          var animation = element.data('animation');
          var animationDelay = element.data('delay');
          if (animationDelay) {
            setTimeout(function(){
              element.addClass( animation + " visible" );
              element.removeClass('hiding');
              if (element.hasClass('counter')) {
                element.find('.value').countTo();
              }
            }, animationDelay);
          }else {
            element.addClass( animation + " visible" );
            element.removeClass('hiding');
            if (element.hasClass('counter')) {
              element.find('.value').countTo();
            }
          }
        },{accY: -150});
    }
}
/* ------------------------------------------------------ *\
 [Methods] Filters Projects
\* ------------------------------------------------------ */

var filtersMethods = {
    changeFilters : function () {
      // cache container
      var $container = $('.grid.filter');
      // initialize isotope
      $container.isotope();
      $container.isotope('reLayout');
      // filter items when filter link is clicked
      $(domEl.div_recurrent).on('click', '#filters a', function(){
          var selector = $(this).attr('data-filter');
          $container.isotope({ filter: selector });
          return false;
      });
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');
          $optionLinks.on('click', function(){
              var $this = $(this);
              // don't proceed if already selected
              if ( $this.hasClass('selected') ) {
                return false;
              }
              var $optionSet = $this.parents('.option-set');
              $optionSet.find('.selected').removeClass('selected');
              $this.addClass('selected');
          });
    }
}

/* ------------------------------------------------------ *\
 [Methods] inputVal
\* ------------------------------------------------------ */

var inputValMetdods = {
    isIntegerKP: function (event) {
        return /\d/.test(String.fromCharCode(event.keyCode));
    }
}
/* ------------------------------------------------------ *\
 [Methods] GO ACTION
\* ------------------------------------------------------ */

var clickActionsMethods = {
  clickGoPrivacyNotice : function (event) {
    Finch.navigate('/aviso-de-privacidad');
  },
  clickGoLegalNotice : function (event) {
    Finch.navigate('/aviso-legal');
  },
  clickGoProjects : function (event) {
    Finch.navigate('/proyectos');
  },
  clickGoPortfolio : function (event) {
    Finch.navigate('/proyectos');
  },
  clickGoFussionJeans : function (event) {
    Finch.navigate('/fussion-jeans');
  },
  clickGoFordCavsa : function (event) {
    Finch.navigate('/ford-cavsa');
  },
  clickGoOkumaSushi : function (event) {
    Finch.navigate('/okuma-sushi');
  },
  clickGoJovyCandy : function (event) {
    Finch.navigate('/jovy-candy');
  },
  clickGoWebPosition : function (event) {
    Finch.navigate('/posicionamiento-web');
  },
  clickGoPhotography : function (event) {
    Finch.navigate('/fotografia');
  },
  clickGoBrandIdentities : function (event) {
    Finch.navigate('/identidad-de-marca');
  },
  clickGoAds : function (event) {
    Finch.navigate('/ads-google-bing-yahoo');
  },
  clickGoAnalytics : function (event) {
    Finch.navigate('/web-analytics');
  },
  clickGoBlog : function (event) {
    Finch.navigate('/blog')
  },
  clickGoContact : function (event) {
    Finch.navigate('/contacto')
  },
  clickReturn : function (event) {
    Finch.navigate('/')
  },
  clickReturnServices : function (event) {
    Finch.navigate('/')
  }
}