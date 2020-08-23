"use strict";

let jobs= new Date(2011,9,5);
let jobsMills =jobs.getTime();

let now = new Date();

console.log("現在の時刻" + now.toLocaleDateString());
let nowMills =now.getTime();
let diffMills = nowMills - jobsMills;
let diffDate = diffMills/(1000* 60 * 60 *24);
console.log("ジョブスの命日からの経過時間" + Math.floor(diffDate) + "日");

