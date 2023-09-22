let arr1 = new Array(3);
arr1[0] = 10
arr1[1] = 20
arr1[2] = 30
console.log("Array 1: ", arr1) //Array 1:  [ 10, 20, 30 ]


let arr2 = new Array(10, 20, 30, 40, 50);
console.log("Array 2: ", arr2) //Array 2:  [ 10, 20, 30, 40, 50 ]

let arr3 = new Array(5);
console.log("Array 3: ", arr3) //Array 3:  [ <5 empty items> ]


const courses = ["HTML", "CSS", "Javascript"];
console.log(courses.toString()) // HTML,CSS,Javascript

const courses2 = ["HTML", "CSS", "Javascript"];
for (let i = 0; i < courses2.length; i++) {
    console.log(courses2[i])
}

const arr = [1, 2, 3, 4];
arr.push('Sudhir');
arr.unshift(0);
arr.shift();

for(const item of arr){
    console.log(item);
}



// Functions in Array
// map, filter, reeduce, concat, slice and splice

// Time Complexity

// Insert/remove from end - O(1)
// Insert/remove from beginning - O(n)
//Acces-o(1)
// Search - O(n)
// Push/Pop-O(1)
// shift/unshift/concat/splice/slice-O(n)
// forEach/map/filter/reduce-O(n)