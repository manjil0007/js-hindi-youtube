const name = "Manjil"
const repoCount = 50 
const gameName = new String('Manj-illl')

console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "      Manjeeel    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://manjil.com/Manjil%20KC"
console.log(url.replace('%20','-'))

console.log(url.includes('manjil'))
