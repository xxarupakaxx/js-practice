"use strict";

function onFreewordButtonClick(){
    let freewordInput =document.getElementById("freewordInput");
    let freewordInputValue =freewordInput.Value;
    let freewordInputName =freewordInput.getAttribute("name");
    let showInput = document.getElementById("showInput");
    showInput.textContent ="name属性が" +freewordInputName + "入力された値は" +freewordInputValue;

}