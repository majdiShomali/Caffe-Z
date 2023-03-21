// 1- create a function that takes two arguments, one is an array and the other is a number, then return the index of the given value or return -1 if the element cannot be found.

let q1= (arr,num)=>{
if((typeof arr == "object") &&(typeof num == "number") ){
return -1

}
else{
    return "please enter array and number"  
}
}
document.write("Q1 = ");
document.write(q1([5,2],5));