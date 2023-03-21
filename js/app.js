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

let container0=document.getElementById("container_list");


let p=document.createElement("p");
p.textContent=name0;

container0.appendChild(p);


let ul=document.createElement("ul");
container0.appendChild(ul);
let li=[];
for(let i=0;i<3;i++){
 li[i]=document.createElement("li");
 ul.appendChild(li[i]);
}







li[0].textContent=`Gender : ${gender}`;
li[1].textContent=`Age : ${age}`;
li[2].textContent=`Drink : ${drinkType} ${drinkName}`;;


