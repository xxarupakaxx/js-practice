"use strict";

let nameList = ["matuda", "tanaka" , "nakayama" , "yamamoto" , "honnda"];
let nameListStr = nameList.toString();
console.log(nameListStr);
let nameIdx = nameList.indexOf("nakayama");
console.log("nakayama三のインデックス" + nameIdx);
nameIdx = nameList.indexOf("egichi");
console.log(nameIdx);
let includeResult = nameList.includes("eguchi");
console.log(includeResult);