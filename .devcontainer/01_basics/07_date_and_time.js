//date 
let myDate = new Date()
console.log (myDate.toDateString())
console.log (myDate.toISOString())
console.log (myDate.toJSON())
console.log (myDate.toLocaleDateString())

//let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date(2023,0,23,5,5)
console.log (myCreatedDate.toDateString())

let myTimeStamp = Date.now
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

newDate.toLocaleString('default',{
    weekday:"long",
    
})


