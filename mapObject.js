"use strict";

let studentNumList = new Map();

studentNumList.set("A" , 30);
studentNumList.set("B" , 31);
studentNumList.set("C" , 29);
studentNumList.set("D" , 30);
studentNumList.set("E" , 32);

let count = studentNumList.size;
console.log(count);

let studentNumC = studentNumList.get("C");
console.log(studentNumC);

for(let  [key , value] of studentNumList){
    console.log(key + " " +value);
}
