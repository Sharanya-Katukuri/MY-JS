var car={model:"maruthi",color:"blue",price:500000,cars:{car1:{model:"tata",color:"black"},car2:{model:"defender",color:"red"}}}
console.log(car)
car.speed="21kmph"
console.log(car)
console.log(car.model)
console.log(car.color)
console.log(car.price)
car.seats=8
console.log(car)
console.log(car.seats)
console.log(car.cars)
console.log(car.cars.car1)
console.log(car.cars.car2)
console.log(car.cars.car1.model)

// var arr1=[1,2,3,4,5]
// console.log(arr1)
// console.log(...arr1)
// var arr2=[...arr1]
// console.log(arr2)
// console.log(...arr2)

var obj1={name:"sharanya",age:"23",place:"warangal"}
var obj2={mail:"sharu@gmail.com",gender:"female"}
var obj={...obj1,...obj2}

console.log(obj)




