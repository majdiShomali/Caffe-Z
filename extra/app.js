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


alert(" the sum is " + (x5+x6));


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

// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.
for(let i=0;i<6;i++){
alert(i);
}

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window
let q8=[];
for(let i=0;i<6;i++){
    q8.push(i);
    }
    alert(q8);

// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3. 
let q9=[];
for(let i=0;i<20;i++){
    if((i%3)==0){
    q9.push(i);   
    }
    }
    alert(q9);
    
// Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time
let q10=prompt("please enter a number between 0 and 100") ;

while(q10>100){
    q10=prompt("please re-enter a number between 0 and 100") ;
}

// Q11: Repeat previous exercise, but this time allow for the possibility that the user enters something that is not a number.  Hint: the built in function isNaN(x) returns true if x is not a number.  It returns false if x is a number.  Sort of backwards, but that's what's available.

let q11=prompt("please enter a number") ;

while(isNaN(q11)){
    q11=prompt("please re-enter a number") ;
}



// Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

let q12=[];
let sumq12=0;
for(let i=0;i<11;i++){

    q12[i]=Number(prompt("please enter an integer number"))  ;
    sumq12=q12[i]+sumq12
}
alert(`the sum is ${sumq12/(q12.length)}`);



// Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.  For example, if you enter 10, then display 5 which is the average of   (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11.

let q13=Number(prompt("please enter an integer number"))  ;
let sumq13=0;
let i=q13;
while(i!=0){
    sumq13=i+sumq13;
   i--;
}

alert(`the average is ${sumq13/(q13+1)}`);
