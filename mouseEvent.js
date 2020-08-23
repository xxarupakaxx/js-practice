"use strict";

function onMouseInOutEvent(event){
    let msgList = document.getElementById("msgList");
    let targetId = event.target.id;
    let type =event.type;
    let item =document.createElement("li");

    item.textContent += targetId +"に"　+type +"が発生";

    msgList.appendChild(item);

}

function init(){
    let outerBox = document.getElementById("outerBox");

    outerBox.addEventListener("mousemove", function(event){

        let innerBox = document.getElementById("innerBox");

        innerBox.textContent ="x=" + event.offsetX + "y=" + event.offsetY;
    });

    outerBox.addEventListener("mouseenter", onMouseInOutEvent);
    outerBox.addEventListener("mouseleave", onMouseInOutEvent);
    outerBox.addEventListener("mouseover", onMouseInOutEvent);
    outerBox.addEventListener("mouseout", onMouseInOutEvent);
    
}

window.addEventListener("DOMContentLoaded",init);