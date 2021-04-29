window.onload=function () {
    logoNode=document.querySelector("#logo");
    spanNode=document.querySelector("#logo .active")
    var time;
    function autoMove() {
        time= setInterval(function (ev) {
            spanNode.style.display="block";
        },2000)
    }

    logoNode.onmouseenter=function (ev) {
        autoMove();
    }
    logoNode.onmouseleave=function (ev) {
        ev=ev||event;
        spanNode.style.display="none"
        clearInterval(time);
    }
   logoNode.onmousemove=function (ev) {
        var L=ev.clientX-this.getBoundingClientRect().left-parseInt(window.getComputedStyle(this).borderLeftWidth);
        var T=ev.clientY-this.getBoundingClientRect().top-parseInt(window.getComputedStyle(this).borderTopWidth);

        L=L<0?0:L;
        T=T<0?0:T;

        L=L;
        T=T+50;

    console.log(L+"  "+T);

    spanNode.style.left=L+"px";
    spanNode.style.top=T+"px";
    }

    /*轮播图*/
    var banner = document.getElementById("carousel");
    var circleList = document.getElementById("circle-list");
    var lis =document.querySelectorAll("#carousel .item li")
    var cirLis =document.querySelectorAll("#circle-list ul li")
    var bannerLeft = document.getElementById("banner-left");
    var bannerRight = document.getElementById("banner-right");
//设置圆点的个数
    var index = 0;
//轮播图自动轮播
    var time;
    autoCarousel();
    function autoCarousel (){
        time = setInterval(function(){
            bannerRight.onclick();
        },2000)
    }
//鼠标移入banner
    banner.onmouseenter = function(){
        clearInterval(time);
    }
    banner.onmouseleave = function(){
        autoCarousel();
    }
//圆点
    for(var i=0; i<cirLis.length; i++){
        cirLis[i].onclick = (function(i){
            return function(){
                lis[index].removeAttribute("class");
                cirLis[index].removeAttribute("class");
                index = i;
                lis[i].setAttribute("class","active");
                cirLis[i].setAttribute("class","active-circle");
            }
        })(i)
    }
//向左点击
    bannerLeft.onclick = function(){
        lis[index].removeAttribute("class");
        cirLis[index].removeAttribute("class");
        index--;
        if(index < 0){
            index = lis.length-1;
        }
        lis[index].setAttribute("class","active");
        cirLis[index].setAttribute("class","active-circle");
    }
//向右点击
    bannerRight.onclick = function(){
        lis[index].removeAttribute("class");
        cirLis[index].removeAttribute("class");
        index++;
        if(index == lis.length){
            index = 0;
        }
        lis[index].setAttribute("class","active");
        cirLis[index].setAttribute("class","active-circle");
    }


}