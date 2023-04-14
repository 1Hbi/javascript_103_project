let student = {
    name: 'Ali',
    age: 25
}
let {name: yourname, age: yourage} = student
console.log(yourname,yourage)


let numbers = [1,2,3,4,5]
let [first,second,...third] = numbers
console.log(first,second,third[0])


first = [1,2]
second = [3,4]
third = [...first, ...second]
console.log(third)

let Student = {
    name1: "salem",
    age: 18
}
let {name1,nickname = "unknown" } = Student
console.log(name1, nickname)