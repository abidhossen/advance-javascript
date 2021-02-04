// Falsy values:
// 0
// null
// NaN (Not a number)
// empty string ""
// undefined
// false
// Truthy values:
// '0' string with 0
// ' ' string with whitespace
// [] array
// {} object without property
// 'false' false inside a string

let name = 12;
if(name || name == 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
