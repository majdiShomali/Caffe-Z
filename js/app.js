let name =prompt("what is your name ? ");
let gender =prompt("what is your Gender male/female ?");


while(gender!="male" &&  gender!="female"  ){
gender =prompt("please enter you gender  male/female ?");
}


 if(gender=="male"){
alert(`welcome MR ${name} !`);
}else if(gender=="female"){
alert(`welcome MS ${name} !`);
}


let drinkType =prompt("do you want hot or cold drink?");
let drinkName =prompt("what is your drink name?");
alert("your drink is getting prepared ");

let orderInfo=[name, gender, drinkType ,drinkName];
console.log(orderInfo );