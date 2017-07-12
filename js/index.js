/**
 * Created by OnlyMid on 2017/7/11.
 */
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
        for(var j=0;j<3;j++){
            if(Lis[j].style.display = "block"){
                Lis[j].style.display = "none";
            }
            if(selectors[j].className = "active"){
                selectors[j].removeAttribute("class");
            }
        }
        Lis[w].style.display = "block";
        selectors[w].className = "active";
    }
}