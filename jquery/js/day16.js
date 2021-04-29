function check(){
    //邮箱地址是否为空
    //是否有@
    //是否有.
    //是否有用户名
var email=$("input:eq(0)").val()
    if (email==""){
        alert("邮箱地址不能为空")
        return false
    }
    if (email.indexOf("@")==-1){
        alert("邮箱格式不正确，需要包含@符号")
        return false
    }
    if (email.indexOf(".")==-1){
        alert("邮箱格式不正确，需要包含.符号")
        return false
    }
        if (email.indexOf("@")==0){
        alert("用户名不能为空")
        return false
    }

    //座机号 0791-12345678
    //是否为空，长度是否为13，下标为4的是否为—,-的前面是否为四位数字，-后面的字符是否为8位，是否为数字
    var phone=$("input:eq(1)").val()
    if (phone.length==0){
        alert("联系电话不能为空")
        return false
    }
    if (phone.length==13){
        if (phone.indexOf("-")==4){
            var num=phone.split("-")
            if(num[0].length==4){
                for (var i = 0; i <num[0].length ; i++) {
                    if (isNaN(num[0].charAt(i))) {
                        alert("区号必须位数字")
                        return false
                    }
                }
            }else{
                alert("区号必须位4位数")
              return  false
            }
            if (num[1].length==8){
                for (var i = 0; i <num[1].length ; i++) {
                    if (isNaN(num[1].charAt(i))) {
                        alert("电话必须位数字")
                        return false
                    }
                }
            }
        } else{
            alert("联系电话的格式不正确，必须包含-字符")
            return false
        }
    } else{
        alert("联系电话格式不正确，位数为13位")
        $("input:eq(1)").val("")
        return false
    }
        return true


}
function name(){
    var name_str=$("#day16_1 input:first").val()
    var $div=$("#day16_1 input:first").next()
    if (name_str==""){
        $div.text("姓名不能为空")
        return false
    }
    for (var i = 0; i <name_str.length ; i++) {
        if (!isNaN(parseInt(name_str.charAt(i)))) {
            $div.text("姓名不能有数字")
            return false
        }
    }
    $div.text("")
    return true
}
$(function () {
    $("#day16 input[type='submit']").click(function () {
        return check()
    })

    $("#day16_1 input[type='submit']").click(function () {
        return name()
    })


})