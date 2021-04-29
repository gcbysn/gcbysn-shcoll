function f() {
    var div=document.getElementById("div")
    var div1=document.getElementById("div1")
    var div2=document.getElementById("div2")
    //
    div2.innerHTML=div1.innerHTML
    //div.scrollTop:表示div的内容在滚动的过程中移出上边缘多少个像素
    //div.scrollTop>=div2.offsetTop：表示判断div1是否已经全部移出div的上边缘
    if (div.scrollTop>=div2.offsetTop) {
        div.scrollTop=0
    }else{
        div.scrollTop++
    }
}
function show() {
    //让div每隔30毫秒滚动1个像素
    var div = document.getElementById("div")
    var time = window.setInterval("f()", 30)
    div.onmouseover = function (ev) {
        window.clearInterval(time)
    }
    div.onmouseout = function (ev) {
        time = window.setInterval("f()", 30)
    }
}