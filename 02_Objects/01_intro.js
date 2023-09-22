let Obj = {
    name: 'Sudhir',
    age:22,
    "key-three": true,

    sayMyName: function(){
        console.log(this.name);
    }
}

Obj.hobby = 'football';
delete Obj.age;

console.log(Obj);
console.log(Obj.name);//Sudhir
console.log(Obj.age);//undefined
console.log(Obj['key-three']);//true
Obj.sayMyName();//Sudhir
console.log();

console.log(Obj.keys());



// Time Complexity 
// insert-O(1)
// Remove-O(1)
// Access-O(1)
// Search-O(1)
// Object.keys()-O(n)
// Object.values()-O(n)
// Object.entries()-O(n)