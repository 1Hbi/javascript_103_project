
//replace and search witf regular expressions
const a = 'I love javascript'
const b = /javascript/
let c = a.search(/javascript/)
console.log(c)
let newStr = a.replace(b, 'Kotlin')
console.log(newStr)
//match
const d = "A regular expression (shortened as regex or regexp; sometimes referred to as rational expression) is a sequence of characters that specifies a match pattern in text. Usually such patterns are used by string-searching algorithms for find or find and replace operations on strings, or for input validation."
let myregex= d.match(/or/g)
console.log(myregex)
console.log(myregex.length)
