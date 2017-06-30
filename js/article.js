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
        var userid = getCookie('Yimai-Request');
        if($(this).hasClass('on')){
            $.post('http://api.app.wedoctors.com.cn/1.5/index.interface.php?a=friends&m=delfollow', { touserid: dataId,'Yimai-Request':userid},function(e){
                if(e.code==10000)
                {
                    $('.favor_Btn').removeClass('on').html('+ 关注');//取消关注
                }else{
                    alert(e.msg);
                }
            },'json');
        }else{
            $.post('http://api.app.wedoctors.com.cn/1.5/index.interface.php?a=friends&m=addfollow', { touserid: dataId,'Yimai-Request':userid},function(e){
                if(e.code==10000)
                {
                    $('.favor_Btn').addClass('on').html('已关注');
                }else{
                    alert(e.msg);
                }
            },'json');
        }
    });
    $('.article_praise').click(function(event) {
        var dataId = $(this).attr('data-id');
        var userid = getCookie('Yimai-Request');
        var article_praise = $(this);
        var num = $(this).html()
        if($(this).hasClass('over')){
            alert("您已经点赞！");
        }else{
            $.post('http://api.app.wedoctors.com.cn/1.5/zixun/index.interface.php?a=actionAdd&c=praise', { type:2,id:dataId,'Yimai-Request':userid},function(e){
                if(e.code===0)
                {
                    num = parseInt(num)+1;
                    article_praise.addClass('over');
                    article_praise.html(num);
                }else{
                    alert(e.msg);
                }
            },'json');

        }
    });
})

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}
setupWebViewJavascriptBridge(function(bridge) {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    $(window).scroll(function(event) {
        var ha= 62;
        var h = $('.Infor_Th').height();
        var scrollTop = $(window).scrollTop();
        if(scrollTop > h){
            //触发
            var a=(parseInt(scrollTop)-parseInt(h))/parseInt(ha);
            if(a>1){
                a=1;
            }
            if(isiOS) {
                bridge.callHandler('showMediaView', {'d':a.toFixed(2)}, function(response) {

                })
            }else{
                var result = android.showMediaView({'d': a.toFixed(2)});
            }
        }else{
            var b=parseInt(scrollTop)-parseInt(h);
            if(b>0) {
                var a = b / parseInt(ha);
            }else{
                var a=0;
            }
            if(isiOS) {
                bridge.callHandler('dismissMediaView', {'d': a.toFixed(2)}, function (response) {

                });
            }else{
                var result = android.dismissMediaView({'d': a.toFixed(2)});
            }
        }
    });
})