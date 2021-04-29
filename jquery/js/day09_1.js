//$:Jquery对象
//document:整个html页面
//ready：准备，完成
//表示整个html页面加载完成后，触发的事件

//第一种页面加载完成后，Jquery触发的事件
// $(document).ready(function () {
//     window.alert("我是Juquery框架弹出的对话框")
// })

//第二种页面加载完成后，Jquery触发的事件
$(function(){
    window.alert("我是Juquery框架弹出的对话框")
})

//通过js的方式获取内容
function js() {
    var p=document.getElementById("p")
    var str=p.innerHTML
    window.alert("我是js方式获取的内容"+str)
    //将js的document获取的对象转换成jquery的对象
    var $p=$(p)
    alert($p.html())
   // p.nextElementSibling
}
//通过jquery方式获取内容
function jq() {
    var $p=$("#p")
    window.alert("我是jquery方式获取的内容"+$p.html())
    $("#p").css("color","#f00")
    //动态添加class选择器
    $("#p").addClass("ps")

    //第一种将jquery对象转换成js的document对象
    var p=$p[0]
   // alert("我是jquery转换为js的对象的内容"+p.innerHTML)
    ////第二种将jquery对象转换成js的document对象
    var p=$p.get(0)
    alert("我是jquery转换为js的对象的内容"+p.innerHTML)
}