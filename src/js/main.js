$(document).ready(function () {

    //mobile-navigation
    var menu_link = $('.menu-link');
    var menu = $('.menu');
    var menu_mob = $(".menu_mob");


    menu_link.click(function () {
        menu_link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
    menu_mob.click(function () {
        menu_link.removeClass('menu-link_active');
        menu.removeClass('menu_active');
    });



        //----------


    $('.navigation-menu').on('click', '.nav_link', function () {
        $('.navigation-menu').find('.active-nav').removeClass('active-nav');
        $(this).addClass('active-nav');
	 });


    $('.filter-block').on('click', '.filter-block__button ', function () {
        $('.filter-block').find('.border_active').removeClass('border_active');
        $(this).addClass('border_active');
	 });



    //animate/wow.js
   wow = new WOW (
        {
            offset: 150, // default
            mobile: true, // default
        }
    );
    wow.init ( );
   // end wow


    //slide2id - плавная прокрутка по ссылкам внутри страницы
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector:"nav a"
    });

    //mixItUp - исполняет функцию фильтрации работ в фильтре портфолио
    $('#portfolio-projects').mixItUp();
    //mixItUp


    $('.userInput_order').focus(function () {
        $(this).parent().addClass('focus_order');
    }).blur(function () {
        if ($(this).val()===''){
            $(this).parent().removeClass('focus_order');
        }
    });


    $('.userInput_order-h').focus(function () {
        $(this).parent().addClass('focus_order');
    }).blur(function () {
        if ($(this).val()===''){
            $(this).parent().removeClass('focus_order');
        }
    });



    //slider
    $('.slider_web').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        mobileFirst: true,
        autoplaySpeed: 1500
    });

});