$(function(){
    var Top = $('.Infor_line').offset().top + $('.Infor_line').height();
    $(window).scroll(function(event) {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > Top){
            $('#DownApp').removeClass('none');
        }else{
            $('#DownApp').addClass('none');
        }
    });

    //点击喜欢 取消喜欢
    $('.js-love-btn a').click(function(event) {
        var dataId = $(this).attr('data-id');
        var dataNum = parseInt($(this).children('span').html());
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on');//取消喜欢
            $(this).children('span').html(dataNum-1);
        }else{
            $(this).parent().addClass('on');//喜欢
            $(this).children('span').html(dataNum+1);
        }
    });
    //关注 已关注
    $('.js-favor-btn').click(function(event) {
        var dataId = $(this).attr('data-id');
        if($(this).hasClass('on')){
            $('.favor_Btn').removeClass('on').html('+ 关注');//取消关注
        }else{
            $('.favor_Btn').addClass('on').html('已关注');
        }
    });
})