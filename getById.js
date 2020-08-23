"use strict";

function onHlButtonClick(){
    let headTitle = document.getElementById("headTitle");
    console.log(headTitle);
}

function onHlTextButtonClick(){
    let headTitle =document.getElementById("headTitle");
    let headTItleText = headTitle.textContent;
    console.log(headTItleText);
}

function onHlTextAltButtonClick(){
    let headTitle =document.getElementById("headTitle");
    headTitle.textContent ="idによる取得sample";
}