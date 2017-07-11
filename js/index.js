/**
 * Created by OnlyMid on 2017/7/11.
 */
var silde_window = document.getElementsByClassName("slide_window");
var Lis = document.getElementsByTagName("li");
Lis[0].style.display = "block";

var selectorNum = document.getElementsByTagName("i").length;
var selectors = document.getElementsByTagName("i");
selectors[0].className = "active";
for(var i=0;i<selectorNum;i++){
    selectorClick(i);
}
function  selectorClick(w) {
    selectors[w].onmouseover = function () {
        for(var j=0;j<3;j++){
            if(Lis[j].style.display = "block"){
                Lis[j].style.display = "none";
            }
            if(selectors[j].className = "active"){
                selectors[j].className = "";
            }
        }
        Lis[w].style.display = "block";
        selectors[w].className = "active";
    }
}