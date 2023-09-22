let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
map.set('d', 4); 
map.delete('a');
console.log(map.has('a')); //false
console.log(map.size); //3

// for(let [key, value] of map){
//     console.log(`${key}:${value}`);
// }

// console.log();
// map.forEach((values,keys)=>{
//     console.log(values,keys)
// })

console.log(map); //Map(3) { 'b' => 2, 'c' => 3, 'd' => 4 }

function print(key,value){
    console.log(value + " => " + key);
}
map.forEach(print)
// b => 2
// c => 3
// d => 4