"use strict";

function printScore(name,english,math,japanaese){
    let sum =english +math +japanaese;
    let ave =sum/3;
    console.log(name +"うん" + sum +"兵員" +ave);

}
let taroName ="taro";
let taroEnglish=33;
let math =3;
let japanaese=88;
printScore(taroName,taroEnglish,math,japanaese);

let n ="hana";
let he =55;
let hma=84;
let hj =94;
printScore(n,he,hma,hj);
