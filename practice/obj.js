// using object literal
/*
var person={name:"sharanya",age:"23"}
person.name="charanya"
console.log(person)
console.log(person['age'])
*/

// using new keyword

/*
var person=new Object()
person.name="sharanya"
person.age=23
// console.log(person)
person.gender="female"
console.log(person)
console.log(person['gender'])
person.age=24
console.log(person)
delete person.age;
console.log(person)
*/

// methods

var obj={a:1,b:2,c:3,d:4,e:5}

// object.keys()
console.log(Object.keys(obj));

// object.values()
console.log(Object.values(obj))

// object.entries()
console.log(Object.entries(obj))

// object.assign()
const target={a:1,b:2}
const source={b:3,c:4}
Object.assign(target,source)
console.log(target)
