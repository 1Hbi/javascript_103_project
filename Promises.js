/*/console.log("start")
function userinfo(name , callback){
    setTimeout(() => {
        console.log("***user info received***")
        callback(name)
    }, 3000);
}

let userName = userinfo('Khalid', name => {
    console.log(`your name is ${name}`)
} )
console.log(userName)// without callback it will be undefind
console.log("end")
*/
console.log("start")
const newUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const userinfo = {
            name: 'Khalid',
            age: 11,
        }
        resolve(userinfo)
    }, 3000);
})
const addnewUser = userinfo =>{
    let userage = userinfo.age
    let adultage;
    if(userage >17){
        adultage = `${userinfo.name} is an adult`
        return Promise.resolve(adultage)
    }  else{
        adultage = `${userinfo.name} is not an adult`
        return Promise.reject(new Error(adultage))
    }
   
}
newUser
     .then(addnewUser)
     .then(res => {
     console.log("***user info received***")
     console.log(res)
})
     .catch(err  => {
        console.log(err.message)
     })
         console.log("end")