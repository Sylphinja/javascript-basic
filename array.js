// let name1 = "ICT";
// let name2 = "Kumon";
// let name3 = "The Brain";

// console.log("name1",name1);
// console.log("name2",name2);
// console.log("name3",name3);

// let name = ["ICT","Kumon","the Brain"];
// //console.log("nameArray",name);
//console.log("[0]",name[0]);
//console.log("[1]",name[1]);
//console.log("[2]",name[2]);

// console.log("array length", name.length);


// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// let arrayNumber = [];

// for (let i = 0; i <= 10; i++) {
//     arrayNumber.push(i);
//     console.log(arrayNumber);
// }

// delete first value of array
//arrayNumber.shift();
//console.log("after shift", arrayNumber);

//delte last value of array
//arrayNumber.pop();
//console.log("after pop", arrayNumber);

let arrayNumber = [];

for (let i = 0; i <= 20; i++) {
    arrayNumber.push(i);
}

arrayNumber.shift();
console.log(arrayNumber);



let oddArray = [];
let evenArray = [];
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 == 0) {
        evenArray.push(arrayNumber[i]);
    } else {
        oddArray.push(arrayNumber[i]);
    }
}

console.log("arrayNumber",arrayNumber);
console.log("evenArray",evenArray);
console.log("oddArray",oddArray);
