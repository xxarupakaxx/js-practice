"use strict";

class TestScore{
    constructor(){
        this.name ="";
        this.english=0;
        this.math=0;
        this.japanese=0;
    }

}

function printScore(student){
    let sum=student.english + student.math +student.japanese;
    let ave =sum/3;
    console.log(student.name +"u" + sum +"a" +ave);
}

let taro =new TestScore();
taro.name ="太郎";
taro.english=92;
taro.math =83;
taro.japanese=93;
print(taro);