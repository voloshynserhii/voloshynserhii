window.addEventListener('DOMContentLoaded', function() {

    let tab = document.querySelector('.about__me-btn'),
        tabs = document.querySelector('.about__bg-julia-btn'),
        back = document.querySelector('.back'),
        backJ = document.querySelector('.back-julia'),
        serg = document.querySelector('.about__hidden'),
        julia = document.querySelector('.about__hidden-julia'),
        menu = document.querySelector('.menu'),
        menuBack = document.querySelector('.menu__back'),
        menuCall = document.querySelector('.nav-icon'),
        cover = document.querySelector('.cover'),
        contactBtn = document.querySelector('.header__navbar-btn'),
        thanks = document.querySelector('.thanks'),
        thanksClose = document.querySelector('.thanks__close');
        


   let timerId,
    i = 0;

    function fade () {
        if (i===10) {
            serg.classList.add('hide');
        } i++;
    }
	function hideTabContent() {
        serg.classList.add('hide');
        serg.classList.remove('active', 'slidein');
        fade();
        }
    

    function showTabContent() {
        serg.classList.add('active', 'slidein');
        serg.classList.remove('hide');
    }
    function hideContent() {
        julia.classList.add('hide');
        julia.classList.remove('active', 'slideinj');

        }

    function showContent() {
        julia.classList.add('active', 'slideinj');
        julia.classList.remove('hide');
    }

    hideTabContent();
    hideContent(); 


    function showMenu() {
        cover.classList.add('active', 'fade');
        cover.classList.remove('hide');
        menu.classList.add('active', 'fade');
        menu.classList.remove('fadeout', 'hide');
    }
    function hideMenu() {
        cover.classList.remove('active', 'fade');
        cover.classList.add('hide');
        menu.classList.add('fadeout', 'hide');
        menu.classList.remove('active', 'fade');
    }
    function hideThanks() {
      $('.thanks, .cover').fadeOut('slow');
  }

    back.addEventListener('click', hideTabContent);
    backJ.addEventListener('click', hideContent);
    tab.addEventListener('click', showTabContent);
    tabs.addEventListener('click', showContent);
    menuCall.addEventListener('click', showMenu);
    menuBack.addEventListener('click', hideMenu);
    contactBtn.addEventListener('click', showMenu);
    thanksClose.addEventListener('click', hideThanks);


    $(window).scroll(function() {
      if ($(this).scrollTop() < 100) {
        $('.header__navbar-btn').fadeIn();
      } else {
        $('.header__navbar-btn').fadeOut();
      }
    });


    $(document).ready(function(){
        $('.reviews__list').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
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
            ]
          });                
      });

      $('#form-email, #contact-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.menu').fadeOut();
            $('.cover, .thanks').fadeIn('slow');

            $('#form-email, #contact-form').trigger('reset');
        });
        return false;
    });

//hide scroll button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
      
//smooth scroll

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();
});
