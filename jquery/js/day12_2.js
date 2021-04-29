$(function () {
    //绑定事件
    $("input[type='button']:eq(0)").bind("click",function () {
        alert("我是一个绑定事件")
    })

    $("input[type='button']:eq(0)").bind("mouseover",function () {
        alert("鼠标移入按钮")
    }).bind("mouseout",function () {
        alert("鼠标移出按钮")
    })

    $("input[type='button']:eq(1)").bind("click",function () {
        //解除绑定事件按钮的事件
        $("input[type='button']:eq(0)").unbind("mouseover")
    })
})