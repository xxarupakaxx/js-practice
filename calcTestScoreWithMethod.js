"use strict";

class TestScore{
    constructor(){
        this.name ="";
        this.english=0;
        this.math=0;
        this.japanese=0;
    
    }
   /* printScore(){
        let sum=this.english + this.math +this.japanese;
        let ave =sum/3;
        console.log(this.name +"u" + sum +"a" +ave);
    }
*/
    setData(name  ="",english=0,math=0,japanese=0){
        this.name=name;
        this.english=english;
        this.math=math;
        this.japanese=japanese;

    }

    calcSum(){
        let sum =this.english+this.math +this.japanese;
        return sum;
    }

    calcAdv(){
        let sum =this.calcSum();
        let adv=sum/3;
        return adv;
    }

    printScore(){
        let sum=this.calcSum();
        let adv=this.calcAdv();
        console.log(this.name +"a" +sum +"aaa" +adv);
    }
}


let taro =new TestScore();
taro.setData("taro",66,66,54);
taro.printScore();


let hana =new TestScore();
hana.setData("hana",46,56,24);
hana.printScore();

let taroSum= taro.calcSum();
let hanaSum =hana.calcSum();
let ave2 =(taroSum +hanaSum)/2;
console.log(ave2);


let taroAve= taro.calcAdv();
let hanaAdv =hana.calcAdv();
let aveAve =(taroAve +hanaAdv)/2;
console.log(aveAve);

