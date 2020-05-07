$(document).ready(function() {


    /*sliders*/
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                swipeToSlide: true
            }
        }, {
            breakpoint: 559,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true
            }
        }]
    });

    $(".autoplay").each(function() {
        this.slick.getNavigableIndexes = function() {
            var _ = this,
                breakPoint = 0,
                counter = 0,
                indexes = [],
                max;
            if (_.options.infinite === false) {
                max = _.slideCount;
            } else {
                breakPoint = _.options.slideCount * -1;
                counter = _.options.slideCount * -1;
                max = _.slideCount * 2;
            }

            while (breakPoint < max) {
                indexes.push(breakPoint);
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
            return indexes;
        };
    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        asNavFor: '.slider-for',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                swipeToSlide: true
            }
        }, {
            breakpoint: 559,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true
            }
        }]
    });

    $(".slider-nav").each(function() {
        this.slick.getNavigableIndexes = function() {
            var _ = this,
                breakPoint = 0,
                counter = 0,
                indexes = [],
                max;
            if (_.options.infinite === false) {
                max = _.slideCount;
            } else {
                breakPoint = _.options.slideCount * -1;
                counter = _.options.slideCount * -1;
                max = _.slideCount * 2;
            }

            while (breakPoint < max) {
                indexes.push(breakPoint);
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
            return indexes;
        };
    });

    /*get true value of screen (without browser adress bar)*/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    $(window).resize(function() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    })
    $(window).on('orientationchange', function() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    /*remove link:hover tooltips (at the bottom-left side of screen)*/
    $("body").on('mouseover', 'a', function(e) {
        var $link = $(this),
            href = $link.attr('href') || $link.data("href");

        $link.off('click.chrome');
        $link.on('click.chrome', function() {
                window.location.href = href;
            })
            .attr('data-href', href)
            .css({
                cursor: 'pointer'
            })
            .removeAttr('href');
    });

    /* show menu */
    $('.navigation_btn').click(function() {
        $(this).toggleClass('active')
        $('.navigation_container').toggleClass('active');
        $('#nav-icon3').toggleClass('open')
    });

    /*show second section*/
    $('.more_btn').click(function() {
        $('section:not(.skills_section)').fadeOut(300);
        $('section.skills_section').fadeIn(300);
        /*fix slider's bug after resize window*/
        $('.autoplay').slick('refresh');
        $('.slider-nav').slick('refresh');
        $('.slider-for').slick('refresh');
        $(document.body).animate({scrollTop:0},10);
    });

    /*main navigation*/
    $('.navigation_container_ul > ul > li > button').click(function() {
        $('section:not(.' + $(this).attr('class') + '_section)').fadeOut(300);
        $('section.' + $(this).attr('class') + '_section').fadeIn(300);
        $('.navigation_container').removeClass('active');
        $('#nav-icon3').removeClass('open');
        $('.navigation_btn').toggleClass('active');
        /*fix slider's bug after resize window*/
        $('.autoplay').slick('refresh');
        $('.slider-nav').slick('refresh');
        $('.slider-for').slick('refresh');
        $(document.body).animate({scrollTop:0},10);
    });

    /*arrow navigation*/
    $('.inner_page_navigation > ul > li > button').click(function() {
        $('section:not(.' + $(this).attr('class') + '_section)').fadeOut(300);
        $('section.' + $(this).attr('class') + '_section').fadeIn(300);
        /*fix slider's bug after resize window*/
        $('.autoplay').slick('refresh');
        $('.slider-nav').slick('refresh');
        $('.slider-for').slick('refresh');
        $(document.body).animate({scrollTop:0},10);
    });

    /*theme*/
    $('.theme li > button').click(function() {
        $('body').toggleClass('dark');
        $('.theme li').toggleClass('dark_theme');
    });
    
    /*fix slider's bug after resize window*/
    $(window).resize(function(){
        $('.autoplay').slick('refresh');
        $('.slider-nav').slick('refresh');
        $('.slider-for').slick('refresh');
    });
    $(window).on('resize orientationchange', function() {
        $('.autoplay').slick('refresh');
        $('.slider-nav').slick('refresh');
        $('.slider-for').slick('refresh');
    });

    /*hide all section*/
    $('section:not(.intro_section)').fadeOut(500);
    $('.preloader_container').delay(500).fadeOut(500);


    /*hide navigation element*/
    var timer;
    $('.social').removeClass('unactive');
    $('.navigation_btn').removeClass('unactive');
    $('.theme').removeClass('unactive');
    $('.inner_page_navigation').removeClass('unactive');
    if( $('.navigation_container').hasClass('active') ){} else {
        $(function() {
            timer = setTimeout(function(){
            $('.social').addClass('unactive');
            $('.navigation_btn').addClass('unactive');
            $('.theme').addClass('unactive');
            $('.inner_page_navigation').addClass('unactive');
            }, 5000)
        });
    }
    clearTimeout(timer);
    
    $('body').on('click scroll', function(){
        $('.social').removeClass('unactive');
        $('.navigation_btn').removeClass('unactive');
        $('.theme').removeClass('unactive');
        $('.inner_page_navigation').removeClass('unactive');
        if( $('.navigation_container').hasClass('active') ){} else {
            $(function() {
                timer = setTimeout(function(){
                $('.social').addClass('unactive');
                $('.navigation_btn').addClass('unactive');
                $('.theme').addClass('unactive');
                $('.inner_page_navigation').addClass('unactive');
                }, 5000)
            });
        }
        clearTimeout(timer);
    })


    /*project img full popup*/
    $('.project_img_full').fadeOut();
    $('.project_img_full').click(function(){
        $('.project_img_full').fadeOut(300);
    });
    $('.slider_for_single_screenshot_img > img').click(function(){
        $('.project_img_full img').attr( 'src', './'+$(this).attr('src'));
        $('.project_img_full').fadeIn(300);
    });


});