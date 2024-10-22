//singleton

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Manjil",
    "full name": "Manjil KC",
    [mySym]: "mykey1",
    age: 21,
    location:"Kathmandu",
    email: "apple123@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
JsUser.email = "chtgpt.com"
Object.freeze(JsUser)
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello USer");
}
JsUser.greeting = function(){
    console.log("Hello User");
}