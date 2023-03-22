


let formSub0=document.getElementById("input_submt");
formSub0.addEventListener("submit",namePassword);

 function namePassword(formSub0){

    let name00=formSub0.target.username.value;
   
    let age00=formSub0.target.userage.value;
   
  
   

    let hot=(formSub0.target.userdrinkType.checked );
    let cold=(formSub0.target.userdrinkType1.checked );
let drinkType00;
    if(cold){
     
drinkType00="Cold"
    }else if(hot){
        drinkType00="Hot"
    }


    let drinkName00=formSub0.target.userdrinkName.value;
   

    addList0(name00,age00 , drinkType00 ,drinkName00)
  
 }
 function addList0(name00,age00 , drinkType00 ,drinkName00){
    let orderInfo=[name00, age00, drinkType00 ,drinkName00];

    for(let i=0 ; i<orderInfo.length;i++){
        
    }
    
    let container0=document.getElementById("container_list");
    
    
    let p=document.createElement("p");
    p.textContent=name00;
    
    container0.appendChild(p);
    
    
    let ul=document.createElement("ul");
    container0.appendChild(ul);
    let li=[];
    for(let i=0;i<2;i++){
     li[i]=document.createElement("li");
     ul.appendChild(li[i]);
    }
    
    
    
    
    li[0].textContent=`Age : ${age00}`;
    li[1].textContent=`Drink : ${drinkType00} ${drinkName00}`;;
    
}



// let name0 =prompt("what is your name ?");
// let age =prompt("what is your age ?");
// let gender;
// let checkGender =()=>{

//      gender =prompt("what is your Gender male/female ?");


//     while(gender!="male" &&  gender!="female"){
//     gender =prompt("please enter you gender  male/female ?");
//     }

//     if(gender=="male"){
//         alert(`welcome MR ${name0} !`);
//         }else if(gender=="female"){
//         alert(`welcome MS ${name0} !`);
//         }
// }

// checkGender();

// let drinkType =prompt("do you want hot or cold drink?");
// let drinkName =prompt("what is your drink name?");
// alert("your drink is getting prepared ");



