const { compareSync } = require("bcryptjs");

const instaUser = new Object()

instaUser.id="123abc"
instaUser.name = "Sam"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email:"Some@gmmail.com",
    fullname:{
        userfullname:{
            firstname:"Manjil",
            lastname:"KC"
        }
    }
}

//console.log(regularUser.fullname)


const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}
const obj4 = { 3:"a", 4:"b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3)
const obj3 = {...obj1,...obj2}
//  console.log(obj3)

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:3,
        email:"m@gmail.com"
    }
]
console.log(users)
console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty("isLoggedIn"));




