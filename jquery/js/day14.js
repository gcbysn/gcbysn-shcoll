$(function () {
    var x=0
    $("p:eq(0)").click(function () {
        if (x==0){
            //改变颜色和字体大小
            //字典
            $("p:eq(0)").css({"color":"#f00","font-size":"30px"})
            x=1
        }else if(x==1){
            $("p:eq(0)").css({"color":"#0f0","font-size":"10px"})
            x==0
        }
    })
    var y=0
    $("p:eq(1)").click(function () {
        if (y==0){
            $(this).addClass("P_class")
            y=1
        } else{
            $(this).removeClass("P_class")
            y=0
        }
    })
    $("p:eq(2)").click(function () {
        $(this).toggleClass("P_class")
    })

    $("div:eq(0)").click(function () {
        $(this).html("<h4 style='color: red'> 我是动态添加的标题</h4>")
        alert($(this).html())

        //$(this).text("<h4 style='color: red'> 我是动态添加的标题</h4>")


    })
    //搜索框
    $("div:eq(1) input:last").click(function () {
        //第一种
       // var str=$("div:eq(1) input:first").val()
        //第二种
        alert($(this).prev().val())
    })

    $("ul:last").click(function () {
        //动态的创建一个li标签
        var $li=$("<li style='color: blue;font-weight: bold'> 我是动态的li标签</li>")
        //明确指定父元素，将创建的子标签添加进去
        //$(this).append($li)
        //将动态的子元素对象添加到哦父元素里面，页面中肯有多个父元素标签
       //$li.appendTo("ul:last")
        //指定位置插入子元素
       // $li.appendTo("ul:first li:eq(1)")

        //明确指定父元素对象，将创建的子元素对象添加到父元素的第一个子元素之前
        //$(this).prepend($li)
       // $li.prependTo("ul")

        //同辈元素动态添加
        var $a=$("<a href='https://www.com' style='font-family: 楷体'>百度</a>")
        //将动态创建的元素放置指定元素的后面
        //$(this).after($a)
        //$a.insertAfter("ul")
        //将动态创建的元素放置指定对象的前面
       // $(this).before($a)
        //$a.insertBefore("ul")

        //动态替换子标签
        //$("ul:eq(1) li:eq(1)").replaceWith($li)
        // $li.replaceAll("ul:first li:eq(1)")


        //将第二个列表里面的第二个li标签复制，添加至第一个列表的第二个li后
       // $("ul:last li:eq(1)").clone(true).appendTo("ul:first li:eq(1)")
        //把页面中第三个p标签复制，添加至div中的第三个p标签的前面
        $("p:eq(2)").clone(true).appendTo("div:first p:eq(1)")
    })
    $("input:eq(2)").click(function () {
        //remove方法删除节点
        $("ul:last li:eq(1)").remove()
        //empty方法来清空节点内容,清空的内容是节点之间的文本信息，表单的文本框中的value值不会清空
        $("ul:first li:eq(1)").empty()
    })
    $("input:eq(3)").click(function () {
        //修改属性
        $("input:first").attr({"type":"button","value":"我是修改后的表单按钮"})
        //$(this).val()等价与$(this).attr("value")
        //获得某一个指定属性名的属性值
        //alert($(this).attr("value"))
    })
    $("input:eq(4)").click(function () {
        //移除属性
        $(this).removeAttr("value")
    })
    $("input:eq(5)").click(function () {
        //获得某一个标签下的所有子元素
        //如果需要定位至具体的莫个子元素，可以通过选择器进行筛查
        var childs=$("div:first").children("p:first")
        alert(childs.html())
    })


})