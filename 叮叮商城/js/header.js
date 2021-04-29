$(function () {
    $("#menu a[target='_self']").bind("mouseover",(function () {
        $("#dd_menu_top_down").css("display","block")
        })
    ).bind("mouseout",(function () {
        $("#dd_menu_top_down").css("display","")
        })
    )
})