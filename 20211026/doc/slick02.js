$(function(){
//-----------------------

//메인슬라이드
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,

});

//제품슬라이드
$('.pr_slider').slick({
    /*arrow:false가 자동으로 생성된 버튼 없애는거*/
    arrows:false,
    autoplay:true,
    slidesToShow: 3,
    dots:true,
});



//-------------------------------------
})