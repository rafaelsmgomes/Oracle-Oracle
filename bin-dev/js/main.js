/**
 * Created by ekerrigan on 9/21/16.
 * Updated by Code Rodeo on 7/16/16.
*/

var context='large';
var $window = $(window);
var isTouchDevice = 'ontouchstart' in document.documentElement;
var intro=1;
var approach=2;
var homePage=5;
var finance=6;
var finance1=7;
var finance2=12;
var finance3=16;
var humanResources=21;
var humanResources1=22;
var humanResources2=27;
var supplyChain=33;
var supplyChain1=34;
var supplyChain2=39;
var customerExperience=44;
var customerExperience1=45;
var customerExperience2=49;
var customerExperience3=54;
var customerExperience4=59;
var conclusionSlide=65;
var lastPage=74;
// var chapter5=12;
// var chapter6=13;
// var chapter7=14;
// run this right away to set context
if ( $window.width() <= 1053) {
    context = 'medium';
    var intro=1;
    var homePage=2;
    var finance=3;
    var finance1=4;
    var finance2=5;
    var finance3=6;
    var humanResources=8;
    var humanResources1=9;
    var humanResources2=10;
    var supplyChain=12;
    var supplyChain1=13;
    var supplyChain2=14;
    var customerExperience=16;
    var customerExperience1=17;
    var customerExperience2=18;
    var customerExperience3=19;
    var customerExperience4=20;
    var conclusionSlide=22;
    
    if ($window.width() <= 450) {
        context = 'small';
    }
}

// var isMac = navigator.platform.toUpperCase().indexOf('MACINTEL')>=0;

// if(isMac){
//     $('body').addClass('mac')
// }

