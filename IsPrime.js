function  isprime(number){
    let f=false;
 for(let i=2;i<=number/2;++i){
if(number%i==0){
   f=true;
}
 }
 if(!f){
    return console.log(`${number}: Is Prime Number`)
 }
 else{
    return console.log(`${number}: Is Not Prime Number`)
 }

}
const prompt=require('prompt-sync')();
 const prime =prompt('Enter a number: ');

isprime(prime)
