"use strict";

function concatenate(...name){
    let concatenatedName ="";
    for(let i=0;i<name.length;i++){
        concatenatedName +=name[i];
        if(i !=name.length-1){
            concatenatedName +="・";
        }
    }
    return concatenatedName;
}

let lname = "nakata";
let fname ="yuuzi";

console.log(concatenate(lname,fname))