//fix the textarea layout
[].forEach.call(document.querySelectorAll('textarea'), function($pre) {
    var lines = $pre.textContent.split('\n');
    var matches;
    var indentation = (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;
    if (!!indentation) {
        lines = lines.map(function(line) {
            return line.replace(indentation, '');
        });
        return $pre.textContent = lines.join('\n').trim();
    }
});

var toggle_icon = false;

function slide_toggle(x){
    $('#slide_pg'+ x).toggleClass('hoverish_div');    
}

$(document).ready(function() {
    var slider = $('.book-slider').slick({
        infinite: false,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    accessibility:false,
                }
            }
        ]
    });


    $('.nav-bar').click(function(){
        $('.nav-bar').toggleClass('hoverish');
        if(toggle_icon === false){
            toggle_icon = true;
        }else{
            toggle_icon = false;
        }
    });

    $('.page, .nav-left, .footer, .slick-next, .slick-prev').click(function(){
        if(toggle_icon === true){
            $('.nav-bar').toggleClass('hoverish');
            $('.footer-phone').removeClass('up'); 
            toggle_icon = false;
        }
    });

    $('.page').css('height', $(window).height()); 


    if ($('body').width() < 1053 ) {
        var st = $(this).scrollTop();
        var lastScrollTop = 0;
        var delta = 5;
        var didScroll;
        var navbarHeight=$('.footer-phone').outerHeight();
        $( window ).on( "swipe", function( event ) {
            $('.page').animate({ scrollTop: 0 }, 'fast');
            $(".footer-phone").removeClass('up');
        } );

        // $(window).innerHeight();
        // $('.main_container').css('height', (window.height()));
        $('.page').css('height', $(window).height()); 
        console.log( window.innerHeight);

        $('.minus-marg--1').removeClass('minus-marg--1');

        setInterval(function() {
            if (didScroll) {
                didScroll = false;
            }
        }, 250);

        $('.page').scroll(function() {
            didScroll = true;
            var st = $(this).scrollTop();
            console.log('st: ' + st)

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $(".footer-phone").addClass('up');
            } else {
                // Scroll Up
                if(st <150) {
                    $(".footer-phone").removeClass('up');
                }
            }

            lastScrollTop = st;

        });

        $('.book-slider').slick('unslick');

        // Move footnotes at bottom of page  
        for(let i=1; i<12; i++){
            $(".footnote__"+i).detach().appendTo('.footnote-container__t'+i);
        }

        // Replace superscripts on footnotes
        for(let i=2; i<5; i++){
            $(".sup__change-1--"+i).text(i);
        }
        for(let i=2; i<5; i++){
            $(".sup__change-2--"+i).text(i);
        }
        $(".sup__change-3--1").text(5);
        $(".sup__change-3--2").text(6);
                
        $(".page--5 .content-holder").detach().appendTo('.page--4 .content-holder');
        $(".page--4 .content-holder").detach().appendTo('.page--3 .content-holder');
        $(".page--3 .content-holder").detach().appendTo('.page--2 .content-holder');
        $(".page--3").remove();
        $(".page--4").remove();
        $(".page--5").remove();

        $(".page--12 .content-holder").detach().appendTo('.page--11 .content-holder');
        $(".page--11 .content-holder").detach().appendTo('.page--10 .content-holder');
        $(".page--10 .content-holder").detach().appendTo('.page--9 .content-holder');
        $(".page--9 .content-holder").detach().appendTo('.page--8 .content-holder');
        $(".page--9").remove();
        $(".page--10").remove();
        $(".page--11").remove();
        $(".page--12").remove();


        $(".page--16 .content-holder").detach().appendTo('.page--15 .content-holder');
        $(".page--15 .content-holder").detach().appendTo('.page--14 .content-holder');
        $(".page--14 .content-holder").detach().appendTo('.page--13 .content-holder');
        $(".page--14").remove();
        $(".page--15").remove();
        $(".page--16").remove();

        $(".page--20 .content-holder").detach().appendTo('.page--19 .content-holder');
        $(".page--19 .content-holder").detach().appendTo('.page--18 .content-holder');
        $(".page--18 .content-holder").detach().appendTo('.page--17 .content-holder');
        $(".page--18").remove();
        $(".page--19").remove();
        $(".page--20").remove();

        $(".page--27 .content-holder").detach().appendTo('.page--26 .content-holder');
        $(".page--26 .content-holder").detach().appendTo('.page--25 .content-holder');
        $(".page--25 .content-holder").detach().appendTo('.page--24 .content-holder');
        $(".page--24 .content-holder").detach().appendTo('.page--23 .content-holder');
        $(".page--24").remove();
        $(".page--25").remove();
        $(".page--26").remove();
        $(".page--27").remove();
        
        $(".page--32 .content-holder").detach().appendTo('.page--31 .content-holder');
        $(".page--31 .content-holder").detach().appendTo('.page--30 .content-holder');
        $(".page--30 .content-holder").detach().appendTo('.page--29 .content-holder');
        $(".page--29 .content-holder").detach().appendTo('.page--28 .content-holder');
        $(".page--29").remove();
        $(".page--30").remove();
        $(".page--31").remove();
        $(".page--32").remove();
        
        $(".page--39 .content-holder").detach().appendTo('.page--38 .content-holder');
        $(".page--38 .content-holder").detach().appendTo('.page--37 .content-holder');
        $(".page--37 .content-holder").detach().appendTo('.page--36 .content-holder');
        $(".page--36 .content-holder").detach().appendTo('.page--35 .content-holder');
        $(".page--36").remove();
        $(".page--37").remove();
        $(".page--38").remove();
        $(".page--39").remove();
        
        $(".page--43 .content-holder").detach().appendTo('.page--42 .content-holder');
        $(".page--42 .content-holder").detach().appendTo('.page--41 .content-holder');
        $(".page--41 .content-holder").detach().appendTo('.page--40 .content-holder');
        $(".page--41").remove();
        $(".page--42").remove();
        $(".page--43").remove();
        
        $(".page--49 .content-holder").detach().appendTo('.page--48 .content-holder');
        $(".page--48 .content-holder").detach().appendTo('.page--47 .content-holder');
        $(".page--47 .content-holder").detach().appendTo('.page--46 .content-holder');
        $(".page--47").remove();
        $(".page--48").remove();
        $(".page--49").remove();
        
        $(".page--54 .content-holder").detach().appendTo('.page--53 .content-holder');
        $(".page--53 .content-holder").detach().appendTo('.page--52 .content-holder');
        $(".page--52 .content-holder").detach().appendTo('.page--51 .content-holder');
        $(".page--51 .content-holder").detach().appendTo('.page--50 .content-holder');
        $(".page--51").remove();
        $(".page--52").remove();
        $(".page--53").remove();
        $(".page--54").remove();
        
        $(".page--59 .content-holder").detach().appendTo('.page--58 .content-holder');
        $(".page--58 .content-holder").detach().appendTo('.page--57 .content-holder');
        $(".page--57 .content-holder").detach().appendTo('.page--56 .content-holder');
        $(".page--56 .content-holder").detach().appendTo('.page--55 .content-holder');
        $(".page--56").remove();
        $(".page--57").remove();
        $(".page--58").remove();
        $(".page--59").remove();

        $(".page--64 .content-holder").detach().appendTo('.page--63 .content-holder');
        $(".page--63 .content-holder").detach().appendTo('.page--62 .content-holder');
        $(".page--62 .content-holder").detach().appendTo('.page--61 .content-holder');
        $(".page--61 .content-holder").detach().appendTo('.page--60 .content-holder');
        $(".page--61").remove();
        $(".page--62").remove();
        $(".page--63").remove();
        $(".page--64").remove();

        $(".page--67 .container-right-2-col .callout__slider > *").detach().appendTo('.page--67 .container-left-2-col .callout__slider');
        $('.page--67 .container-right-2-col').remove();
        $(".page--67 .content-holder").detach().appendTo('.page--66 .content-holder');
        $(".page--67 .container-right-2-col").remove();
        $(".page--67").remove();

        
        $(".page--70 .container-right-2-col > *").detach().appendTo('.page--70 .container-left-2-col');
        $(".page--70 .content-holder").detach().appendTo('.page--69 .content-holder');
        $(".page--69 .content-holder").detach().appendTo('.page--68 .content-holder');
        $(".page--69").remove();
        $(".page--70").remove();

        $(".page--74 .content-holder").detach().appendTo('.page--73 .content-holder');
        $(".page--73 .content-holder").detach().appendTo('.page--72 .content-holder');
        $(".page--72 .content-holder").detach().appendTo('.page--71 .content-holder');
        $(".page--72").remove();
        $(".page--73").remove();
        $(".page--74").remove();



        $('.book-slider').slick({
            infinite: false,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        speed: 300,
                        slidesToShow: 1,
                        adaptiveHeight: true,
                        mobileFirst: true,
                        accessibility:false,
                        infinite:false,
                        swipeToSlide:true
                    }
                }
            ]
        });



    }


    $('.scrollbar-inner').scrollbar();

    $('h1, h2, h3, h4, h5, h6, li, p, .quote, .cover-title, .txt-19').widowFix();
    $('.rewidow').each(function(){
        $(this).html($(this).html().replace(/&nbsp;/gi,' '));
    });      
    var hash = window.location.hash.split('/');
    var hashVal = hash[2];
    $('.book-slider').slick('slickGoTo', hashVal);

	    $('#preloader').fadeOut('fast');
        if(window.location.hash) {
            var hash = window.location.hash.split('/');
            var hashVal = hash[2];
            $('.book-slider').slick('slickGoTo', hashVal);
            // hash found
        } else {
            // No hash found
            $('.book-slider').slick('slickGoTo', 0);
        }




    $('.toc h1').find('a').on('click', function(e){
        e.preventDefault();
        var $slide = $(this).data('slide');
        $('.book-slider').slick('slickGoTo', $slide);
    }); 
    
    //stop video when closing     
    $('.modal__close').on('click',function(){		
    	var iframe = $(this).next().find('iframe');
    	iframe.attr('src', iframe.attr('src'));
    });

    
   $('.slick-arrow').on('click',function(){
      var curSlide = $('.slick-current').prev();
      if($(this).hasClass('slick-prev')) {
          $carousel.slick('slickPrev');
          $('.page').animate({ scrollTop: 0 }, 'fast');
      }
       else{
          $carousel.slick('slickNext');
          $('.page').animate({ scrollTop: 0 }, 'fast');
      }
      curSlide.find('.modal-state:checked').each(function(){
	      $('.modal__close[for="' + $(this).attr('id') + '"]').trigger('click');
       });
    });


});


