function commonCharacters(str1, str2){
    const st1=new Set(str1)
   
    const commonChars = [...str2].filter(char => st1.has(char));
    return commonChars;

}

 const result=commonCharacters('acexivou', 'aegihobu')
 console.log(result);