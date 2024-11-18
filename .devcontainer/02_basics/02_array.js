const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["Batman","Robin","flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const all_new_heroes =[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

 console.log(Array .from("Hitesh"))
 console.log(Array .from({name : "Hitesh"}))

 let score1 = 100
 let score2 = 200
 let score3 = 300
 console.log(Array.of(score1,score2,score3))
 


 








