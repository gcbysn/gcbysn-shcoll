$(function () {
    $("p:first").hover(function () {
        $(this).css("color","#f00")
    },function () {
        $(this).css("color","#0f0")
    })


    //给每一个大标题添加悬停事件,展开和隐藏子标题
    var index=0
    for (var i = 0; i <4 ; i++) {
        sessionStorage.setItem($("div.div:eq("+i+")").html(),i)
        $("div.div:eq("+i+")").hover(function () {
            index=sessionStorage.getItem($(this).html())
            if ($("div.div_child:eq("+index+")").css("display")=="none"){
                $("div.div_child:eq("+index+")").css("display","block")
            }
        },function () {
           // $(this).css("color","#0f0")
            if ($("div.div_child:eq("+index+")").css("display")=="block"){
                $("div.div_child:eq("+index+")").css("display","none")
            }
        })
    }
    //连续点击事件
    var x=0
    $("div:last").click(function () {
        if (x==0) {
            $(this).css("background-color","#f00")
            x=1
        }else if (x==1) {
            $(this).css("background-color","#0f0")
            x=2
        }else if (x==2) {
            $(this).css("background-color","#00f")
            x=0
        }
    })
    //图片隐藏
    $("input:eq(0)").click(function () {
        $("images").hide(3000)
    })
    //图片显示
    $("input:eq(1)").click(function () {
        $("images").show(3000)
    })
    //自动
    $("input:eq(2)").click(function () {
        $("images").toggle(3000)
    })
    //淡出
    $("input:eq(3)").click(function () {
        $("images").fadeIn(3000)
    })
    //淡入
    $("input:eq(4)").click(function () {
        $("images").fadeOut(3000)
    })
    //自动
    $("input:eq(5)").click(function () {
        $("images").slideToggle(3000)
    })
    //收缩
    $("input:eq(6)").click(function () {
        $("p:last").slideUp(3000)
    })
    //衍生
    $("input:eq(7)").click(function () {
        $("p:last").slideDown(3000)
    })
    //自动
    $("input:eq(8)").click(function () {
        $("p:last").slideToggle(3000)
    })
    //动画
    $("input:eq(9)").click(function () {
        $("images").animate({
            width:"50%"
        },2000)
        $("p:last").animate({
            fontSize:"30px",
            fontWeight:"bold"
        },2000)
    })
})