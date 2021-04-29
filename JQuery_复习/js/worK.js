$(function ()
{
    $(".tabbox li").click(function ()
    {
        //获取点击的元素给其添加样式，讲其兄弟元素的样式移除
        $(this).addClass("active").siblings().removeClass("active");
        // $("div").hide().eq($(this).index()).show();
        //获取选中元素的下标      index()   返回这个元素在同辈中的索引位置
        var index = $(this).index();
        //parent()父辈元素
        //siblings（）所有同辈元素
        //children所有子元素的元素集合
        //eq()获取第N个元素
        $(this).parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active");
    });
});
