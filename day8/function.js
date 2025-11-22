// arrow function:
// ---the function without function name and function keyword
// syntax
// ()=>{
    // block of code
// }

// var place=()=>{
//     console.log("warangal")
//     // document.write("hyderabad")
// }
// place();

// this function introduced in 6th  version

// arrow function
var greet=()=>{
    console.log("good afternoon")
}
greet()


// parametrized arrow function
var add=(a,b)=>{
    console.log("sum of two numbers:",a+b)
}
add(15,9)

// parametrized retruned arrow function
var operation=(x,y)=>{
    console.log(x-y)
    return x*y
}
console.log(operation(10,5))

// returned arrow function

var number=()=>{
    var a=10
    return a

}
console.log(number())