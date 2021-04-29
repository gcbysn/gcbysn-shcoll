$(function () {
    //隐藏
    var flex=0
    $("#shopping_commend_arrow").click(function () {
        if(flex==0){
            $("#shopping_commend_sort").hide(600)
            $("#shopping_commend_arrow").attr("src","images/dd_arrow_down.gif")
            flex=1
        }else {
            $("#shopping_commend_sort").show(600)
            $("#shopping_commend_arrow").attr("src","images/shopping_arrow_up.gif")
            flex=0
        }
    })
    // 	选购的商品能否删除和修改数量
    $(".shopping_product_list_6 .blue").on("click",function(obj){
        $(this).parent("td").parent("tr").remove()
    })

    //合计功能
    $(".shopping_list_end_1 input").click(function () {

        //获取购车车的所有行
        var $trs=$("#myTableProduct tr")
        //存储总金额
        var sum=0
        //储存积分
        var integr_num=0
        //储存价格
        var price_num=0
        //节省的价格
        var price_1=0
        //遍历所有行
        for(var i=0;i<$trs.length;i++){
            //找到每一行的金额那一项
            var money=$("#myTableProduct tr:eq("+i+") td:eq(3)").children().html()
            var integral=$("#myTableProduct tr:eq("+i+") td:eq(1)").children().html()
            var price=$("#myTableProduct tr:eq("+i+") td:eq(2)").children().html()
            var num=$("#myTableProduct tr:eq("+i+") td:eq(4) input").val()
            //计算金额
            sum=sum+parseFloat(money)*num
            //计算积分
            integr_num=integr_num+parseFloat(integral)*num
            //计算原价格
            price_num=price_num+parseFloat(price)*num

        }
        //计算节省的金额
        price_1=price_num-sum
        //显示金额
        $("#product_total").html(sum)
        $(".shopping_list_end_4 #product_save").html(price_1.toFixed(2))
        $(".shopping_list_end_4 #product_integral").html(integr_num)
    })
    //清空购物车
    $(document).on("click","#removeAllProduct",function () {
        var confirm_empty=window.confirm("是否清空购物车?")
        if(confirm_empty){
            $("#myTableProduct tr").remove()
            $("#myTableProduct").append("<div style='text-align: center;width: 100%;height: 200px;background-color: #c8c8c8;color: #595959;font-size: 12px;line-height: 200px'>你还没有挑选商品<a href='index.html' style='color: blue'>&nbsp;>>去挑选看看>></a></div>")
        }
    })

})