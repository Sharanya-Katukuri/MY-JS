// normal anonymous function

var greet= function(){
    console.log("good evening")
}
greet()

// parameterized  anonymous function

var student=function(Student_id,StudentName){
    console.log("student id is:"+Student_id)
    console.log("student name is:"+StudentName)
}
student(12,"sharanya")

// returned anonymous function

var demo=function(){
    console.log("hello,this is anonymous function ")
    return "this is returned function"
}
console.log(demo())

// anonymous arrow function
var time=function(){
    console.log("the time is 4:00pm")
   var date=()=>{
    console.log("hello the date is 24th october 2025")

}
date()
 
}
time()


// parametrized arrow anonymous function

var city=function(city){
    var country=(country)=>{
        console.log(city)
        console.log(country)
    }
    country("india")
}
city("hyderabad")