"use strict";

let num = Math.round(Math.random()*5);
console.log(num);

switch(num){
    case 1:
        console.log("大吉");
        break;
        case 2:
        console.log("小吉");
        break;
        case 3:
        console.log("吉");
        break;
        case 4:
        console.log("末吉");
        break;
        case 5:
        console.log("凶");
        break;
        default:
        console.log("破滅");
        break;

}