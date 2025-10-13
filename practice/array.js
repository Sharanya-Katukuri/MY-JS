// array:store multiple values in a single variable
// stores hetrogeneous elemtens(numbers,strings,booleans,objects,etc)

/*
// using variables
var a="sharanya"
var b=23
var c="female"

// using array
var arr=['sharanya',23,'female']
*/

// declaration of an array

// 1.using array literals:using square brackets[]


/*

//initializing array while declaring

var arr=["sharanya",23,'female'];
console.log(arr)
console.log(typeof(arr))
console.log(arr[1])


// declaring empty array and adding values using index

var arr1=[]
arr1[0]="sharanya"
arr1[1]=23
arr1[2]="female"
console.log(arr1)
console.log(arr1[2])


*/



// using array object/new keyword
// using new keyword along with built in array() method

/*

// empty array

var arr=new Array();
arr[0]=1234
arr[1]='sharanya'
arr[2]='female'
arr[3]= "warangal"
console.log(arr)
console.log(arr[3])

// declaring and initializing array at same time

var arr1=new Array('sharanya','warangal')
console.log(arr1)
console.log(arr1[0])

*/



// ARRAY METHODS

var arr=["sharanya",23,"harish",21,"chandu",24];

// push():add one or more elements at the end of the array

arr.push("siri")
arr.push(17)
console.log(arr)
arr.push('hasini',15)
console.log(arr)

// pop():removes the last element from the array

arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

// unshift():adds one or more elements at the start/begining of the array

arr.unshift("charanya")
console.log(arr)
arr.unshift("cherry",23)
console.log(arr)

// shift():removes the first element of the array

arr.shift()
console.log(arr)
arr.shift()
console.log(arr)

// indexOf():returns the index of a specified element or -1 if not found

console.log(arr.indexOf('sharanya'))
console.log(arr.indexOf(24))
console.log(arr.indexOf('chandu'))
console.log(arr.indexOf('sharu'))


// lenght:returns the number of elements in the array

console.log(arr.length)

// slice:returns a portion of an array as a new array

var subarray=arr.slice(1,4)
console.log(subarray)

// splice:adds/removes/replaces elements at a specific index

var arr1=[10,20,30,40,50]
arr1.splice(2,1,45)
console.log(arr1)
arr1.splice(3,2,55,65)
console.log(arr1)

// cancat():merges two or more arrays 

var array1=[1,2,3]
var array2=[4,5,6]
var array3=[7,8,9]
var merged=array1.concat(array2)
console.log(merged)
var main_array=array1.concat(array2,array3)
console.log(main_array)

// to string(): converts the array into a comma separated string
str=main_array.toString()
console.log(str);
console.log(typeof(str))

// join():joins array elements into astring with a specified separator

array5=main_array.join('-')
console.log(array5)

// includes():checks if an element exists in the array

console.log(main_array.includes(3));

// lastindexOf(): retrns the last occurrence of an element


var arrs=[1,2,3,4,2,1,5,1,2,5]

console.log(arrs.lastIndexOf(5));
console.log(arrs.lastIndexOf(2));
console.log(arrs.lastIndexOf(1));


var a=[1,5,6,4,2,8]
console.log(a.sort());
console.log(a.reverse());

// copyWithin():

var ar=[10,20,30,40,50];
ar.copyWithin(0,3);
console.log(ar)

// flat()

var arr2=['a','b','c','d','e',['f',['g',['h','i']]]];
var newarr1=arr2.flat(4);
console.log(newarr1)

// map()

var arry=[2,3,4,5,6,7,8]
var doubled=arry.map(function(x){return x*2;});
console.log(doubled)

// find()

var result=arry.find(function(x){return x>5;});
console.log(result)

// findIndex()

var index=arry.findIndex(function(x){return x>5;});
console.log(index)






