$(function(){

$('#tabcontent li').on('click', function(){
    //$(this) 이벤트가 적용되는 대상 이것..
    //$(this).index() 이베느가 적용되는 대상 이것의 index 번호 0,1,2~
    //console.log() ()안의 값을 개발자도구 콘솔창에 나타내라. 라는 뜻.
    //변수 값을 넣어 놓는 저장소 메모리 var 이름 = 값; let const
    //함수 이떤 일을 저장해 놓는 저장소 function
    var idx=$(this).index();
    //console.log(idx);
    $(this).addClass('oo').siblings().removeClass('oo');
    $('#tabcontent .tab>div').eq(idx).addClass('oo').siblings().removeClass('oo');


});


});