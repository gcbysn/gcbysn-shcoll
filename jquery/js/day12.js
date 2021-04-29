//表示当页面加载完成后，给input标签类型为button的标签添加点击事件
$(function () {
    $("input[type='button']").click(function () {
        //this表示为当前触发事件的标签对象
        window.alert($(this).val())
    })
    //鼠标移入事件
    $("input[type='button']").mouseover(function () {
        $(this).css("background-color", "#f00")
    })
    //鼠标移出事件
    $("input[type='button']").mouseout(function () {
        $(this).css("background-color", "#0f0")
    })
    //键盘按下事件
    $("input[type^='te']").keydown(function () {
        var num=event.keyCode
        alert(String.fromCharCode(num))
    })

    //实现导航栏效果 背景变成红色 字体白色 圆角边框 字体加粗
    $("ul li").mouseover(function () {
       // $(this).css("color", "#00f")
        //动态添加类选择器
        $(this).addClass("menu")
    })
    $("ul li").mouseout(function () {
       // $(this).css("color", "#000")
        //动态删除类选择器
        $(this).removeClass("menu")
    })

    $("table td").mouseover(function () {
        if ($(this).html()=='红色'){
            $(this).css("color","#f00")
        } else if ($(this).html()=='绿色') {
            $(this).css("color","#0f0")
        }else if ($(this).html()=='蓝色') {
            $(this).css("color","#00f")
        }
        $("div").css("background-color",$(this).css("color"))
    })

    $("table td").mouseout(function () {
        $(this).css("color","#000")
    })

})