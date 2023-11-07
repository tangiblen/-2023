
// 会员卡鼠标缩放
$(document).ready(function(){
   $('.vipimgdiv').hover(function(){ 
    $(this).children('.vipimg').addClass('scaleimg');
    $(this).siblings().children('.vipimg').removeClass('scaleimg');
    },function(){
        $(this).removeClass('scaleimg');
    })

    // 切换会员专属权益
    $('.vipimgtwo').hover(function(){
        $(this).addClass('scaleimg');
        $('.v1part').css('display','block');
        $('.hrpart').css('display','none');
        $('.v2part').css('display','none');
        })

    $('.vipimgthree').hover(function(){
        $(this).addClass('scaleimg');
        $('.v2part').css('display','block');
        $('.hrpart').css('display','none');
        $('.v1part').css('display','none');
        })
    
    $('.vipimgone').hover(function(){
        $('.v2part').css('display','none');
        $('.hrpart').css('display','block');
        $('.v1part').css('display','none');
        })

        //  切换应用场景
    $('.appli2').click(function(){
        $('.appli1').css('background-image','url(./images/应用场景按钮-05.png)');
        $('.appli2').css('background-image','url(./images/应用场景按钮-02.png)');
        $('.appli3').css('background-image','url(./images/应用场景按钮-07.png)');
        $('.appli4').css('background-image','url(./images/应用场景按钮-08.png)');
        $('.appli1_content').css('display','none');
        $('.appli2_content').css('display','block');
        $('.appli3_content').css('display','none');
        $('.appli4_content').css('display','none');
    })
    $('.appli3').click(function(){
        $('.appli1').css('background-image','url(./images/应用场景按钮-05.png)');
        $('.appli2').css('background-image','url(./images/应用场景按钮-06.png)');
        $('.appli3').css('background-image','url(./images/应用场景按钮-03.png)');
        $('.appli4').css('background-image','url(./images/应用场景按钮-08.png)');
        $('.appli1_content').css('display','none');
        $('.appli2_content').css('display','none');
        $('.appli3_content').css('display','block');
        $('.appli4_content').css('display','none');
    })
    $('.appli4').click(function(){
        $('.appli1').css('background-image','url(./images/应用场景按钮-05.png)');
        $('.appli2').css('background-image','url(./images/应用场景按钮-06.png)');
        $('.appli3').css('background-image','url(./images/应用场景按钮-07.png)');
        $('.appli4').css('background-image','url(./images/应用场景按钮-04.png)');
        $('.appli1_content').css('display','none');
        $('.appli2_content').css('display','none');
        $('.appli3_content').css('display','none');
        $('.appli4_content').css('display','block');
    })
    $('.appli1').click(function(){
        $('.appli1').css('background-image','url(./images/应用场景按钮-01.png)');
        $('.appli2').css('background-image','url(./images/应用场景按钮-06.png)');
        $('.appli3').css('background-image','url(./images/应用场景按钮-07.png)');
        $('.appli4').css('background-image','url(./images/应用场景按钮-08.png)');
        $('.appli1_content').css('display','block');
        $('.appli2_content').css('display','none');
        $('.appli3_content').css('display','none');
        $('.appli4_content').css('display','none');
    })

    // 切换应用场景里的内容
    $('.step').hover(function(){
        $(this).addClass('on');
        $(this).children('.step_bottom').css('display','flex');
        $(this).children().children('.tab_ititle').css('display','block');
        $(this).siblings().children().children('.tab_ititle').css('display','none');
        $(this).siblings().removeClass('on');
        $(this).siblings().children('.step_bottom').css('display','none');
        $(this).find('.step_top').find('.fa').children().addClass('svgon');
        $(this).siblings().find('.step_top').find('.fa').children().removeClass('svgon');
        $(this).find('.step_top').find('.fa').find('svg path').attr('fill','#c7c8c9');
        $(this).siblings().find('.step_top').find('.fa').find('svg path').attr('fill','#FF921D');
        })

        // 点击详情咨询弹出二维码
        $('.clickererima').click(function(){   
                $('.popup').show();
        })

        $('.popup').click(function(){
                $('.popup').hide();
        })

        // $(window).scroll(function(){
        //     $('.erweima').css('display','none');
        // })

        var winWidth = window.screen.width;
        if (winWidth <= 600){
            $('.step').hover(function(){
                $(this).children('.step_bottom').css('display','block');
                })
                $('.appli2').click(function(){
                    $('.appli1').css('background-image','url(./images/mobile/应用场景按钮-05.png)');
                    $('.appli2').css('background-image','url(./images/mobile/应用场景按钮-02.png)');
                    $('.appli3').css('background-image','url(./images/mobile/应用场景按钮-07.png)');
                    $('.appli4').css('background-image','url(./images/mobile/应用场景按钮-08.png)');
                })
                $('.appli3').click(function(){
                    $('.appli1').css('background-image','url(./images/mobile/应用场景按钮-05.png)');
                    $('.appli2').css('background-image','url(./images/mobile/应用场景按钮-06.png)');
                    $('.appli3').css('background-image','url(./images/mobile/应用场景按钮-03.png)');
                    $('.appli4').css('background-image','url(./images/mobile/应用场景按钮-08.png)');
                })
                $('.appli4').click(function(){
                    $('.appli1').css('background-image','url(./images/mobile/应用场景按钮-05.png)');
                    $('.appli2').css('background-image','url(./images/mobile/应用场景按钮-06.png)');
                    $('.appli3').css('background-image','url(./images/mobile/应用场景按钮-07.png)');
                    $('.appli4').css('background-image','url(./images/mobile/应用场景按钮-04.png)');
                })
                $('.appli1').click(function(){
                    $('.appli1').css('background-image','url(./images/mobile/应用场景按钮-01.png)');
                    $('.appli2').css('background-image','url(./images/mobile/应用场景按钮-06.png)');
                    $('.appli3').css('background-image','url(./images/mobile/应用场景按钮-07.png)');
                    $('.appli4').css('background-image','url(./images/mobile/应用场景按钮-08.png)');
                })  

                $('.vipimgdiv').hover(function(){
                    $(this).children('.vipimg').removeClass('scaleimg');
                    $(this).siblings().children('.vipimg').removeClass('scaleimg');
                })      

                $('.vipimgone').addClass('minscaleimg');
        }
  });
  