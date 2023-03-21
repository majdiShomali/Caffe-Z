// 1- create a function that takes two arguments, one is an array and the other is a number, then return the index of the given value or return -1 if the element cannot be found.

// let q1= (arr,num)=>{
// if((typeof arr == "object") &&(typeof num == "number") ){
// return -1

// }
// else{
//     return "please enter array and number"  
// }
// }
// document.write("Q1 = ");
// document.write(q1([5,2],5));


// 2- create a function that takes an array of integers between 1 and 100 except for one, and returns the missing number.

var numArray = [1,2,3,4,5,6,7,8,9,10];
numArray.sort(function(a, b) {
  return a - b;
});


let q2= (arr)=>{

 
 for(let i=1;i<arr.length;i++){
    
 if(i!=arr[i-1]){
     console.log(i);
     break;
 }
 
 }
 }
 
 
 q2(numArray);
 
 

