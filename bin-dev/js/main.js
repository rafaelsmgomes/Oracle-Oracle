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
var humanResources2=26;
var supplyChain=31;
var supplyChain1=32;
var supplyChain2=37;
var customerExperience=42;
var customerExperience1=43;
var customerExperience2=47;
var customerExperience3=51;
var customerExperience4=55;
var conclusionSlide=61;
// var chapter5=12;
// var chapter6=13;
// var chapter7=14;
// run this right away to set context
if ( $window.width() <= 1053) {
    context = 'medium';
    var homePage=5;
    var chapter3=5;
    var chapter4=6;
    var chapter5=7;
    var chapter6=8;
    var chapter7=9;

    if ($window.width() <= 767) {
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
                    appendArrows: $(".footer-phone")
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

        $('body').css('height', window.innerHeight);
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

        $(".page--26 .content-holder").detach().appendTo('.page--25 .content-holder');
        $(".page--25 .content-holder").detach().appendTo('.page--24 .content-holder');
        $(".page--24 .content-holder").detach().appendTo('.page--23 .content-holder');
        $(".page--24").remove();
        $(".page--25").remove();
        $(".page--26").remove();
        
        $(".page--30 .content-holder").detach().appendTo('.page--29 .content-holder');
        $(".page--29 .content-holder").detach().appendTo('.page--28 .content-holder');
        $(".page--28 .content-holder").detach().appendTo('.page--27 .content-holder');
        $(".page--28").remove();
        $(".page--29").remove();
        $(".page--30").remove();
        
        $(".page--37 .content-holder").detach().appendTo('.page--36 .content-holder');
        $(".page--36 .content-holder").detach().appendTo('.page--35 .content-holder');
        $(".page--35 .content-holder").detach().appendTo('.page--34 .content-holder');
        $(".page--34 .content-holder").detach().appendTo('.page--33 .content-holder');
        $(".page--34").remove();
        $(".page--35").remove();
        $(".page--36").remove();
        $(".page--37").remove();
        
        $(".page--41 .content-holder").detach().appendTo('.page--40 .content-holder');
        $(".page--40 .content-holder").detach().appendTo('.page--39 .content-holder');
        $(".page--39 .content-holder").detach().appendTo('.page--38 .content-holder');
        $(".page--39").remove();
        $(".page--40").remove();
        $(".page--41").remove();
        
        $(".page--47 .content-holder").detach().appendTo('.page--46 .content-holder');
        $(".page--46 .content-holder").detach().appendTo('.page--45 .content-holder');
        $(".page--45 .content-holder").detach().appendTo('.page--44 .content-holder');
        $(".page--45").remove();
        $(".page--46").remove();
        $(".page--47").remove();
        
        $(".page--51 .content-holder").detach().appendTo('.page--50 .content-holder');
        $(".page--50 .content-holder").detach().appendTo('.page--49 .content-holder');
        $(".page--49 .content-holder").detach().appendTo('.page--48 .content-holder');
        $(".page--49").remove();
        $(".page--50").remove();
        $(".page--51").remove();
        
        $(".page--55 .content-holder").detach().appendTo('.page--54 .content-holder');
        $(".page--54 .content-holder").detach().appendTo('.page--53 .content-holder');
        $(".page--53 .content-holder").detach().appendTo('.page--52 .content-holder');
        $(".page--53").remove();
        $(".page--54").remove();
        $(".page--55").remove();
        
        $(".page--60 .content-holder").detach().appendTo('.page--59 .content-holder');
        $(".page--59 .content-holder").detach().appendTo('.page--58 .content-holder');
        $(".page--58 .content-holder").detach().appendTo('.page--57 .content-holder');
        $(".page--57 .content-holder").detach().appendTo('.page--56 .content-holder');
        $(".page--57").remove();
        $(".page--58").remove();
        $(".page--59").remove();
        $(".page--60").remove();

        $(".page--63").remove();
        $(".page--64").remove();
        
        $(".page--67 .container-right-2-col > *").detach().appendTo('.page--67 .container-left-2-col');
        $(".page--67 .content-holder").detach().appendTo('.page--66 .content-holder');
        $(".page--66 .content-holder").detach().appendTo('.page--65 .content-holder');
        $(".page--66").remove();
        $(".page--67").remove();

        $(".page--71 .content-holder").detach().appendTo('.page--70 .content-holder');
        $(".page--70 .content-holder").detach().appendTo('.page--69 .content-holder');
        $(".page--69 .content-holder").detach().appendTo('.page--68 .content-holder');
        $(".page--69").remove();
        $(".page--70").remove();
        $(".page--71").remove();


        // $(".page--64 .container-right-2-col .callout__slider > *").detach().appendTo('.page--64 .container-left-2-col .callout__slider');
        // $(".page--64 .container-right-2-col").remove();

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


        if($('body').width() <768) {

            for(let i=1; i<12; i++){
                $(".footnote__"+i).detach().appendTo('.footnote-container__'+i);
            }
        }

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
    }

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

	//arrow display
	$('.slick-arrow').show();
    
    if (context == 'large') {
        if (currentSlide === 0 || 
            currentSlide === 5 || 
            currentSlide === finance || 
            currentSlide === finance-1 || 
            currentSlide === humanResources || 
            currentSlide === humanResources-1 || 
            currentSlide === supplyChain || 
            currentSlide === supplyChain-1 || 
            currentSlide === customerExperience ||
            currentSlide === customerExperience-1 ||
            currentSlide === conclusionSlide-1 ) {
                $('.slick-prev.slick-arrow').hide();
                $('.slick-next.slick-arrow').hide();
        } else if(currentSlide === conclusionSlide) {
            $('.slick-prev.slick-arrow').hide();
        } else if(currentSlide === lastSlide) {
            $('.slick-next.slick-arrow').hide();
        };
    };
    if (context == 'medium') {
        if (currentSlide === 0 ) {
            $('.slick-prev.slick-arrow').hide();
            $('.slick-next.slick-arrow').hide();
        }
    }

    // Arrow modifiers

    $('.slick-arrow.slick-next').removeClass('next--up next--up2 next--white next--back');
    $('.slick-arrow.slick-prev').removeClass('prev--up prev--up2 prev--white');
    $('.slick-arrow').removeClass('arrows__conclusion');

    if (context == 'large') {

        var arrayArrow = [
            [9,24,28,34,49,57], // next: up, white
            [14,18,39,45,53,63], // prev: up, white
            [61,63,70], // next: back, white
            [64,65,66,71], // both: up to conclusion 
            [67,68,69], // next: up2
            [68,69,70], // prev: up2 
            [2], // prev: up2 
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
    }

     

    //display navigation item--2 & visibility 
    if (context == 'large') {
        var navItem2 = [
             [ [1] , '            <a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', intro); "><span class="chap-name bold">Intro</span></a>'],
             [ [2,3,4] , '            <a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', intro); "><span class="chap-name">Intro</span></a>'],
             [ [6] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', finance); "><span class="chap-name nav-white"><b>Finance</b></span></a>'],
             [ [7,8,9,10,11,12,13,14,15,16,17,18,19,20] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', finance); "><span class="chap-name">Finance</span></a>'],
             [ [21] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', humanResources); "><span class="chap-name"><b>HR</b></span></a>'],
             [ [21,22,23,24,25,26,27,28,29,30] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', humanResources); "><span class="chap-name">HR</span></a>'],
             [ [31,32,33,34,35,36,37,38,39,40,41] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', supplyChain); "><span class="chap-name">Supply Chain</span></a>'],
             [ [42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', customerExperience); "><span class="chap-name">CX</span></a>'],
             [ [61,62,63,64,65,66,67,68,69,70,71] , '            <span class="dividing-bar">/</span><a class="toc-link" onclick=" $(\'.book-slider\').slick(\'slickGoTo\', conclusionSlide); "><span class="chap-name"><b>Conclusion</b></span></a>'],
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
             [ [22] , '            <span class="dividing-bar">/</span><span class="chap-sub">Carreer Development 1/4</span> '],
             [ [23] , '            <span class="dividing-bar">/</span><span class="chap-sub">Carreer Development 2/4</span> '],
             [ [24] , '            <span class="dividing-bar">/</span><span class="chap-sub">Carreer Development 3/4</span> '],
             [ [25] , '            <span class="dividing-bar">/</span><span class="chap-sub">Carreer Development 4/4</span> '],
             [ [26] , '            <span class="dividing-bar">/</span><span class="chap-sub">Hiring Experience 1/4</span> '],
             [ [27] , '            <span class="dividing-bar">/</span><span class="chap-sub">Hiring Experience 2/4</span> '],
             [ [28] , '            <span class="dividing-bar">/</span><span class="chap-sub">Hiring Experience 3/4</span> '],
             [ [29] , '            <span class="dividing-bar">/</span><span class="chap-sub">Hiring Experience 4/4</span> '],
             [ [30,31] , ''],
             [ [32] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 1/5</span> '],
             [ [33] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 2/5</span> '],
             [ [34] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 3/5</span> '],
             [ [35] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 4/5</span> '],
             [ [36] , '            <span class="dividing-bar">/</span><span class="chap-sub">Supply Chain Experience 5/5</span> '],
             [ [37] , '            <span class="dividing-bar">/</span><span class="chap-sub">Product Management 1/4</span> '],
             [ [38] , '            <span class="dividing-bar">/</span><span class="chap-sub">Product Management 2/4</span> '],
             [ [39] , '            <span class="dividing-bar">/</span><span class="chap-sub">Product Management 3/4</span> '],
             [ [40] , '            <span class="dividing-bar">/</span><span class="chap-sub">Product Management 4/4</span> '],
             [ [41,42] , ''],
             [ [43] , '            <span class="dividing-bar">/</span><span class="chap-sub">Customer Purchasing 1/4</span> '],
             [ [44] , '            <span class="dividing-bar">/</span><span class="chap-sub">Customer Purchasing 2/4</span> '],
             [ [45] , '            <span class="dividing-bar">/</span><span class="chap-sub">Customer Purchasing 3/4</span> '],
             [ [46] , '            <span class="dividing-bar">/</span><span class="chap-sub">Customer Purchasing 4/4</span> '],
             [ [47] , '            <span class="dividing-bar">/</span><span class="chap-sub">Sales Experience 1/4</span> '],
             [ [48] , '            <span class="dividing-bar">/</span><span class="chap-sub">Sales Experience 2/4</span> '],
             [ [49] , '            <span class="dividing-bar">/</span><span class="chap-sub">Sales Experience 3/4</span> '],
             [ [50] , '            <span class="dividing-bar">/</span><span class="chap-sub">Sales Experience 4/4</span> '],
             [ [51] , '            <span class="dividing-bar">/</span><span class="chap-sub">Employee Experience 1/4</span> '],
             [ [52] , '            <span class="dividing-bar">/</span><span class="chap-sub">Employee Experience 2/4</span> '],
             [ [53] , '            <span class="dividing-bar">/</span><span class="chap-sub">Employee Experience 3/4</span> '],
             [ [54] , '            <span class="dividing-bar">/</span><span class="chap-sub">Employee Experience 4/4</span> '],
             [ [55] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 1/5</span> '],
             [ [56] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 2/5</span> '],
             [ [57] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 3/5</span> '],
             [ [58] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 4/5</span> '],
             [ [59] , '            <span class="dividing-bar">/</span><span class="chap-sub">Marketing Experience 5/5</span> '],
             [ [60,61] , ''],
        ];
        $.each(navItem3, function( i, arr2 ){
            $.each( arr2[0], function( i, v ){
                if(currentSlide == v ) {
                    $('.nav__item--3').html(arr2[1]);
                }
            });
        });
    }

    if(currentSlide == finance ||
    currentSlide == humanResources -1 || 
    currentSlide == humanResources || 
    currentSlide == supplyChain - 1 ||
    currentSlide == supplyChain ||
    currentSlide == customerExperience - 1 ||
    currentSlide == customerExperience || 
    currentSlide == conclusionSlide - 1 ) {
        $('.logo-home__path').css('fill', '#fcfbfa');
        $('.dividing-bar').addClass('nav-white');
        $('.chap-name').addClass('bold nav-white');
    } else if (currentSlide == 18 ||
        currentSlide == 14 || 
        currentSlide == 45 || 
        currentSlide == 53 || 
        currentSlide == 63 || 
        currentSlide == 68 || 
        currentSlide == 69 || 
        currentSlide == 70 || 
        currentSlide == 39 ) {
        $('.logo-home__path').css('fill', '#fcfbfa');
        $('.dividing-bar').addClass('nav-white');
        $('.chap-name').addClass('nav-white');
        $('.chap-sub').addClass('bold nav-white')
    } else if (currentSlide > 6 ){
        $('.logo-home__path').css('fill', '#56504b');
        $('.chap-name').removeClass('bold nav-white');
        $('.chap-sub').removeClass('bold nav-white')
        $('.dividing-bar').removeClass('nav-white');
    } else {
        $('.dividing-bar').removeClass('nav-white');
    }




    // var footer = $('.footer');
    // var slideNum=('0' + currentSlide).slice(-2);
    // var pageNum =(slideNum/1)+1;
    // $('#footNum').text(pageNum);



});

//mobile page height fix for ios/chrome/ff madness
$(window).on('resize orientationchange', function() {
    var curr_context;
    if ( $window.width() <= 1024) {
        curr_context = 'medium';
    }
    else{
        curr_context = 'large';
    }

    if(curr_context != context){
        location.reload();
    }
    if (isTouchDevice == true) {
        setTimeout(function(){
            var fix = window.innerHeight;
            $('body').css('height', fix);
            $(".footer-phone").removeClass('up');
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
                appendArrows: '.popupContainer',
                prevArrow: '<span class="icon-chevron-left"></span>',
                nextArrow: '<span class="icon-chevron-right"></span>'
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

