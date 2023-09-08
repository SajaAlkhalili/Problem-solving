// function commonCharacters(str1, str2){
//     let m=str1.length;
//     let n=str2.length;
//     var c=[];
//     var b=[];
//     for( let i=0;i<=m;i++)
//           c[i][0]=0;
//           for( let j=0;i<=n;j++)
//             c[0][j]=0;
//             for( let j=0;i<=m;j++)
//             for( let j=0;i<=n;j++)
//         if(str1[i]==str2[j]){
//             c[i][j]=c[i-1][j-1]+1;
//             b[i][j]='0';
//         }
//         else if(str1[i][j-1]>str2[i-1][j]){
//             c[i][j]=c[i-1][j];
//             b[i][j]='1';
//         }
//         else{
//             c[i][j]=c[i-1][j];
//             b[i][j]='2'; 
//         }



// }
//  function  print_lcs(b,x,i,j){
// if(i==0 || j==0)
// return null;
// else if(b[i][j]=='0')
// {
//     console.log(x[i]);
//     print_lcs(b,x,i-1,j-1);
// }
// else if(b[i][j]=='2'){
//     print_lcs(b,x,i-1,j)
// }
// else{
//     print_lcs(b,x,i,j-1)
// }
// }
// commonCharacters('acexivou', 'aegihobu')