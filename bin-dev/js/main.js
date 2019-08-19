/**
 * Created by ekerrigan on 9/21/16.
 * Updated by Code Rodeo on 7/16/16.
*/

var context='large';
var $window = $(window);
var isTouchDevice = 'ontouchstart' in document.documentElement;
var chapter0=1;
var chapter1=2;
var chapter2=4;
var chapter3=8;
var chapter4=14;
// var chapter5=12;
// var chapter6=13;
// var chapter7=14;
// run this right away to set context
if ( $window.width() <= 1024) {
    context = 'medium';
    var chapter2=4;
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


    $('.icon-wrap').click(function(){
        $('.icon-wrap').toggleClass('hoverish');
        if(toggle_icon === false){
            toggle_icon = true;
        }else{
            toggle_icon = false;
        }
    });

    $('.page, .nav-left, .footer, .slick-next, .slick-prev').click(function(){
        if(toggle_icon === true){
            $('.icon-wrap').toggleClass('hoverish');
            $('.footer-phone').removeClass('up'); 
            toggle_icon = false;
        }
    });



    if ($('body').width() < 1025 ) {
        var st = $(this).scrollTop();
        var lastScrollTop = 0;
        var delta = 5;
        var didScroll;
        var navbarHeight=$('.footer-phone').outerHeight();
        $( window ).on( "swipe", function( event ) {
            $('.page').animate({ scrollTop: 0 }, 'fast');
            $(".footer-phone").removeClass('up');
        } );

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
                
        $("#mobile-page-1").detach().appendTo('.page--p3 .content-holder');

        $("#mobile-page-2").detach().appendTo('.page--p5 .content-holder');
        $("#mobile-page-3").detach().appendTo('.page--p5 .content-holder');
        $("#mobile-page-4").detach().appendTo('.page--p5 .content-holder');

        $("#mobile-page-5").detach().appendTo('.page--p9 .content-holder');
        $("#mobile-page-6").detach().appendTo('.page--p9 .content-holder');
        $("#mobile-page-7").detach().appendTo('.page--p9 .content-holder');
        $("#mobile-page-8").detach().appendTo('.page--p9 .content-holder');
        $("#mobile-page-9").detach().appendTo('.page--p9 .content-holder');

        $("#mobile-page-10").detach().appendTo('.page--p15 .content-holder');

        $(".page--p4").remove();

        $(".page--p6").remove();
        $(".page--p7").remove(); 
        $(".page--p8").remove();

        $(".page--p10").remove();
        $(".page--p11").remove();
        $(".page--p12").remove();
        $(".page--p13").remove();
        $(".page--p14").remove();   

        $(".page--p16").remove();               

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

	//set URL bar
    if(flag==false){
    	flag=true;
    }else{
        window.location.hash = '/page/' + currentSlide;
    }
    $('.nav-bar').addClass('nav-flex');
    $('.footer').fadeIn();

	//controls nav display
    switch(currentSlide) {
        case 0:
            $('.footer').hide();
            $('.nav-bar').hide();
            // $('.footer-phone').hide();
            $('.nav-bar').removeClass('nav-flex');
            break;
        case lastSlide:
            $('.nav-bar').hide();
            $('.footer').hide();
            // $('.footer-phone').hide();
            break;
        default:
    }

	//arrow display
	$('.slick-arrow').show();
    
    if (currentSlide === 0 ) {
     $('.slick-prev.slick-arrow').hide();
     $('.slick-next.slick-arrow').hide();
     if($('body').width() < 1025){
        $('.footer-phone').hide();   
     }     
    }else{
     if($('body').width() < 1025){
        $('.footer-phone').show();
     }                
    };      

    if (currentSlide === lastSlide ) { $('.slick-next.slick-arrow').hide(); }  
     
    //display footer text & visibility

    var footerText = [
    	// [ [0,1,2] , ""],
    	// [ [3] , "<p class='pgraph--7'><sup class='sup--2'>1</sup>Accenture, “Technology Vision 2017.”</p>"],
     //    [ [4] , "<p class='pgraph--7 pgraph--7-1'><sup class='sup--2'>1</sup> Jeff Schwartz et al., “The future of work: The augmented workforce” (Deloitte University Press, 2017).”</p>"],
     //    [ [,5,6,7,8,9,10,11,12,13,14,15] , ""],
    ];


    var footer = $('.footer');
    var slideNum=('0' + currentSlide).slice(-2);
    var pageNum =(slideNum/1)+1;
    $('#footNum').text(pageNum);


if(context=='large'){
        $.each(footerText, function( i, arr2 ){
            $.each( arr2[0], function( i, v ){
                if(currentSlide == v ) {
                    $('.footer-chap-title').html(arr2[1]);
                }
            });
        });
    }

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

