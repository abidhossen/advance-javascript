const students =[
    {id:21, name:'Omar Sanny'},
    {id:12, name:'Moyuri'},
    {id:24, name:'Dipjol'},
    {id:23, name:'Sakib Khan'}
];
//  old school way
// let output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const names = element.name;
//     output.push(names);
// }
// console.log(output);
// modern way to solve that...>

const names = students.map(s =>s.name);
const ids = students.map(s=> s.id);
const bigger = students.filter(s=> s.id>12);
const finder = students.find(s=> s.id > 12);
console.log(finder);
