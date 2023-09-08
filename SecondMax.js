const secondMax = function(array) {
   let max= -Infinity;
   let second= -Infinity;
   for(let i=0;i<array.length;i++){
    if(array[i]>max){
        second=max;
        max=array[i];
    }
    else if (array[i] >second && array[i] < max) {
        second = array[i];
   }
}
return second;
  }; 

console.log( secondMax([1,5, 2]));//== 2
console.log(secondMax([-1, -5, 2]));//== -1
console.log(secondMax([-3, -2, -7]));// == -3