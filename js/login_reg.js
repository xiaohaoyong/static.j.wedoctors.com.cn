var login_reg = {
    init :function () {
        this.formLogin();//登录验证
        this.formReg();//注册验证
        this.passShow();//密码可见
    },
    formLogin : function(){//登录验证
        var This = this;
        $('.js-login-btn').click(function(event) {
            var name = $.trim($('.userName').val()),
               pass = $.trim($('.userPass').val());
            var regTel = /^1[3|4|5|6|7|8|][0-9]{9,9}$/;
            if(name == ''){
                This.tipsShow('请输入手机号码');
                return;
            }
            if(!regTel.test(name)){
                This.tipsShow('手机号码格式错误');
                return;
            }
            if(pass == ''){
                This.tipsShow('请输入登录密码');
                return;
            }
            $('#js-reg-form').submit();
        });        
    },
    formReg : function(){//注册验证
        var This = this;
        $('.js-reg-btn').click(function(event) {
            var name = $.trim($('.userName').val()),
               pass = $.trim($('.userPass').val()),
               Code = $.trim($('.userCode').val());
            var regTel = /^1[3|4|5|6|7|8|][0-9]{9,9}$/;
            if(name == ''){
                This.tipsShow('请输入手机号码');
                return;
            }
            if(!regTel.test(name)){
                This.tipsShow('手机号码格式错误');
                return;
            }
            if(pass == ''){
                This.tipsShow('请输入登录密码');
                return;
            }
            if(Code == ''){
                This.tipsShow('请输入短信验证码');
                return;
            }
            $('#js-reg-form').submit();
        });


        var cardTimer = null; 
        var sendCard = false; 
        var checksendCode = null;//是否已经发送过短信验证码 
        var sendMessage = function (phone,imageCode){
            var i = 60;
            $.ajax({
                type: "get",
                url: "/index.php?r=login/telcode",
                data: {tel:phone},
                dataType:'json',
                success: function(flag){
                    if(flag){
                        if(flag.status == 1){
                            checksendCode = 1;
                            cardTimer=setInterval(function(){
                                sendCard=true
                                $('.js-reg-send').val(buZe(i) + 's');
                                $('.js-reg-send').addClass('GetCode_no');
                                i--;
                                if(i==0){
                                    clearInterval(cardTimer);
                                    $('.js-reg-send').removeClass('GetCode_no');
                                    $('.js-reg-send').val('重新发送');
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
                }
            });
        }
        //点击按钮发送验证码            
        $('.js-reg-send').click(function(){
            if($(this).hasClass('GetCode_no')){return;}
            var regTel=/^1[3|4|5|6|7|8|][0-9]{9,9}$/; 
            var tel = $.trim($('.userName').val()),
                // imageCode = $.trim($('.Img-Code').val()),
                code = $.trim($('.code').val());
            if(tel.length == 0){
                This.tipsShow('请填写手机号码');
                return
            }else if(!regTel.test(tel)){
                This.tipsShow('手机号格式错误');
                return
            }
            // if(!$.trim(imageCode).length == 0){
            //     This.tipsShow('请输入图形验证码');
            //     return ;
            // }
            // if(checksendCode){
            //     checksendCode = null;
            //     // $('#ImgCode').click();
            //     // $('.Img-Code').val('');
            //     // This.tipsShow('图形验证码已失效，请重新输入');
            //     return  ;
            // }
            sendMessage(tel);//发送验证码
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