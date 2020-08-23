"use strict";

function onMouseInOutEvent(event){
    let msgList = document.getElementById("msgList");
    let targetId = event.target.dispatchEvent;
    let type =event.type;
    let item =document.getElementById("ii");

    item.textContent += targetId +"に"　+type +"が発生";

    msgList.appendChild(item);

}

function init(){
    let outerBox = document.getElementById("outerBox");

    outerBox.addEventListener("mousemove", function(event){

        let innerBox = document.getElementById("innerBox");

        innerBox.textContent ="x=" + event.offsetX + "y=" + event.offsetY;
    });
}

window.addEventListener("DOMContentLoaded",init);