window.onload=function () {
    //第一种：选项卡
    var divs=document.querySelectorAll(".book_type");
   var dls=document.querySelectorAll(".book_none")
   /* for (let i = 0; i <divs.length ; i++) {
        (function (i) {
            divs[i].onmouseenter=function () {
                for (let j = 0; j <divs.length ; j++) {
                    divs[j].style.background="#F2F2F2";
                    divs[j].style.color="black"
                }
                for (let j = 0; j <dls.length ; j++) {
                    dls[j].style.display="none";
                }
                dls[i].style.display="block"
                divs[i].style.background="#FEFEFE";
                divs[i].style.color="red";
            }
        })(i)
    }*/

    //第二种
    divs.forEach(function (item,index) {
        item.onmouseenter=function () {
            divs.forEach(function (item) {
                item.style.background="#F2F2F2";
                item.style.color="black"
            })
            dls.forEach(function (item) {
                item.style.display="none";
            })
            dls[index].style.display="block"
            divs[index].style.background="#FEFEFE";
            divs[index].style.color="red";
        }
    })

    /*轮播图*/
    var pointNodes=document.querySelectorAll("#scroll_number li");
    var appNode=document.querySelector(".scroll_mid");
    var listNode=document.querySelector("#scroll_img")
    var index=0;
    var time;
    function autoMove() {
        time= setInterval(function () {
            index++;
            move();
        },2000)
    }
     autoMove();
    appNode.onmouseenter=function () {
        clearInterval(time);
    }
    /*鼠标移出开始自动轮播*/
    appNode.onmouseleave=function () {
        autoMove();
    }

    function move() {
        /*无缝*/
        if (index>=6){
            index=0;
        }else if(index<0) {
            index=6;
        }
        var left=-index*185;
        listNode.style.top=left+"px";
        points();
    }

    function points() {
        pointNodes.forEach(function (item) {
            item.classList.remove("check");
        })
        pointNodes[index].classList.add("check");
    }
    function jum() {
        pointNodes.forEach(function (item,pointsIndex) {
            item.onmouseenter=function () {
                index=pointsIndex;
               item.classList.add("check");
                move();
            }
            item.onmouseleave=function () {
                item.classList.remove("check");
            }
        })
    }
    jum();

    /*新闻轮播*/
    var divNode=document.querySelector("#demo1");
    var ulNode=document.querySelector("#express");
    var liNodes=document.querySelector("#express li");

}