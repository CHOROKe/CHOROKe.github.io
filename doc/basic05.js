$(function(){
//----------------------------------------------------------------
//$('#top_banner i').on('click', topBannerClose);
//function topBannerClose(){
//    $('#top_banner').hide();
//};

$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp();
//    $('#top_banner').hide();
})
//----------------------------------------------------------------

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    pauseOnFocuse:false
});











});