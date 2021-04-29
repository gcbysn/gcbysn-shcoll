window.onload=function () {
    var data=
        [
            {
                "title":"以下所示的文件名后缀中只有______不是静态网页的后缀。",
                "daan": "D",
                "tm": {
                    "A":"A.html",
                    "B":"B.shtml",
                    "C":"C.Thtml",
                    "D":"D.Dhtml"
                }
            },
            {
                "title":"下列文件名后缀中，只有______不是动态网页的后缀。",
                "daan":"D",
                "tm": {
                    "A":"A.JSP",
                    "B":"B.XML",
                    "C":"C.PHP",
                    "D":"D.AXPS"
                }
            },
            {
                "title":"下列选项中，只有______是错误的。",
                "daan":"C",
                "tm": {
                    "A":"A.公共语言运行类",
                    "B":"B.shtml",
                    "C":"C.Thtml",
                    "D":"D.Dhtml"
                }
            },
            {
                "title":"下列选项中，哪一个是.net应用的基础？",
                "daan":"A",
                "tm": {
                    "A":"A.公共语言运行类",
                    "B":"B.shtml",
                    "C":"C.Thtml",
                    "D":"D.Dhtml"
                }
            },
            {
                "title":" NET与XML紧密结合的最大好处是．（ ）",
                "daan": "B",
                "tm": {
                    "A":"A. 代码易于理解",
                    "B":"B. 跨平台传送数据",
                    "C":"C. 减少存储空间"
                }
            },
            {
                "title":"下面哪一个对象用于与数据源建立连接：（ ）",
                "daan": "B",
                "tm": {
                    "A":"A.Command",
                    "B":"B.Connection"
                }
            },
            {
                "title":" .Net依赖以下哪项技术实现跨语言互用性？",
                "daan": "C",
                "tm": {
                    "A":"A.CLR ",
                    "B":"B.CTS ",
                    "C":"C.CLS",
                    "D":"D.CTT"
                }
            },
            {
                "title":"下面不属于控件的是（ ）",
                "daan": "A",
                "tm": {
                    "A":"A. DataSet",
                    "B":"B. Repeater",
                    "C":"C. SqlDataSource",
                    "D":"D. GridView"
                }
            },
            {
                "title":"下面对象中可以脱机处理数据的是（ ）",
                "daan": "A",
                "tm": {
                    "A":"A.DataSet",
                    "B":"B.Connection",
                    "C":"C.DataReader"
                }
            },
            {
                "title":"下面不属于Web服务器控件的是",
                "daan": "A",
                "tm": {
                    "A":"A. HtmlInputButton ",
                    "B":"B. RadioButton",
                    "C":"C. DropDownList"
                }
            },
        ]
    var title=document.querySelector('.title');
    var djs=document.querySelector('.imgs');
    var fs=0;
    //题号
    var xh=0;
    //答对题数
    var j=0;
    //答错题数
    var cuo=0;
    //倒计时
    var time=null;
    //计时器
    var k=false;
    //
    var jsj=0;

    //
    function f1() {
        var i=10;
        djs.innerHTML=i;
        clearInterval(time);
        time=null;
        // console.log(1)
        jsj++;
         time=  setInterval(function () {
            i--;
            djs.innerHTML=i;
             // console.log(djs.innerHTML)
            if (i==0){
                console.log(jsj)
                if (jsj==10){
                    $('.tc2').toggle()
                    $('.left').click(function () {
                        $('.mb').toggle();
                        $('.tc2').toggle();
                        clearInterval(time)
                        time=null;
                    })
                }
                clearInterval(time)
                time=null
                f3()

                if (k){
                    f2()
                    k=false;
                }
            }
        },1000)
    }
    //换题
    function f2() {
        var tu=  setTimeout(function () {
            clearInterval(time)
            time=null;
            $('.Options1').html('');
            $('.title').remove()
            if (xh>=10){
                xh=9;
            }
            f(xh);
            if (xh!=10){
                f1();
            }
            k=true;
            ht()
        },1000)
    }
    f1()
    //弹窗
    function f3() {
        clearInterval(time)
        time=null;
        $('.Options').each(function (index,item) {
            if (jsj!=10){
                if ($(item).attr('rel')==data[xh].daan){
                    $(item).addClass('active')
                    cuo++;
                    $('.Options').unbind()
                    xh++;
                    if (cuo==1&&j!=9){
                        $('.mb').toggle()
                        $('.tc').toggle()
                        clearInterval(time)
                        time=null;
                        fs=fs+10;
                        $('.fs').html(fs)
                        $('.dt').click(function () {
                            $('.mb').toggle()
                            $('.tc').toggle()
                            f2()
                        })
                    }else{
                        f2()
                    }
                }
            }

        })

    }

    //创建题目
   function f(xh){
       var a=$( ' <span class="title">'+data[xh].title+'</span>')
       $('.body').append(a)
       var tm=data[xh].tm;
       for (const titleKey in tm) {
           var b=$('<div class="Options" rel="'+titleKey+'">'+tm[titleKey]+'</div>')
           $('.Options1').append(b)
       }
   }
    f(xh)
    //点击
    function ht(){
        $('.Options').on('click',function () {
            clearInterval(time)
            time=null;
            // console.log(1)
            var x=$(this).html();
            var dn=x.substr(0,1);
            if (dn==data[xh].daan){
                j++;
                $(this).addClass('active')
                fs=fs+10;
                $('.fs').html(fs)
                xh++;
                console.log('题目数'+xh)
                console.log($('.fs').html())
               f2()
                if (xh==10){
                    $('.mb').toggle();
                    clearInterval(time)
                    time=null;
                    if ($('.fs').html()==100){
                        $('.tc1').toggle()
                        $('.left').click(function () {
                            $('.mb').toggle();
                            $('.tc1').toggle();
                        })
                    }
                    else if(j!=9) {
                        console.log('答对题目'+j)
                        $('.tc2').toggle()
                        $('.left').click(function () {
                            $('.mb').toggle();
                            $('.tc2').toggle();
                            clearInterval(time)
                            time=null;
                        })
                    }
                }
            }else{
                $(this).addClass('false')
                f3()
            }
        })
    }
    ht()
    $('.gb').click(function () {
        $('.mb').toggle();
        $('.tc1').css('display','none');
        $('.tc2').css('display','none');
        clearInterval(time)
        time=null
    })

}











