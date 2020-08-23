"use strict";

let jobs = new Date(2011,10,5);
console.log("ジョブスの命日" + jobs.toDateString());
console.log("ジョブス"　+ jobs.toLocaleDateString());

let month =jobs.getMonth();
jobs.setMonth(month +1);
console.log("１月後　" + jobs.toLocaleDateString());

let date = jobs.getDate();
jobs.setDate(date -6);
console.log("6か日" + jobs.toLocaleDateString());
