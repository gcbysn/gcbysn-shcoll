var i=0
var images=["1.jpg","2.jpg","3.jpg","4.jpg"]
var infos=["飘香奶茶陪伴你","流行服饰魅力场","食全食美","商品品牌折扣区"]
function f() {
    var img=document.getElementsByTagName("images").item(0)
    var p=document.getElementsByTagName("p").item(0)
    var arr_li=document.getElementsByTagName("li")
    //不管现在轮播到第几张图片，先把所有的小点的选中状态恢复成未选中状态
    for (var j = 0; j <arr_li.length ; j++) {
        arr_li[j].style.color="#000"
        arr_li[j].style.backgroundColor="#fff"
    }

    // if (i==4)
    //     i=0
    img.src="images/"+images[i%images.length]
    p.innerHTML=infos[i%infos.length]
    arr_li[i%arr_li.length].style.color="#f00"
    arr_li[i%arr_li.length].style.backgroundColor="#0ff"
    ++i
}

function show() {
    var ul=document.getElementsByTagName("ul").item(0)
    //根据当前的图片数量，动态的创建li标签，添加小点
    for (var j = 0; j <images.length ; j++) {
        var li=document.createElement("li")
        li.innerHTML=j+1
        li.style=
            "border: 1px solid black;" +
            "text-align: center;" +
            "background-color: white;" +
            "width: 20px;" +
            "height: 20px;" +
            "float: right;" +
            "margin: 2px;"
        //默认选中的小点应该是第一个小点
        if (j==0){
            li.style.color="#f00"
            li.style.backgroundColor="#0ff"
        }
        //给小点添加鼠标悬停事件，当鼠标移入至不同的小点，图片和广告语就需要进行同步切换
        li.onmouseover=function (ev) {
            //获得当前鼠标悬停的li的下标
            i=parseInt(this.innerHTML)-1
            f()
        }
        ul.appendChild(li)
    }
    //开启定时器，每隔两秒中调用f()方法
    var time=window.setInterval("f()",2000)

    //给图片添加悬停事件，让用户更好的体验
    var img=document.getElementsByTagName("images").item(0)
    //鼠标悬停，停止轮播
    img.onmouseover=function (ev) {
        window.clearInterval(time)
    }
    //鼠标移出，继续轮播
    img.onmouseout=function (ev) {
        time=window.setInterval("f()",2000)
    }
}
