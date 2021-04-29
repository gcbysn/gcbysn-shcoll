var w=0
var h=0
var left_1=0
var top_1=0
var img_w=0
var img_h=0
var t_bol=false
var l_bol=false
function f(){
    //表示图片已经移动到底部了，偏移量开始减少
    if(top_1+img_h==h){
        t_bol=true
    }
    //表示图片已经到最右边了，偏移量要开始减少
    if (left_1+img_w==w){
        l_bol=true
    }
    //表示图片已经到浏览器顶部了，偏移量增加
    if (top_1==0){
        t_bol=false
    }
    //表示图片已经到最左边，偏移量增加
    if (left_1==0){
        l_bol=false
    }
    if (!t_bol){
        top_1++
    } else{
        top_1--
    }
    if (!l_bol){
        left_1++
    } else
    {
        left_1--
    }
    $("images").offset({"top":top_1,"left":left_1})
}

$(function () {
    // $("input").click(function () {
    //     //让图片显示在间距顶部200，左边300
    //     $("images").offset({"top":200,"left":300})
    // })
    //先获得整个浏览器的宽和高
     w=$(window).width()
     h=$(window).height()


    //获得图片起始的偏移量,距离顶部的间距和距离左边的间距
     left_1= $("images").offset().left
     top_1=$("images").offset().top

    //获得图片的高宽
     img_w=$("images").width()
     img_h=$("images").height()

    //定时器
    window.setInterval("f()",30)

})