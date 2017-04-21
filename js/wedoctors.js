$(function(){
    $('.js-about-top').animate({'opacity' : 1}, 300).data('animate', 1);
    $('.js-app-moblie').animate({'opacity' : 1}, 600).data('animate', 1);
    $('.js-app-downBox').animate({'margin-left' : '259px','opacity' : 1}, 500).data('animate', 1);
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
                $('.js-map-left').animate({'opacity' : 1}, 1000).show().data('animate', 1);
                $('.js-map-right').animate({'opacity' : 1,"margin-left" : "227px"}, 1000).show();
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
              
            if (windowScrollTop > ($('.about_case').offset().top - screenHeight + 250 )) {
                setTimeout(function() {
                    $('.js-open-case li.fl').animate({'padding-top' : '35px','opacity' : 1}, 500).show().data('animate', 1);
                },400);
                setTimeout(function() {
                    $('.js-open-case li.fr').animate({'padding-top' : '35px','opacity' : 0.3}, 500).show().data('animate', 1);
                },600);
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
                $('.js-app-list .app-list01').animate({'margin-top' : '128px','opacity' : 1}, 500).show().data('animate', 1);
                setTimeout(function() {
                    $('.js-app-list .app-list02').animate({'margin-top' : '128px','opacity' : 1}, 500).show().data('animate', 1);
                },400);
                setTimeout(function() {
                    $('.js-app-list .app-list03').animate({'margin-top' : '128px','opacity' : 1}, 500).show().data('animate', 1);
                },800);
                setTimeout(function() {
                    $('.js-app-list .app-list04').animate({'margin-top' : '128px','opacity' : 1}, 500).show().data('animate', 1);
                },1200);
            }
        }
        if($('.js-app-mob').length >= 1){
            if (windowScrollTop > ($('.app_mob02').offset().top - screenHeight + 200 ) && $('.app_mob02').data('animate') == "0") {
                setTimeout(function() {
                    $('.app_mob02').animate({'opacity' : 1}, 500).show().data('animate', 1);
                },400);
            }
            if (windowScrollTop > ($('.app_mob03').offset().top - screenHeight + 200 ) && $('.app_mob03').data('animate') == "0") {
                setTimeout(function() {
                    $('.app_mob03').animate({'opacity' : 1}, 500).show().data('animate', 1);
                },400);
            }
            if (windowScrollTop > ($('.app_mob04').offset().top - screenHeight + 150 ) && $('.app_mob04').data('animate') == "0") {
                setTimeout(function() {
                    $('.app_mob04').animate({'opacity' : 1}, 500).show().data('animate', 1);
                },400);
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