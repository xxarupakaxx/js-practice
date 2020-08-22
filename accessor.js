"use strict";

class AccessorProp{
    constructor(lastName,firstName){
        this.lastName=lastName;
        this.firstName=firstName;
    }


    get name(){
        return this.lastName +this.firstName;
    }

    set extName(value){
        this.lastName =value;
        this.firstName=value;
    }
}

let taro = new AccessorProp("nakata","taro");

console.log("lastname:"　+ taro.lastName);
console.log("firstname :" + taro.firstName);

console.log(taro.name);

taro.extName ="yama";

console.log(taro.lastName);
console.log(taro.firstName);