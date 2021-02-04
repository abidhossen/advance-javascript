// variable without value will be undefined
   let btn;
   console.log(btn);

// function without return or proper return will be undefined
function add(num1,num2){
    console.log(num1+num2);
    return;
}
const result = add(10,12);
console.log(result);

// not giving the parameter value will cause undefined
function add(num1,num2){
    console.log(num1,num2);
 }
const result = add(10);
console.log(result);
// want to get the property from an object which doesn't exist will cause undefined.
const student = {id:1305, name:'Kabul'}
console.log(student.fatherName);
// a define var will be undefined if we define it as undefined.
let go = undefined;
console.log(go);

let ages = [12, 14, 19]
console.log(ages[5]);

// null => not exist or empty value or value was removed.