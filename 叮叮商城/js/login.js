
$(function(){
    $("#btn").click(function(){
       var reg = /^\s*$/;
       var name = $("#email").val();
       var psw = $("#pwd").val();

       if(reg.test(name)){
           alert("用户名不能为空");
           $("#email").val("");
           $("#email").select();
           return ;
       }

       if(reg.test(psw)){
           alert("密码不能为空");
           $("#pwd").val("");
           $("#pwd").select();
       }
        return false;
    });

    $("#quick_register").click(function(){
        window.location = "register.html";
    });

});