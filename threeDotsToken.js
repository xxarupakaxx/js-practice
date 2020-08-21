"use strict";

function concatenate(lastName="",firstName="",space=""){
    return lastName + firstName +space;
}

let nameParaml = ["nakata","Yuuzi",","];
let namel =concatenate(...nameParaml);
console.log("/で結合"　+ namel);
let nameParam2 = ["なぁ","n"];
let name2 =concatenate(...nameParam2)
console.log("空文字"　+ name2);