$(function(){
    //-------------헤더--------
    $('#header').on('click', function(){
        $('html, body').animate({scrollTop:0},600)
    });
        
    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        if($(window).width()>768){
            if(sct>300) {
                $('#header').fadeIn()
            }else{
                $('#header').fadeOut()
            }  
        }
  
    });

    //------------반응형 내비-------
    $('#m_menu').on('click', function(){
        $(this).toggleClass('on');
        $('.container').toggleClass('on');
    });

    // $('nav>ul>li>a').on('click',function(){
    //     if($('#header nav').hasClass('on')){
    //         $(this).next().slideToggle();
    //         $(this).parent().siblings().find('ul').slideUp();
    //     }

    // });

    // $(window).on('resize', function(){
    //     if($(window).width() > 768) {
    //         $('nav').removeClass('on');
    //         $('nav>ul>li').removeAttr('style'); 
    //     } 
    // });



    //-------------메인 비쥬얼 동영상--------
    $("#m01").YTPlayer({
        videoURL:'https://youtu.be/tjZODH4YutM', 
        containment:'#main_visual', 
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,   
    });

    //-------------섹션01--------
    $('.paper').slick({
        arrows:false,
        fade:true,                
        autoplay:true,
        asNavFor: '.pick',
        
    });
    $('.pick').slick({
        arrows:false,
        vertical:true,
        autoplay:true,
        asNavFor: '.paper',
    });
    
    //-------------섹션02--------
    $('.sell').slick({
        slidesToShow: 5,
        arrows:false,
        autoplay:true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1, 
                autoplay:false,              
              }
            },
    
         ]    
        

    });
    //-------------섹션04--------
    $('#mv02').YTPlayer({
        videoURL:'https://youtu.be/WaCZO_ZbOzc',
        containment:'self',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true,
        useOnMobile:true,

        // optimizeDisplay:false,

    });

    //--------반응형에서만 슬릭돌리기------
	var Rsd = $('#section03 .container');

	var slickOptions = {
		infinite: true,
		slidesToShow: 1,
		autoplay:true,
		autoplaySpeed:3000,
		centerMode:false,
		dots:true,
		arrows:false,
	};



	$(window).on('load resize', function() {
		if($(window).width() > 768) {
			Rsd.slick('unslick');
		}else{
			Rsd.not('.slick-initialized').slick(slickOptions);
		}
	});

    //------------섹션02 반응형에서만 화살표---------
    $('#section02 .icon02 i.xi-angle-left-thin').on('click', function(){
        $('.sell').slick('slickPrev');
    });
    $('#section02 .icon02 i.xi-angle-right-thin').on('click', function(){
        $('.sell').slick('slickNext'); 
    });


}); 