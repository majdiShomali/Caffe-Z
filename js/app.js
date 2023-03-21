let name0 =prompt("what is your name ?");
let age =prompt("what is your age ?");
let gender;
let checkGender =()=>{

     gender =prompt("what is your Gender male/female ?");


    while(gender!="male" &&  gender!="female"){
    gender =prompt("please enter you gender  male/female ?");
    }

    if(gender=="male"){
        alert(`welcome MR ${name0} !`);
        }else if(gender=="female"){
        alert(`welcome MS ${name0} !`);
        }
}

checkGender();

let drinkType =prompt("do you want hot or cold drink?");
let drinkName =prompt("what is your drink name?");
alert("your drink is getting prepared ");

let orderInfo=[name0, gender, drinkType ,drinkName];

for(let i=0 ; i<orderInfo.length;i++){
    console.log(orderInfo[i] );
}

let dataName =document.querySelector(".container_list p");
dataName.innerHTML=name0;



let dataList =document.querySelectorAll(".container_list ul li");
dataList[0].innerHTML=`Gender : ${gender}`;
dataList[1].innerHTML=`Age : ${age}`;
dataList[2].innerHTML=`Drink : ${drinkType} ${drinkName}`;


