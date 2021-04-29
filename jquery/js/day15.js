$(function () {
    $("input:eq(0)").click(function () {
        //获取第一个div中的第三个p标签的下一个标签的内容
       // var $p= $("div:first p:eq(2)").next()
        var $p= $("div:first").children("p:eq(2)").next()
        $p.css("color","#f00")
        $p.text("红色")


        //获得第一个div的下一个div中第四个p ,把这个p标签字体改为20px，颜色蓝色
        var $p1=$("div:first").next().children("p:eq(3)").next()
        $p1.css({"font-Size":"20px","color":"#00f"})

    })
    $("input[value='上一个']").click(function () {
        //复制第一个div中的第二个p，添加至div的下一个div中的第三个p标签的上一个之前
        var $p2=$("div:first").next().children("p:eq(2)").prev()    //第三个p标签的上一个
        $("div:first").children("p:eq(1)").clone(true).insertBefore($p2)

    })
    $("input[value='反选']").click(function () {
        //第一个div中的第四个p标签，出来该p标签，其他的bq颜色变为
        $("div:first p:eq(3)").siblings().css("color","#0f0")
    })
    $("input[value='获得父元素']").click(function () {
        //指定第一个div中的第三个p标签，将该标签的父元素添加边框以及文本字体改为红色
        $("p:eq(2)").parent().css({"color":"#f00","border":"1px solid #0f0"})
    })

    $("input[value='获得所有父元素']").click(function () {
        //指定第一个div中的第三个p标签，将该标签的所有父元素添加边框以及文本字体改为红色
        $("p:eq(2)").parents().css({"color":"#f00","border":"1px solid #0f0"})
    })
    $("input[value='获得指定父元素']").click(function () {
        //指定第一个div中的第三个p标签，将该标签的指定父元素添加边框以及文本字体改为红色
        $("p:eq(2)").parentsUntil("div.div").css({"color":"#f00","border":"1px solid #0f0"})
    })
    $("input[value='改变高宽']").click(function () {
        $("images").width("200px")
        $("images").height("300px")
    })
})