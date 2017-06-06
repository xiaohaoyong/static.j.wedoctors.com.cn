var login_reg = {
    init :function () {
        this.passShow();//密码可见
        this.formReg();
    },
    formReg : function(){//注册验证
        var This = this;
        var cardTimer = null;
        var sendCard = false;
        var checksendCode = null;//是否已经发送过短信验证码
        var is_push=true;

        var sendMessage = function (phone,imageCode){
            console.log(phone);
            var i=60;
            $.post('send-code',{'phone':phone},function(flag){
                if(flag){
                    if(flag.status == 1){
                        checksendCode = 1;
                        cardTimer=setInterval(function(){
                            sendCard=true
                            $('.js-reg-send').html(buZe(i) + 's');
                            $('.js-reg-send').addClass('GetCode_no');
                            i--;
                            if(i==0){
                                clearInterval(cardTimer);
                                $('.js-reg-send').removeClass('GetCode_no');
                                $('.js-reg-send').html('重新发送');
                                sendCard=false;
                            }
                        },1000);
                    }else if(flag.status == 0 || flag.status == -1){
                        tipsShow(flag.msg);
                        clearInterval(cardTimer);
                        $('.js-reg-send').removeClass('GetCode_no');
                        sendCard=false;
                        //if(flag.status == -1){//更新验证码
                        checksendCode = null;
                        // $('#ImgCode').click();
                        // $('.Img-Code').val('');
                        // }
                    }
                }
            }, "json");
        }
        //点击按钮发送验证码
        $('.js-reg-send').click(function(){
            if($(this).hasClass('GetCode_no')){return;}
            var tel = $.trim($('.userName').val());
            $.post('validate-phone',{'phone':tel},function(result){
                if(result.length == 0) {
                    sendMessage(tel);//发送验证码
                }else {
                    $.each(result, function () {
                        This.tipsShow(this[0]);
                    });
                }
            }, "json");
        })
        // $("#ImgCode").click(function(){
        //     $('.Img-Code').val('');
        //     changeCaptcha(1);
        // });
        // function changeCaptcha(operate){
        //     $.ajax({
        //         url: "/index.php?r=captcha/captcha&refresh",
        //         dataType: 'json',
        //         cache: false,
        //         success: function(data) {
        //             if(operate){
        //                 $('#ImgCode').attr('src', data['url']);
        //             }

        //         }
        //     });
        // }
        //补零
        function buZe(num){
            if(num>0 && num<=9){
                return '0'+num;
            }
            return num;
        }
    },
    passShow : function(){//密码可见
        $('.js-pass-display').on('click', function(event) {
            event.preventDefault();
            if($(this).hasClass('on')){
                $(this).removeClass('on');
                $(this).prev('input').attr('type','password');
            }else{
                $(this).addClass('on');
                $(this).prev('input').attr('type','text');
            }
        });
    },
    tipsShow : function(str){//提示框
        $('.user-bubble').html(str).show().fadeOut(3000);
    }
}
login_reg.init();