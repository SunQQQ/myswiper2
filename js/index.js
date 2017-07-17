/**
 * Created by OnlyMid on 2017/7/11.
 */
!function () {
    // 定时器
    var autoSwiper;

    // 光标挪上时显示按钮，解除轮播
    document.getElementsByClassName("myswiper")[0].onmouseover = function () {
        console.log("movein");
        //清除定时器
        clearInterval(autoSwiper);
        document.getElementsByClassName("leftbutton")[0].style.display = "block";
        document.getElementsByClassName("rightbutton")[0].style.display = "block";
    }
    document.getElementsByClassName("myswiper")[0].onmouseout = function () {
        console.log("moveout");
        //恢复定时器
        autoSwiper = setInterval(function () {
            buttonClick(1);
        },3000);

        document.getElementsByClassName("leftbutton")[0].style.display = "none";
        document.getElementsByClassName("rightbutton")[0].style.display = "none";
    }
    

    // 默认设置选择器第一个高亮
    var Lis = document.getElementsByTagName("li");
    Lis[0].style.display = "block";

// 为选择器生成<i>
    var picNum = document.getElementById("pics").getElementsByTagName("li").length;
    for(var w=0;w<picNum;w++){
        var Iss = document.getElementsByClassName("Is")[0];
        Iss.appendChild(document.createElement("i"));
    }

// 设置选择器第一个点高亮
    var selectors = document.getElementsByTagName("i");
    selectors[0].className = "active";

// 为每一个li绑定事件
    for(var i=0;i<picNum;i++){
        selectorClick(i);
    }
    function  selectorClick(w) {
        selectors[w].onmouseover = function () {
            swiper(w);
        }
    }
// 定时切换
    var num = 0;


// 左右按钮切换
    document.getElementsByClassName("leftbutton")[0].onclick = function () {
        buttonClick(-1);
    }
    document.getElementsByClassName("rightbutton")[0].onclick = function () {
        buttonClick(1);
    }

// 切换选择器高亮
    function swiper(index) {
        // 重置选择器、图片
        for(var j=0;j<picNum;j++){
            if(Lis[j].style.display = "block"){
                Lis[j].style.display = "none";
            }
            if(selectors[j].className = "active"){
                selectors[j].removeAttribute("class");
            }
        }
        Lis[index].style.display = "block";
        selectors[index].className = "active";
    }
    function buttonClick(index) {
        num=num+index;
        if(num>picNum-1){
            num=0;
        }
        if(num<0){
            num=picNum-1;
        }
        swiper(num);
    }

    autoSwiper = setInterval(function () {
        buttonClick(1);
    },500);
}();