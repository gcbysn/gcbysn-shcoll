function init(){
    var num=Math.floor(Math.random()*9000+1000)
    $("p").html(num)
}
$(function () {
    $("p").css("color","#fffe3e")
    $("p").css("font-weight","bold")
    $("p").css("font-size","20px")

    //给a标签添加点击事件
    $("a").click(function () {
        init()
    })
    //给文本输入框添加获得焦点事件和失去焦点事件
    $("input[type!='button']").focus(function () {
        $(this).css("border","2px solid #fffe3e")
        $(this).css("color","#fffe3e")
    })
    $("input[type!='button']").blur(function () {
        $(this).css("border","2px solid #000")
        $(this).css("color","#000")
    })

    $("input[type='button']").click(function () {
        var input_value=$("input[type='text'][width]").val()
        var num=$("p").html()
        if (input_value!=num){
            var bol=confirm("验证码输入错误,是否重新输入?")
            if (bol){
                init()
                $("input[type='text'][width]").val("")
            }
        }

    })
})