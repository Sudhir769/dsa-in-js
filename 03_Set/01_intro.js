const set = new Set([1,2,3]);
set.add(4);
set.delete(2);
console.log(set.has(4)); //true
console.log(set.has(2)); //false
console.log(set.size); //3

for(let item of set){
    console.log(item);
}
set.clear();