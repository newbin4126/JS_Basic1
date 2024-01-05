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
var을 사용하면const와 let을 구분할 수 없게 된다


//강의10

const player = {
    name:"nico",
    age:98,
};

console.log(player);
player.name = "nicolas"
console.log(player); 


//강의11

const age = 98;
function calcuateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(96);

console.log(kr.Age);

//강의12(이론)

//강의13
const age = prompt("How old are you?")//자바스크립트는 이 명령어에서 우릴 기다리고있음(아무것도 입력하지 읺으면 아무일도 일어나지 않음)
//prompt는 사용자에게 창을 띄울 수 있도록 해줌 
//브라우저로 할 수 있는 가장 직접적인 방법
//이 방법은 창을 마음대로 디자인 불가능, 팝업을 지원하지 않는 브라우저도 있어서 사용하지 않음


console.log(typeof "15",typeof parseInt("15"));//15의 문자형태, 그리고 숫자로 바꾼 15의 형태를 로그에 출력
parseInt("15");//String을 number로 변환



//강의14
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age)); */
//isNaN 하나의 인자를 주면 이게number인지 알려줌
//NaN은 boolean을 반환해줌


//강의 3-0
/*크롬 콘솔에서 
document.title="뉴빈이"
이렇게 입력하면 HTML을 거치지 않고 창의 이름을 뉴빈이로 바꿀 수 있음
자바스크립트는 HTML에 이미 연결되어어 있다

//강의 3-1
//이 강의에서 배우는건 정말 정말 정말 정말 많이 사용한다함
document.getElementById("title")//String을 전달받는 함수
//콘솔에 이렇게 입력하면 null이 나옴
//html body안에 id="title"을 가진 항목이 없어서

const title = document.getElementById("title");

console.dir(title);//dir은 element를 더 자세하게 보여줌


//강의3-2
const hellos =  document.getElementsByClassName("hello");//hellos라는 변수 정의

console.log(hellos);

const title = document.querySelector(".hello h1");
//querySelector는 element를 css방식으로 검색 가능

getElementsByClassName("hello");
//querySelector에는 hello가 class name 이라는 것과 그 안의 h1s을 명시해줘야 함

console.log(title);

//강의 3-3

const title = document.querySelector(".hello:fiorst-child h1");
 
console(title);

title.innerText = "Hello";

//강의 3-4

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    title.computedStyleMap.color = "blue";
}

function handleMouseEnter(){
    title.innerText="Mouse id here!";
}

function handMouseLeave(){
    title.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowcopy(){
    alert("copier!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handMouseLeave);

//강의 3-5
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowcopy);*/

//강의 3-6

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(h1.currentColor === "blue"){
        h1.newColor="tomato";
    } else {
        h1.newColor="blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click",handleTitleClick);

//강의 3-7

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.className="active"; 
}

h1.addEventListener("click", handleTitleClick);