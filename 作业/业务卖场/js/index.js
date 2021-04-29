$(function () {
    var flag=0;
    $('.nr_bottom').click(function () {
        $('.mb').addClass('active');
        $('.tc').eq(0).addClass('active');
    })
    $('.gb').click(function () {
        $('.mb').removeClass('active');
        $('.tc').eq(0).removeClass('active');
        $('.tc1').removeClass('active');
        $('.tc3').removeClass('active');
    })
    $('.xianJ_1').click(function () {
        $('.mb').addClass('active');
        $('.tc1').addClass('active');
    })
    $('.tc1 .bottom').click(function () {
        $('.tc1').removeClass('active');
        $('.tc3').addClass('active');
    })
    $('.gou').click(function () {
        if (flag!=1){
            $('.gou').attr("src","./image/meigou.png");
            $('.tc1 .bottom').css("backgroundImage" ,'url("./image/an2.png")');
            $('.tc1 .bottom').unbind('click');
            flag=1
        }else{
            $('.gou').attr("src","./image/gou.png");
            $('.tc1 .bottom').css("backgroundImage" ,'url("./image/an1.png")');
            // $('.tc1 .bottom').unbind('click');
            $('.tc1 .bottom').bind('click',function () {
                $('.tc1').removeClass('active');
                $('.tc3').addClass('active');
            });
            flag=0
        }
    })
    $('.tibu').click(function (e) {
        console.log(1)
        $("body,html").animate({ scrollTop: 0 }, "fast");
    })

})
