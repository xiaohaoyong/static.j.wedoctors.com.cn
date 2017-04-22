$(function(){
    $('.js-about-top').animate({'opacity' : 1}, 300).data('animate', 1);
    $('.js-app-moblie').animate({'margin-left':'76px','opacity' : 1},400).data('animate', 1);
    setTimeout(function(){
        $('.js-app-downBox').animate({'margin-left' : '183px','opacity' : 1}, 300)
    },300)
    if($('.scroll-list1').length){
        $('.scroll-list1').loopScroll({
            prevButton: '.leftbutton1',
            nextButton: '.rightbutton1',
            auto: true
        });
        $('.js-picBox li').hover(function() {
            $(this).find('.printTxt').animate({'top':'370px','bottom':'0'}, 1000)
        }, function() {
            $(this).find('.printTxt').animate({'top':'433px','bottom':'0'}, 1000)
        });
    }
    var mapNum = 20;
    for(var i=0;i<=26;i++){
        $('.js_map_box').append('<i class="mpa_small_round"></i>');
    }
    
    
    $('#1F').click(function(){
        $('html,body').animate({scrollTop:$('.index_mb002').offset().top},1000)
    })
    $('#2F').click(function(){
        $('html,body').animate({scrollTop:$('.index_mb03').offset().top},1000)
    })
    $('#3F').click(function(){
        $('html,body').animate({scrollTop:$('.index_mb04').offset().top},1000)
    })
    //案例
    $('.js-open-case li').hover(function() {
        $(this).css({'opacity' : 1});
        $(this).siblings().css({'opacity' : 0.3});
    });
    var Timer=setInterval(function(){
        var Togo=parseInt($('.map_cord').css('top'));
        if(parseInt($('.map_cord').css('top'))>153){$('.map_cord').animate({top:Togo-5},500);}else{$('.map_cord').animate({top:Togo+5},300);}
    },500);

    var round = function(){
        setInterval(function () {
            $('.map_dot .dot').not('.one').remove();
            setTimeout(function () {
                $('.map_dot').append('<div class="dot one" style="top:50%;left:50%;"></div>')
            }, 800);
            setTimeout(function () {
                $('.map_dot').append('<div class="dot" style="top:50%;left:50%;"></div>')
            }, 1000);
            setTimeout(function () {
                $('.map_dot').append('<div class="dot" style="top:50%;left:50%;"></div>')
            }, 0);
            // setTimeout(function () {
                
            // }, 1800);
        }, 2000);
    }

    
    
    var SetScroll = function(){
        var windowScrollTop = $(window).scrollTop(),
            screenHeight = $(window).height();

        if(windowScrollTop > 0){
            $(".js-header").addClass('header_fixed');
        }else{
            $(".js-header").removeClass('header_fixed');                
        }
        if($('.mob_01').length){
            //首页
            if (windowScrollTop > ($('.js-animate-case').offset().top - screenHeight )) {
                $('.js-animate-case').animate({'opacity' : 1}, 1000).show().data('animate', 1);;
            }
            //index 
            if (windowScrollTop > ($('.index_mb02').offset().top - screenHeight + 150 ) && $('.js-infor').data('animate') == "0") {
                $('.js-infor .infor_icon1').animate({'margin-top' : '90px','opacity' : 1}, 500).show().data('animate', 1);
                setTimeout(function() {
                    $('.js-infor .infor_icon2').animate({'margin-top' : '90px','opacity' : 1}, 500).show().data('animate', 1);
                },400);
                setTimeout(function() {
                    $('.js-infor .infor_icon3').animate({'margin-top' : '90px','opacity' : 1}, 500).show().data('animate', 1);
                },800);
                setTimeout(function() {
                    $('.js-infor .infor_icon4').animate({'margin-top' : '90px','opacity' : 1}, 500).show().data('animate', 1);
                },1200);
            }
            if (windowScrollTop > ($('.index_mb002').offset().top - screenHeight + 200 ) && $('.js-map-left').data('animate') == "0") {
                $('.js-map-left').animate({'opacity' : 1}, 500).show().data('animate', 1);
                setTimeout(function() {
                     $('.map_cord').animate({'opacity' : 1}, 500).show();
                },500);
                setTimeout(function() {
                    $('.mpa_small_round').animate({'opacity' : 1}, 500).show();
                     $('.map_line').animate({'opacity' : 1}, 500).show();
                     round();
                },500);
                $('.js-map-right').animate({'opacity' : 1,"margin-left" : "167px"}, 1000).show();
            }
            if (windowScrollTop > ($('.index_mb03').offset().top - screenHeight + 150 ) && $('.js-book-left').data('animate') == "0") {
                $('.js-book-right').animate({'opacity' : 1,"margin-right" : "0px"}, 1000).show().data('animate', 1);
                $('.js-book-left').animate({'opacity' : 1,"margin-left" : "30px"}, 1000).show();
            }
            //云
            if (windowScrollTop > ($('.index_mb04').offset().top - screenHeight + 150 ) && $('.js-cloud').data('animate') == "0") {
                $('.js-cloud').addClass('bounce animated').data('animate', 1);
                setTimeout(function(){
                    $('.js-cloud-down .mob_anIcon1').animate({'opacity' : 1}, 600).show().data('animate', 1);
                    setTimeout(function() {
                        $('.js-cloud-down .mob_anIcon2').animate({'opacity' : 1}, 600).show().data('animate', 1);
                    },500);
                    setTimeout(function() {
                        $('.js-cloud-down .mob_anIcon3').animate({'opacity' : 1}, 600).show().data('animate', 1);
                    },900);
                    setTimeout(function() {
                        $('.js-cloud-down .mob_anIcon4').animate({'opacity' : 1}, 600).show().data('animate', 1);
                    },1300);
                },100)
            }
        }
        //open
        if($('.headerTop_open').length){
            if (windowScrollTop > ($('.about_open').offset().top - screenHeight + 150 ) && $('.js-openList').data('animate') == "0") {
                $('.js-openList .openList_01').animate({'margin-top' : '73px','opacity' : 1}, 500).show().data('animate', 1);
                setTimeout(function() {
                    $('.js-openList .openList_02').animate({'margin-top' : '73px','opacity' : 1}, 500).show().data('animate', 1);
                },400);
                setTimeout(function() {
                    $('.js-openList .openList_03').animate({'margin-top' : '73px','opacity' : 1}, 500).show().data('animate', 1);
                },800);
                setTimeout(function() {
                    $('.js-openList .openList_04').animate({'margin-top' : '73px','opacity' : 1}, 500).show().data('animate', 1);
                },1200);
                setTimeout(function() {
                    $('.js-openList .openList_05').animate({'margin-top' : '73px','opacity' : 1}, 500).show().data('animate', 1);
                },1600);
            }
              
            if (windowScrollTop > ($('.about_case').offset().top - screenHeight + 250 ) && $('.js-open-case').data('animate') == "0") {
                $('.js-open-case li.fl').animate({'padding-top' : '35px','opacity' : 1}, 500).show().data('animate', 1);
                
                $('.js-open-case').data('animate',1)
                setTimeout(function() {
                    $('.js-open-case li.fr').animate({'padding-top' : '35px'}, 500).show();
                },500);
                
            }
            
        }
        if($('.headerTop_about').length){
            if (windowScrollTop > ($('.about_news').offset().top - screenHeight + 250 ) && $('.js-about-list').data('animate') == "0") {
                $('.js-about-list .about_news01').animate({'margin-top' : '44px','opacity' : 1}, 500).show().data('animate', 1);
                setTimeout(function() {
                    $('.js-about-list .about_news02').animate({'margin-top' : '44px','opacity' : 1}, 500).show().data('animate', 1);
                },400);
                setTimeout(function() {
                    $('.js-about-list .about_news03').animate({'margin-top' : '44px','opacity' : 1}, 500).show().data('animate', 1);
                },800);
            }
        }
        if($('.app_mob01').length){
            if (windowScrollTop > ($('.app_mob01').offset().top - screenHeight + 200 ) && $('.js-app-list').data('animate') == "0") {
                $('.js-app-list .app-list01').animate({'margin-top' : '125px','opacity' : 1}, 500).show().data('animate', 1);
                setTimeout(function() {
                    $('.js-app-list .app-list02').animate({'margin-top' : '125px','opacity' : 1}, 500).show().data('animate', 1);
                },400);
                setTimeout(function() {
                    $('.js-app-list .app-list03').animate({'margin-top' : '125px','opacity' : 1}, 500).show().data('animate', 1);
                },800);
                setTimeout(function() {
                    $('.js-app-list .app-list04').animate({'margin-top' : '125px','opacity' : 1}, 500).show().data('animate', 1);
                },1200);
            }
        }
        if($('.js-app-mob').length >= 1){
            if (windowScrollTop > ($('.app_mob02').offset().top - screenHeight + 400 ) && $('.app_mob02').data('animate') == "0") {
                $('.app_mob02_left').animate({'opacity' : 1,'left':'137px'}, 500).show().data('animate', 1);
            }
            if (windowScrollTop > ($('.app_mob02').offset().top - screenHeight + 500 ) && $('.app_mob02').data('animate') == "0") {
                setTimeout(function() {
                    $('.app_mob02_right').animate({'opacity' : 1}, 500).show().data('animate', 1);
                },400);
                setTimeout(function() {
                    $('.app_mob02_txt').animate({'opacity' : 1,'top':'300px'}, 500).show().data('animate', 1);
                },400);
                
            }
            if (windowScrollTop > ($('.app_mob03').offset().top - screenHeight + 350 ) && $('.app_mob03').data('animate') == "0") {
                $('.app_mob03_right').animate({'opacity' : 1}, 500).show().data('animate', 1);
                setTimeout(function() {
                $('.app_mob03_left').animate({'opacity' : 1}, 500).show().data('animate', 1);
                },400);
            }
            if (windowScrollTop > ($('.app_mob03').offset().top - screenHeight + 450 ) && $('.app_mob03').data('animate') == "0") {
                setTimeout(function() {
                $('.app_mob03_txt').animate({'opacity' : 1,'bottom':'300px'}, 500).show().data('animate', 1);
                },400);
            }
            if (windowScrollTop > ($('.app_mob04').offset().top - screenHeight + 400 ) && $('.app_mob04').data('animate') == "0") {
                $('.app_mob04_left').animate({'opacity' : 1}, 500).show();
                $('.app_mob04_txt').animate({'opacity' : 1,'left':'811px'}, 500).show();
                
            }
        }
        
        
        
    };
    SetScroll();
    $(window).scroll(function(event) {
        var scrolltop = $(window).scrollTop();
        if(scrolltop > 0){
            $(".js-header").addClass('header_fixed');
        }else{
            $(".js-header").removeClass('header_fixed');                
        }
        SetScroll();
    });
})