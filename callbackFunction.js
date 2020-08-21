"use strict";

function concatenateSpace(lastname,firstname){
    return lastname +" "+ firstname;

}

function useConcatenate(name,func){
    let concatName =func(...name);
    console.log(concatName);
}

let nameParam=["nakata","yuuzi"];
useConcatenate(nameParam,concatenateSpace);

