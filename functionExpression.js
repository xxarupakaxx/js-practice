"use strict";
function concatenatespace(lastname,firstname){
    return lastname + " " + firstname;
}

function concatenateDot(lastname,firstname){
    return lastname + "・" +firstname;
}

let lname  ="nakata";
let fname ="yuuzi";
let funcList =[concatenatespace,concatenateDot];
for (let func of funcList){
    let name =func(lname,fname);
    console.log(name);
}