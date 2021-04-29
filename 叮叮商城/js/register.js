$(function () {

    $("#email").blur(function () {
        var $txt =  $("#email_prompt");
        var reg = /^\s*$/;
        var val = $(this).val();

        this.style = "";
        $txt.html("");
        $txt[0].style = "";

        if(reg.test(val)){
            $(this).css("background-color", "#fef4d1");
            $txt.css({"border":"1px solid #999", "color":"darkred", "background-color":"#fef4d1"});
            $txt.html("邮箱地址为必填项，请输入!");
            return ;
        }

        reg = /^\w+@\w+(\.\w+){1,2}$/i;

        if(reg.test(val)){
            $txt.html(" <images src=\"images/register_write_ok.gif\" alt=\"\">")
        }
        else {
            $(this).css("background-color", "#fef4d1");
            $txt.css({"border":"1px solid #999", "color":"darkred", "background-color":"#fef4d1"});
            $txt.html("邮箱格式错误为必填项，请重新输入!");
        }

    });

    $("#nickName").blur(function () {
        var $txt =  $("#nickName_prompt");
        var reg = /^\s*$/;
        var val = $(this).val();

        this.style = "";
        $txt.html("");
        $txt[0].style = "";

        if(reg.test(val)){
            $(this).css("background-color", "#fef4d1");
            $txt.css({"border":"1px solid #999", "color":"darkred", "background-color":"#fef4d1"});
            $txt.html("昵称为必填项，请输入!");
            return ;
        }

        reg = /^([a-z0-9]){4,12}$/i;

        if(reg.test(val)){
            $txt.html(" <images src=\"images/register_write_ok.gif\" alt=\"\">")
        }
        else {
            $(this).css("background-color", "#fef4d1");
            $txt.css({"border":"1px solid #999", "color":"darkred", "background-color":"#fef4d1"});
            $txt.html("昵称格式错误，请重新输入!");
        }

    });

    $("#pwd").blur(function () {
        var $txt = $("#pwd_prompt");
        var reg = /^\s*$/;
        var val = $(this).val();

        this.style = "";
        $txt.html("");
        $txt[0].style = "";

        if(reg.test(val)){
            $(this).css("background-color", "#fef4d1");
            $txt.css({"border":"1px solid #999", "color":"darkred", "background-color":"#fef4d1"});
            $txt.html("密码为必填项，请输入!");
            return ;
        }

        reg = /^([a-z0-9]){6,20}$/i;

        if(reg.test(val)){
            $txt.html(" <images src=\"images/register_write_ok.gif\" alt=\"\">")
        }
        else {
            $(this).css("background-color", "#fef4d1");
            $txt.css({"border":"1px solid #999", "color":"darkred", "background-color":"#fef4d1"});
            $txt.html("密码格式错误，请重新输入!");
        }

    });

    $("#repwd").blur(function () {
        var $txt = $("#repwd_prompt");
        var pwdVal = $("#pwd").val();
        var val = $(this).val();

        this.style = "";
        $txt.html("");
        $txt[0].style = "";

        if(pwdVal === val){

            $txt.html(" <images src=\"images/register_write_ok.gif\" alt=\"\">")
        }
        else {
            $(this).css("background-color", "#fef4d1");
            $txt.css({"border":"1px solid #999", "color":"darkred", "background-color":"#fef4d1"});
            $txt.html("两次密码输入不一致，请重新输入!");
        }

    });

    var p=["黑龙江","吉林","山东"];
    var c=[["哈尔滨","齐齐哈尔","大庆"],["长春","吉林","四平"],["济南","烟台","青岛","威海"]];
    for(var i=0;i< p.length;i++){
        $("#province").append($("<option>").val(i).html(p[i]));
    }

    $("#province").change(function(){
        $("#city").empty();
        for(var i=0;i<c[$(this).val()].length;i++) {
            $("#city").append($("<option>").html(c[$(this).val()][i]));
        }
    })
    $("#province").change();
})

