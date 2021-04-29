$(function () {
    $("input[type='button']").click(function () {
        var str=$(this).prev().val()
        //匹配用户输入的是否位3位数数字
        //var reg=/^\d\d\d\$/
        //reg=/\d{4}-\d{8}$ +(.[a-zA-Z]{2，3}){1，2}/
        var reg=/^\w$/    //匹配邮箱地址
        if (reg.test(str)){
            alert("正确")
        } else {
            alert("错误")
        }
        //java123  23java456 jjavaaa jasdfgh \n 123javabbb \n 999javaaaa
        //匹配英文句，从用户输入的内容中，找出具有java字符发单词
        //后面如果不带参数g，正则表达式默认会遇到空格就停止，匹配一次
       //  str="java12323java456jjavaaajasdfgh\n123javabbb\n999javaaaa"
       // alert(str)
       //  reg=/java\w+/m


       // alert(str)
       // alert(reg.test(str))

    })
})