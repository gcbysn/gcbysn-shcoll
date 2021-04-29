$(function () {
    $("#div1 :submit").click(function () {
        //获得文本框上的内容
        var str=$("#div1 :text").val()
        if (str!=""){
            alert(str)
            //设置为只读状态，内容不可以修改
            $("#div1 :text").attr("readonly","readonly")
        } else {
            alert("内容不可以为空")
            $("#div1 :text").focus()
        }
    })
    $("#div1 :button").click(function () {
        $("#div1 :text").removeAttr("readonly")
    })

    
    var $area=$("textarea")
    $("#div2 :button:eq(0)").click(function () {
        //判断这个标签是否处于动画正在进行中
        if (!$area.is(":animated")){
            //如果当前标签没有动画正在进行，给当前标签添加动
            if ($area.height()<350){
                //开启动画，500毫秒内将该标签高度增加70
                $area.animate({
                    height:"+=70"
                },500)
            }
        }
    })
    //缩小
    $("#div2 :button:eq(1)").click(function () {
        //判断这个标签是否处于动画正在进行中
        if (!$area.is(":animated")){
            //如果当前标签没有动画正在进行，给当前标签添加动
            if ($area.height()>70){
                //开启动画，500毫秒内将该标签高度减少70
                $area.animate({
                    height:"-=70"
                },500)
            }
        }
    })
    //文字向上滚动
    $("#div2 :button:eq(2)").click(function () {
        //判断这个标签是否处于动画正在进行中
        if (!$area.is(":animated")){
            //如果当前标签没有动画正在进行，给当前标签添加动
            if ($area.height()<350){
                //开启动画，500毫秒内将该标签高度增加70
                $area.animate({
                   scrollTop:"+=90"
                },500)
            }
        }
    })
    //向下滚动
    $("#div2 :button:eq(3)").click(function () {
        //判断这个标签是否处于动画正在进行中
        if (!$area.is(":animated")){
            //如果当前标签没有动画正在进行，给当前标签添加动
            if ($area.height()>90){
                //开启动画，500毫秒内将该标签高度增加70
                $area.animate({
                    scrollTop:"-=90"
                },500)
            }
        }
    })

    //全选
    $("#div3 :button:eq(0)").click(function () {
        $("#div3 :checkbox").attr("checked","checked")
    })
    //不选
    $("#div3 :button:eq(1)").click(function () {
        $("#div3 :checkbox").removeAttr("checked")
    })
    //反选
    $("#div3 :button:eq(2)").click(function () {
        $("#div3 :checkbox").each(function () {
            //根据下标默认从0开始循环遍历，取出对应的标签对象
            var bol=this.checked
            this.checked=!bol
        })
    })
    //提交
    $("#div3 :submit").click(function () {
        var msg="你选择的爱好位：\n"
        //循环遍历每一个checkbox，判断那些被选中，把选中的checkbox的文本信息获取
        $("#div3 :checkbox").each(function () {
            //this代表的是dom对象
            if (this.checked){
                msg+=$(this).val()+"\n"
            }
        })
        alert(msg)
        return true
    })
})