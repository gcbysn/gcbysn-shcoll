function f() {
    //标签选择器改变table的宽度，边框
    $("table").attr("width","400px")
    $("table").attr("border","1px")
}
function f1() {
    //类选择器，改变当前定义了类选择器的标签的背景颜色
    $(".row").css("background-color","#f00")
}
function f2() {
    //id选择器，通过id选择器获得对应标签对象，改变为中心对齐，边框为红色
    $("#div").attr("align","center")
    $("#div").css("border","1px dashed #f00")
}
function f3() {
    //并集选择器，改变所选取的所有标签对象的文本颜色和大小
    $("p,.row").css("color","#2eff20")
    $("p,.row").css("font-size","50px")
}
function f4() {
    //交集选择器，把选取的标签的字体改为粗体
    $("p.row").css("font-weight","bold")
    $("p.row").html("我是第二个段落标签")
}

function f5() {
    //全局选择器
    $("*").css("font-style","italic")
}
function f6() {
    //后代选择器，改变图片 可以忽略父元素 深度查找
    $("#div div images").attr("src","images/ad-02.jpg")
}
function f7() {
    //子选择器 只查找子元素
    $("#div>div>images").attr("src","images/ad-01.jpg")
}
function f8() {
    //相邻元素选择器 找img标签相邻的标签 把该标签的文本改变，字体改为楷体
    $("images+p").css("font-family","楷体")
    $("images+p").html("我是img相邻的标签")
}
function f9() {
    //同辈元素选择器
    $("images~p").css("color","#ff39dd")
}
function f10(i) {
    switch (i) {
        case 1:
            //根据属性名查找标签
            $("input[type]").css("background-color","#fff941")
            break;
        case 2:
            //根据属性名=莫个具体值查找标签
            $("input[type='button']").css("background-color","#322bb4")
            break;
        case 3:
            //不是button的标签
            $("input[type!='button']").css("background-color","#ff7b00")
            break;
        case 4:
            //匹配以ps开头的加标签
            $("input[type^='pa']").css("background-color","#ff48cb")
            break;
        case 5:
            //匹配src属性以jpg结尾的标签
           $("images[src$='.jpg']").attr("src","images/ad-03.jpg")
            break;
        case 6:
            //匹配type属性中包含t字符的标签
            $("input[type*='t']").css("background-color","#b01f29")
            break;
        case 7:
            //匹配多属性的标签
            $("input[type][value$='6']").css("background-color","#39ff23")
            break;
    }
}
function f11(i) {
    //
    switch (i) {
        case 1:
            //第一个
            $("table tr:first").css("background-color","#b01f29")
            break;
        case 2:
            //最后一个
            $("table tr:last").css("background-color","#2013b0")
            break;
        case 3:
            //奇数
            $("table tr:even").css("background-color","#22b01b")
            break;
        case 4:
            //偶数
            $("table tr:odd").css("background-color","#b0af2a")
            break;
        case 5:
            //指定标签数组的下标
            $("table tr:eq(2)").css("background-color","#101af4")
            break;
        case 6:
            //大于指定标签数组的下标
            $("table tr:gt(2)").css("background-color","#620d0e")
            break;
        case 7:
            //小于指定标签数组的下标
            $("table tr:lt(2)").css("background-color","#fffe3e")
            break;
        case 8:
            //匹配
            $("table tr:not('.row')").css("background-color","#0d380a")
            break;
        case 9:
            //匹配标题标签元素
            $(":header").css("color","#fffe3e")
            break;
        case 10:
            //匹配获得焦点的标签
            $(":focus").css("background-color","#ff39dd")
            break;
    }

}
$(function () {
    $(":focus").css("background-color","#50e1ff")
})
function f12(i) {
    //可见性过滤选择器
    switch (i) {
        case 1:
            $("p:hidden").show(2000)
            break;
        case 2:
            $("images:visible").hide(3000)
            break;
    }

}