$('.to-top').on('click', function(e){
    $('.page').animate({ scrollTop: 0 }, 'fast');
    e.preventDefault();

});


//fix keyboard controls
var $carousel = $('.book-slider');
$(document).on('keydown', function(e) {
    if(e.keyCode == 37) {
        $carousel.slick('slickPrev');
        e.preventDefault();
    }
    if(e.keyCode == 39) {

        $carousel.slick('slickNext');
        e.preventDefault();
    }
});



var flag=false;


$('.book-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {

    $('html, body').animate({ scrollTop: 0}, 200);
    var lastSlide = $('section.slick-slide:not(.slick-cloned)').length - 1;

    console.log(currentSlide);

	//set URL bar
    if(flag==false){
    	flag=true;
    }else{
        window.location.hash = '/page/' + currentSlide;
    }
    $('.nav-bar').addClass('nav-flex');
    $('.footer').fadeIn();

    //controls nav display



    // nav-items display
    if (context == 'large') {
        if(currentSlide === 0 || currentSlide === 5){
            // $('.trail-bttn').hide();
            // $('.footer').addClass('txt-black');
            // $('.footer-book-title').hide();
            $('.nav-bar').hide();
            $('.footer-phone').hide();
        }else if (currentSlide > 0){
            $('.nav-bar').show();
        }else{
            $('.nav-bar').hide();
            // $('.footer').removeClass('footer-show');
            // $('.footer-phone').hide();        
        };

        if (currentSlide < 5){
            $('.nav__item--1').hide();
            $('.nav__item--4').show();
        } else if(currentSlide >= 63) {
            $('.nav__item--3').hide();
            $('.nav__item--1').show();
            $('.nav__item--4').hide();
        } else {
            $('.nav__item--1').show();
            $('.nav__item--3').show();
            $('.nav__item--4').hide();
        }
    };

	//arrow display
	$('.slick-arrow').show();
    
    if (context == 'large') {
        if (currentSlide === 0 ) {
                $('.slick-prev.slick-arrow').hide();
                $('.slick-next.slick-arrow').hide();
        } else if ( currentSlide === finance || 
            currentSlide === humanResources || 
            currentSlide === supplyChain || 
            currentSlide === customerExperience ) {
                $('.slick-next.slick-arrow').hide();
        } else if(currentSlide === conclusionSlide) {
            $('.slick-prev.slick-arrow').hide();
        } else if(currentSlide === lastSlide) {
            $('.slick-next.slick-arrow').hide();
        };
    };
    if (context == 'medium' || context == 'small') {
        if (currentSlide === 0 ) {
            $('.slick-prev.slick-arrow').hide();
            $('.slick-next.slick-arrow').hide();
        } else if (currentSlide === lastSlide) {
            $('.slick-next.slick-arrow').hide();
        }
    }

    // Arrow modifiers

    $('.slick-arrow.slick-next').removeClass('next--up next--up2 next--white next--back');
    $('.slick-arrow.slick-prev').removeClass('prev--up prev--up2 prev--white');
    $('.slick-arrow').removeClass('arrows__conclusion');

    if (context == 'large') {

        var arrayArrow = [
            [], // next: up, white - 9,24,28,34,49,57
            [], // prev: up, white - 14,18,39,45,53,63
            [], // next: back, white - 61,63,70
            [67,68,69,70,71,72,73,74], // both: up to conclusion - 64,65,66,71
            [], // next: up2 - 67,68,69
            [], // prev: up2 - 68,69,70
            [1,5,9,20,24,29,32,36,43,51,61,64,65,66,73], // next: white 
            [5,6,14,18,20,21,32,33,41,43,44,47,56,64,66], // prev: white 
        ];
        $.each(arrayArrow[0], function( i, v ){
            if (currentSlide == v) {
                $('.slick-arrow.slick-next').addClass('next--up next--white');
            } 
        });
        $.each(arrayArrow[1], function( i, v ){
            if (currentSlide == v) {
                $('.slick-arrow.slick-prev').addClass('prev--up prev--white');
            }
        });
        $.each(arrayArrow[2], function( i, v ){
            if (currentSlide == v) {
                $('.slick-arrow.slick-next').addClass('next--back next--white');
            }
        });
        $.each(arrayArrow[3], function( i, v ){
            if (currentSlide == v) {
                $('.slick-arrow').addClass('arrows__conclusion');
            }
        });
        $.each(arrayArrow[4], function( i, v ){
            if (currentSlide == v) {
                $('.slick-arrow.slick-next').addClass('next--up2');
            }
        });
        $.each(arrayArrow[5], function( i, v ){
            if (currentSlide == v) {
                $('.slick-arrow.slick-prev').addClass('prev--up2');
            }
        });
        $.each(arrayArrow[6], function( i, v ){
            if (currentSlide == v) {
                $('.slick-arrow.slick-next').addClass('next--white');
            }
        });
        $.each(arrayArrow[7], function( i, v ){
            if (currentSlide == v) {
                $('.slick-arrow.slick-prev').addClass('prev--white');
            }
        });
    }

     

    //display navigation item--2 & visibility 
    if (context == 'large') {
        var navItem2 = [
             [ [1] , '            <a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', intro); "><span class="chap-name bold">Intro</span></a>'],
             [ [2,3,4] , '            <a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', intro); "><span class="chap-name">Intro</span></a>'],
             [ [6] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', finance); "><span class="chap-name nav-white"><b>Finance</b></span></a>'],
             [ [7,8,9,10,11,12,13,14,15,16,17,18,19,20] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', finance); "><span class="chap-name">Finance</span></a>'],
             [ [21] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', humanResources); "><span class="chap-name"><b>HR</b></span></a>'],
             [ [21,22,23,24,25,26,27,28,29,30,31,32] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', humanResources); "><span class="chap-name">HR</span></a>'],
             [ [33,34,35,36,37,38,39,40,41,42,43] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', supplyChain); "><span class="chap-name">SC</span></a>'],
             [ [44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', customerExperience); "><span class="chap-name">CX</span></a>'],
             [ [65,66,67,68,69,70,71,72,73,74] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', conclusionSlide); "><span class="chap-name"><b>Conclusion</b></span></a>'],
        ];
        $.each(navItem2, function( i, arr2 ){
            $.each( arr2[0], function( i, v ){
                if(currentSlide == v ) {
                    $('.nav__item--2').html(arr2[1]);
                }
            });
        });
    
        var navItem3 = [
             [ [1] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', approach); "><span class="chap-name">Approach</span></a><span class="dividing-bar">/</span>'],
             [ [2,3,4] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', approach); "><span class="chap-name bold">Approach</span></a><span class="dividing-bar">/</span>'],
             [ [6] , ''],
             [ [7] , '            <span class="dividing-bar">/</span><span class="chap-sub">Financial Reporting 1/5</span> '],
             [ [8] , '            <span class="dividing-bar">/</span><span class="chap-sub">Financial Reporting 2/5</span> '],
             [ [9] , '            <span class="dividing-bar">/</span><span class="chap-sub">Financial Reporting 3/5</span> '],
             [ [10] , '            <span class="dividing-bar">/</span><span class="chap-sub">Financial Reporting 4/5</span> '],
             [ [11] , '            <span class="dividing-bar">/</span><span class="chap-sub">Financial Reporting 5/5</span> '],
             [ [12] , '            <span class="dividing-bar">/</span><span class="chap-sub">Financial Planning 1/4</span> '],
             [ [13] , '            <span class="dividing-bar">/</span><span class="chap-sub">Financial Planning 2/4</span> '],
             [ [14] , '            <span class="dividing-bar">/</span><span class="chap-sub">Financial Planning 3/4</span> '],
             [ [15] , '            <span class="dividing-bar">/</span><span class="chap-sub">Financial Planning 4/4</span> '],
             [ [16] , '            <span class="dividing-bar">/</span><span class="chap-sub">Expense Submission 1/4</span> '],
             [ [17] , '            <span class="dividing-bar">/</span><span class="chap-sub">Expense Submission 2/4</span> '],
             [ [18] , '            <span class="dividing-bar">/</span><span class="chap-sub">Expense Submission 3/4</span> '],
             [ [19] , '            <span class="dividing-bar">/</span><span class="chap-sub">Expense Submission 4/4</span> '],
             [ [20,21] , ''],
             [ [22] , '            <span class="dividing-bar">/</span><span class="chap-sub">Career Development 1/5</span> '],
             [ [23] , '            <span class="dividing-bar">/</span><span class="chap-sub">Career Development 2/5</span> '],
             [ [24] , '            <span class="dividing-bar">/</span><span class="chap-sub">Career Development 3/5</span> '],
             [ [25] , '            <span class="dividing-bar">/</span><span class="chap-sub">Career Development 4/5</span> '],
             [ [26] , '            <span class="dividing-bar">/</span><span class="chap-sub">Career Development 5/5</span> '],
             [ [27] , '            <span class="dividing-bar">/</span><span class="chap-sub">Hiring Experience 1/5</span> '],
             [ [28] , '            <span class="dividing-bar">/</span><span class="chap-sub">Hiring Experience 2/5</span> '],
             [ [29] , '            <span class="dividing-bar">/</span><span class="chap-sub">Hiring Experience 3/5</span> '],
             [ [30] , '            <span class="dividing-bar">/</span><span class="chap-sub">Hiring Experience 4/5</span> '],
             [ [31] , '            <span class="dividing-bar">/</span><span class="chap-sub">Hiring Experience 5/5</span> '],
             [ [32,33] , ''],
             [ [34] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 1/5</span> '],
             [ [35] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 2/5</span> '],
             [ [36] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 3/5</span> '],
             [ [37] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 4/5</span> '],
             [ [38] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 5/5</span> '],
             [ [39] , '            <span class="dividing-bar">/</span><span class="chap-sub">Product Management 1/4</span> '],
             [ [40] , '            <span class="dividing-bar">/</span><span class="chap-sub">Product Management 2/4</span> '],
             [ [41] , '            <span class="dividing-bar">/</span><span class="chap-sub">Product Management 3/4</span> '],
             [ [42] , '            <span class="dividing-bar">/</span><span class="chap-sub">Product Management 4/4</span> '],
             [ [43,44] , ''],
             [ [45] , '            <span class="dividing-bar">/</span><span class="chap-sub">Customer Purchasing 1/4</span> '],
             [ [46] , '            <span class="dividing-bar">/</span><span class="chap-sub">Customer Purchasing 2/4</span> '],
             [ [47] , '            <span class="dividing-bar">/</span><span class="chap-sub">Customer Purchasing 3/4</span> '],
             [ [48] , '            <span class="dividing-bar">/</span><span class="chap-sub">Customer Purchasing 4/4</span> '],
             [ [49] , '            <span class="dividing-bar">/</span><span class="chap-sub">Sales Experience 1/5</span> '],
             [ [50] , '            <span class="dividing-bar">/</span><span class="chap-sub">Sales Experience 2/5</span> '],
             [ [51] , '            <span class="dividing-bar">/</span><span class="chap-sub">Sales Experience 3/5</span> '],
             [ [52] , '            <span class="dividing-bar">/</span><span class="chap-sub">Sales Experience 4/5</span> '],
             [ [53] , '            <span class="dividing-bar">/</span><span class="chap-sub">Sales Experience 5/5</span> '],
             [ [54] , '            <span class="dividing-bar">/</span><span class="chap-sub">Employee Experience 1/5</span> '],
             [ [55] , '            <span class="dividing-bar">/</span><span class="chap-sub">Employee Experience 2/5</span> '],
             [ [56] , '            <span class="dividing-bar">/</span><span class="chap-sub">Employee Experience 3/5</span> '],
             [ [57] , '            <span class="dividing-bar">/</span><span class="chap-sub">Employee Experience 4/5</span> '],
             [ [58] , '            <span class="dividing-bar">/</span><span class="chap-sub">Employee Experience 5/5</span> '],
             [ [59] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 1/5</span> '],
             [ [60] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 2/5</span> '],
             [ [61] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 3/5</span> '],
             [ [62] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 4/5</span> '],
             [ [63] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 5/5</span> '],
             [ [64,65,66,67,68,69,70,71,72,73,74] , ''],
        ];
        $.each(navItem3, function( i, arr2 ){
            $.each( arr2[0], function( i, v ){
                if(currentSlide == v ) {
                    $('.nav__item--3').html(arr2[1]);
                }
            });
        });

        // Navigation color switching --> Default is gray color
        $('.nav__right svg > *').css('fill', '#645B54');
        $('.logo-home__path').css('fill', '#56504b');
        $('.chap-name').removeClass('nav-white');
        $('.chap-sub').removeClass('bold nav-white');
        $('.dividing-bar').removeClass('nav-white');
        $('.nav__right span').css('color', '#383330');
        $('.nav__item--5 .dividing-bar').css('color', '#383330');
        $('.nav__item--2, .nav__item--3').show();
        if(currentSlide == finance || // All navigation goes white
        currentSlide == humanResources -1 || 
        currentSlide == humanResources || 
        currentSlide == supplyChain - 1 ||
        currentSlide == supplyChain ||
        currentSlide == customerExperience - 1 ||
        currentSlide == customerExperience || 
        currentSlide == 66 || 
        currentSlide == 71 || 
        currentSlide == 72 || 
        currentSlide == 73 || 
        currentSlide == conclusionSlide - 1 ) {
            $('.logo-home__path').css('fill', '#fcfbfa');
            $('.dividing-bar').addClass('nav-white');
            $('.chap-name').addClass('bold nav-white');
            $('.nav__right span').css('color', '#fcfbfa');
            $('.nav__right svg > *').css('fill', '#fcfbfa');
            $('.nav__item--5 .dividing-bar').css('color', '#fcfbfa');
        } else if (currentSlide == 18 || // Left side navigation turns white
            currentSlide == 14 || 
            currentSlide == 47 || 
            currentSlide == 56 || 
            currentSlide == 41 ) {
            $('.logo-home__path').css('fill', '#fcfbfa');
            $('.dividing-bar').addClass('nav-white');
            $('.chap-name').addClass('nav-white');
            $('.chap-sub').addClass('bold nav-white');
        } else if (currentSlide == 9 || // Right side navigation turns white
            currentSlide == 2 ||
            currentSlide == 29 ||
            currentSlide == 36 ||
            currentSlide == 51 ||
            currentSlide == 61 ||
            currentSlide == conclusionSlide ||
            currentSlide == 70 ||
            currentSlide == 24) {
            $('.nav__right span').css('color', '#fcfbfa');
            $('.nav__right svg > *').css('fill', '#fcfbfa');
            $('.nav__item--5 .dividing-bar').css('color', '#fcfbfa');
        } else if (currentSlide == homePage) {
            $('.nav__right span').css('color', '#fcfbfa');
            $('.nav__right svg > *').css('fill', '#fcfbfa');
            $('.nav__item--5 .dividing-bar').css('color', '#fcfbfa');
            $('.nav-bar').show();
            $('.nav__item--1, .nav__item--2, .nav__item--3').hide();
        }
    }

    if (context === 'medium' || context == 'small') {

        $('.nav-bar').show();


        // $('.page--62 .content-holder')

        var navItem2m = [
             [ [1] , '            <a class="toc-link" onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-name bold">Intro</span></a><span class="dividing-bar">/</span>'],
             [ [2] , ''],
             [ [3] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"); "><span class="chap-name nav-white"><b>FIN</b></span></a>'],
             [ [4,5,6,7] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', finance); "); "><span class="chap-name">FIN</span></a>'],
             [ [8] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"); "><span class="chap-name nav-white"><b>HR</b></span></a>'],
             [ [9,10,11] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', humanResources); "); "><span class="chap-name">HR</span></a>'],
             [ [12] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"); "><span class="chap-name nav-white"><b>SC</b></span></a>'],
             [ [13,14,15] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', supplyChain); "); "><span class="chap-name">SC</span></a>'],
             [ [16] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"); "><span class="chap-name nav-white"><b>CX</b></span></a>'],
             [ [17,18,19,20,21] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', customerExperience); "); "><span class="chap-name">CX</span></a>'],
             [ [22] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"); "><span class="chap-name nav-white"><b>Conclusion</b></span></a>'],
             [ [23,24,25,26] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', conclusionSlide); "); "><span class="chap-name bold">Conclusion</span></a>'],
        ];
        $.each(navItem2m, function( i, arr2 ){
            $.each( arr2[0], function( i, v ){
                if(currentSlide == v ) {
                    $('.nav__item--2').html(arr2[1]);
                }
            });
        });

        // var navItem3m = [
        //      [ [1] , ''],
        //      [ [2,3] , ''],
        //      [ [4] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Financial Reporting</span></a>'],
        //      [ [5] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Financial Planning</span></a>'],
        //      [ [6] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Expense Submission</span></a>'],
        //      [ [7,8] , ''],
        //      [ [9] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Career Development</span></a>'],
        //      [ [10] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Hiring Experience</span></a>'],
        //      [ [11,12] , ''],
        //      [ [13] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">SC Experience</span></a>'],
        //      [ [14] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Product Management</span></a>'],
        //      [ [15,16] , ''],
        //      [ [17] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Customer Purchasing</span></a>'],
        //      [ [18] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Sales Experience</span></a>'],
        //      [ [19] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Employee Experience</span></a>'],
        //      [ [20] , '<span class="dividing-bar">/</span><a  onclick="$(\'.page\').animate({ scrollTop: 0 }, \'fast\');"><span class="chap-sub">Marketing Experience</span></a>'],
        //      [ [21,22,23,24,25,26] , ''],
        // ];
        var navItem3m = [
             [ [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26] , ''],
        ];
        $.each(navItem3m, function( i, arr2 ){
            $.each( arr2[0], function( i, v ){
                if(currentSlide == v ) {
                    $('.nav__item--3').html(arr2[1]);
                }
            });
        });

        $('.nav-bar').show();
        $('.nav__item--1 > *').show(); 

        if(currentSlide === 0 ){
            $('.nav-bar').hide();
        } else if (currentSlide == homePage) {
            $('.nav__item--1 > *').hide(); 
        }
        
        $('.logo-home__path').css('fill', '#56504b');
        $('.chap-name').removeClass('nav-white');
        $('.chap-sub').removeClass('bold nav-white')
        $('.dividing-bar').removeClass('nav-white');
        $('.nav-bar').removeClass('nav__bg-black');
        $('.nav-bar').addClass('nav__bg-white');
        $('.nav__right span').css('color', '#56504b');
        $('.nav__right svg > *').css('fill', '#56504b');
        $('.nav__item--5 .dividing-bar').css('color', '#56504b');
        if (currentSlide == finance ||
        currentSlide == finance -1 ||
        currentSlide == humanResources -1 ||
        currentSlide == humanResources ||
        currentSlide == supplyChain -1 ||
        currentSlide == supplyChain ||
        currentSlide == customerExperience -1 ||
        currentSlide == customerExperience ||
        currentSlide == conclusionSlide - 1 ) {
            $('.logo-home__path').css('fill', '#fcfbfa');
            $('.dividing-bar').addClass('nav-white');
            $('.chap-name').addClass('bold nav-white');
            $('.nav-bar').addClass('nav__bg-black');
            $('.nav__right span').css('color', '#fcfbfa');
            $('.nav__right svg > *').css('fill', '#fcfbfa');
            $('.nav__item--5 .dividing-bar').css('color', '#fcfbfa');
        } else if (currentSlide == homePage) {
            $('.nav__right span').css('color', '#fcfbfa');
            $('.nav__right svg > *').css('fill', '#fcfbfa');
            $('.nav__item--5 .dividing-bar').css('color', '#fcfbfa');
            $('.nav__item--1, .nav__item--2, .nav__item--3').hide();
        }

        if (currentSlide === 1){
            $('.nav__item--1').hide();
            $('.nav__item--4').show();
        } else {
            $('.nav__item--1').show();
            $('.nav__item--2').show();
            $('.nav__item--3').show();
            $('.nav__item--4').hide();
            $('.nav__item--5').show();
        };
        if (context == 'small') {
            $('.nav__item--3').hide();
            $('.chap-name').addClass('bold');
            $('.header').addClass('rewidow');
        }

    }




    // var footer = $('.footer');
    // var slideNum=('0' + currentSlide).slice(-2);
    // var pageNum =(slideNum/1)+1;
    // $('#footNum').text(pageNum);



});

//mobile page height fix for ios/chrome/ff madness
$(window).on('resize orientationchange', function() {
    var curr_context;
    if ( $window.width() <= 1053) {
        curr_context = 'medium';
    }
    else{
        curr_context = 'large';
    }

    if(curr_context != context){
        location.reload();
    }
    if (isTouchDevice == true ) {
        setTimeout(function(){
            var fix = window.innerHeight;
            $('body').css('height', fix);
            $('.page').css('height', fix);
            $('.main_container').css('height', fix);
        },500)
    }
});

//add the ScrollTo animation
jQuery.fn.extend(
    {
        scrollTo : function(speed, easing)
        {
            return this.each(function()
            {
                var targetOffset = $(this).offset().top - 68;
                $('.page').animate({scrollTop: targetOffset}, speed, easing);
            });
        }
    });


function openPop1(){
    var cwidth=$('#pop1').width;
    var cheight=$('#pop1').height;
    $("#popupContainer").css({'display':'block','width':cwidth+'px','height':cheight+'px'});
    $('#pop1').bPopup({
            follow: [true, true],
            position: ['auto', 'auto'],
            transition: 'zoomIn',
            content:'image',
            modalclose:'true',
            appendTo:'slick-active',
            modalColor:'#003b4d',
            opacity:'0.90',
            closeClass:'b-close'

        },
        function(){
            $('.popup-slider').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                prevArrow: '<span class="pop-slider-left"></span>',
                nextArrow: '<span class="pop-slider-right"></span>',

            });

        })
}

function openPop2(){
    var cwidth=$('#pop2').width;
    var cheight=$('#pop2').height;
    $("#popupContainer").css({'display':'block','width':cwidth+'px','height':cheight+'px'});
    $('#pop2').bPopup({
            follow: [true, true],
            position: ['auto', 'auto'],
            transition: 'zoomIn',
            content:'image',
            modalclose:'true',
            appendTo:'html',

        },
        function(){
            $('.popup-slider-2').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots:true,
                // appendArrows: '.popupContainer',
                // prevArrow: '<span class="icon-chevron-left"></span>',
                // nextArrow: '<span class="icon-chevron-right"></span>'
            });

        })
}

/**event listeners**/

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.book-slider').slick('slickGoTo', slideno - 1);
 });


$( '#basic-modal .basic' ).on( 'click', function( event ) {
  $( '#basic-modal-content' ).closest( "li" ).modal();
  return false;
});

