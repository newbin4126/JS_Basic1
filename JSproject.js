/*alert("hi");

console.log();//콘솔에 메세지보내기 숫자나 string넣기 가능

const a=5;
const b=2;
const myName ='newbin';

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello "+myName);

const amIFat = null;
let something;
console.log(amIFat);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dayOfWeek = [mon,tue,wed,thu,fri,sat,sun];

const nonsense=[1,2,"hello",false,null,undefined,"new"];



console.log(dayOfWeek[4]);//array에서 아이템 받아오기

dayOfWeek.push("sun");//array안에 요일 더 추가하기

console.log(dayOfWeek);

//강의 6

const player = {//object생성
    name:"newbin",
    points:10,
    fat:true,
};//object는 property가 가진 데이터를 저장하도록 해줌
console.log(player);
player.fat = false;
player.point = 15;
console.log(player);


//강의 7-8

function sayHello(nameOfPerso, age){
    console.log("Hello my name is " + nameOfPerso + " and I 'm "+age);

}//함수같은거임


sayHello("nico",10);
sayHello("dal",23);
sayHello("lynn",21);

function plus(a,b){
    console.log(a+b);
}
plus(8,80);

const player ={
    name:"nico",
    sayHello:function(){
        console.log("Hello");
    }
};

console.log(player.name);
player.sayHello();

//강의 9

const isNicoFat= true;//니코는 뚱뚱한가?예
//니코가 살을 뺏다고 해보자
isNicoFat = false;//에러
//왜냐하면 constant는 우리가 값을 업데이트 하지 못하게 함

//let사용
let isNicoFat2 = true;
isNicoFat2 = false;
//let은 값을 업데이트가 가능

/*대부분 const를 사용하되
업데이트가 필요하다면 let을사용하고
var은 무슨일이 있어도 사용 금지
var을 사용하면const와 let을 구분할 수 없게 된다*/


//강의10-12

const player = {
    name:"nico",
    age:98,
};

console.log(player);
player.name = "nicolas"
console.log(player);










