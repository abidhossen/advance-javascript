let bonus = 20   // global variable
function sum (first, second){
    let result = first + second +bonus;  
    if(result>9){
        var mood ='happy';
        
    }
    console.log(mood);
   return result;
}
const output = sum(5,5);
