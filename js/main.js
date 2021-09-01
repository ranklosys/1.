$(document).ready(function(){
    //bxslider
    $(function(){
        $('.bxslider').bxSlider({
            auto:true,
            autoDelay:4000,
        });
    });

    $(function(){
        $('.visual-bxslider').bxSlider({
            mode:'fade',
            auto:true,
            autoDelay:4000,
        });
    });  
    //tab menu
    $('.t1').click(function(e){
        e.preventDefault();
        $('.photo').hide();
        $('.photo1').fadeIn();
    });
    $('.t2').click(function(e){
        e.preventDefault();
        $('.photo').hide();
        $('.photo2').fadeIn();
    });
    $('.t3').click(function(e){
        e.preventDefault();
        $('.photo').hide();
        $('.photo3').fadeIn();
    });
    $('.t4').click(function(e){
        e.preventDefault();
        $('.photo').hide();
        $('.photo4').fadeIn();
    });

    //background move
    $(window).scroll(function(){
        var y=$(window).scrollTop();

        //$(this).offset().top : newsletter영역의 상단위치값
        //$(window).height() : 브라우저의 높이값
        //$(this).height() : newsletter의 높이값
        //parseInt() : 실수를 정수로 변환하는 메서드
        $('.newsletter').filter(function(){
            return $(this).offset().top < ( y+$(window).height()) && $(this).offset().top + $(this).height() > y;
        }).css('background-position','0px '+parseInt(-y/5.8-155)+'px');
    });


    //top
    $('.top').click(function(){
        $('html,body').animate({scrollTop:0});
    });
});