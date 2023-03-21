// 1- create a function that takes two arguments, one is an array and the other is a number, then return the index of the given value or return -1 if the element cannot be found.

let q1= (arr,num)=>{
  
return arr.indexOf(num);
}
document.write("Q1 = ");
document.write(q1([1,5,2],5));
document.write("<br>");

// 2- create a function that takes an array of integers between 1 and 100 except for one, and returns the missing number.

let numArray = [1,2,3,5,6,7,8,9,10];
numArray.sort(function(a, b) {
  return a - b;
});


let q2= (arr)=>{

 
 for(let i=1;i<arr.length;i++){
    
 if(i!=arr[i-1]){
  document.write("Q2 = ");
  document.write(i);
  document.write("<br>");
     break;
 }
 
 }
 }
 q2(numArray);
 
 
// 3- create a function that takes an array of integers and returns a new array with the same integers without the duplicates 
let q3=[1,2,3,4,4,5]
function removeDuplicates(arr) {
  return arr.filter((item,index) => arr.indexOf(item) === index);
}

removeDuplicates(q3);
document.write("Q3 = ");
document.write(removeDuplicates(q3));
document.write("<br>");


//4- create a function that takes an array of integers and returns the average of all the numbers in it 
let sum=0;
let q4=(arrQ3)=>{
 for(let i=0;i<arrQ3.length;i++){
  sum=sum+arrQ3[i];
 }
let avg =sum/arrQ3.length;
return avg;
}
document.write("Q4 = ");
document.write(q4([1,2,3,4]));
document.write("<br>");