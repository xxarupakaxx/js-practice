"use strict";

let csvStr ="Javascript,PHP,Ruby,Java,Python";
let csvArray =csvStr.split(",");
for(let element of csvArray){
    console.log(element);
}