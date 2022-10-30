// let Malls = {
//     name:"The Mall",
//     location: "Bankapi",
//     rating: 3.5
// };


// console.log(Malls);
// console.log(Malls.name);
// console.log(Malls.location);
// console.log(Malls.rating);



let family = [{
    name: "Yao",
    type: "mom",
    age: 46
},{
    name: "chris",
    type: "dad",
    age: 50
},{
    name: "Christa",
    type: "grandma(dad)",
    age: 62
},{
    name: "annya",
    type: "aunt(dad)",
    age: 41
},{
    name: "...",
    type: "Uncle(dad)",
    age: 46
},{
    name: "Una",
    type: "cousin(dad)",
    age: 9
},{
    name: "mayyay",
    type: "grandmother(mom)",
    age: 83
},{
    name: "poyay",
    type: "grandfather",
    age: 84
},{
    name: "...",
    type: "aunt(mom)",
    age: 44
},{
    name: "...",
    type: "uncle(mom)",
    age: 45
},{
    name: "...",
    type: "aunt(mom)",
    age: 21
},{
    name: "...",
    type: "uncle(mom)",
    age: 45
},{
    name: "gayte",
    type: "cousin(mom)",
    age: 11
},{
    name: "...",
    type: "cousin(mom)",
    age: 17
},{
    name: "gelvin",
    type: "cousin(dad)",
    age: 13
}];
let learn = [];
for(index=0; index < family.length; index++) {
    if (family[index].age < 25) {
        learn.push(family[index]);
    }
}
//console.log(family);
console.log(learn)