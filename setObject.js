"use strict";

let scoreList = new set();

scoreList.add(30);
scoreList.add(31);
scoreList.add(39);
scoreList.add(30);
scoreList.add(32);

let count =scoreList.size;

console.log(count);
for(let element of scoreList){
    console.log(element)
}
