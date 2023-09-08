function ispalindrome(string ){
   
    
    string = string.toLowerCase().replace((/[^A-Za-z0-9]/g), '');
    const lengths= string.length;
    for(var i=0; i<lengths / 2 ; i++){

        if(string[i] !== string[lengths-1-i]){
            return false;
        }
       

    }
    return true;
}


//  const prompt=require('prompt-sync')();
// const palindrom =prompt('Enter a string: ');

// const value = ispalindrome(palindrom);
//console.log(value);

console.log(ispalindrome('A man, a plan, a canal, Panama!')); // Output: true
console.log(ispalindrome('Race car')); // Output: true
console.log(ispalindrome('Hello, world !'));