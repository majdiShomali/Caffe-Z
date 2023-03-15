//Evaluate each of the following Javascript expressions and show the value
console.log(  -9*3 );
console.log("value is" + 50);
console.log(17 % 5);
console.log(5 % 17);
console.log(5/10);
console.log(4==4);
console.log(4 != 5);
console.log(7<=8);
console.log(Math.ceil(7.5)-Math.floor(7.5) );

// Read a number (using prompt) and display it using alert
let num=prompt('put a number');
alert('num ='+num);




// Q3 : Read in two numbers and display them in ascending order
let x1=prompt("put one number");
let x2=prompt("put another number");

if(x1>x2){
alert(x1 +" is greater than "+x2);
}
else{
    alert(x2 +" is greater than "+x1);   
}


// Q4: Read in two numbers and display the larger
let x3=prompt("put one number");
let x4=prompt("put another number");

if(x3>x4){
alert(x3 +" is larger ");
}
else{
    alert(x4 +" is larger ");
}

// Q5: Read two numbers and display their sum.  What problem did you encounter?
let x5=prompt("put one number");
let x6=prompt("put another number");


alert(" the sum is " (x5+x6));


// Q6: If you have a “num” variable,  Your task is to print:
let num00=prompt("please enter a number from 1 to 9");

switch (Number(num00)){
    
case 1:
alert("one");   
break;

case 2:
alert("two");   
break;

case 3:
alert("three");   
break;

case 4:
alert("four");   
break;

case 5:
alert("five");   
break;

case 6:
alert("six");   
break;

case 7:
alert("seven");   
break;

case 8:
alert("eight");   
break;

case 9:
alert("nine");   
break;

}