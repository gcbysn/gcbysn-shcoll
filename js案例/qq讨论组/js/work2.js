$(function () {
    var flag=0;
    var i=1;
    $('.h4').click(function () {
        if (flag==0){
            $('.item').removeClass('list');
            flag=1;
        }else{
            $('.item').addClass('list');
            flag=0;
        }
    })
    $('.item .li').click(function () {
        if (flag==0){
            $(this).css('background','#F5FBEC');
            $(this).removeClass("list");
            $('.ul').eq($(this).index()).removeClass('list');
            flag=1
        }else{
            $(this).css('backgroundColor','#FFFFFF');
            $('.ul').eq($(this).index()).addClass('list');
            flag=0
        }
    })
    $('.ul li').each(function (index,item) {
        $(item).attr('rels',index);
    })
    $('.ul li').attr('rel',1);

    $('.ul li').click(function (event) {
        var event=event||window.event;
        event.stopPropagation();
        if ($(this).attr('rel')!=0){
            var lis=$('<li></li>')
            $(lis).html($(this).html());
            $('.people').append(lis)
            $(this).attr('rel',0);
            $(lis).attr('rels',$(this).attr('rels'))
        }
        $('.people li').click(function () {
            if ($(this).attr('rels')==$('.ul li').index()){
                $(this).remove();
                var a= $(this).attr('rels');
            }
            $('.ul li').attr('rels')==a;
        })
    })
})
