"use strict";

function printElement(currentValue,index,array){
    console.log((index +1) +"個目の値" + currentValue);

}

let list =[1,2,4,5,3];

list.forEach(printElement);