"use strict";

let list =[1,24,3,4,5,3];
list.forEach(
    function (currentValue,index,array){
        console.log((index +1) +"個目の値" + currentValue);
    
    }
);