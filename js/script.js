// const names = ["Asiya","Jemila","Martha","Deborah",["Oxblood","blue","pink","army-green",[1,2,8,0,true]]]
// console.log(names)
// console.log(names[0])
// console.log(names[4][4][3])
// const letters = ['w','y','s','a']
// console.log(letters)
// console.log(letters.length)
// console.log(letters.join())
// console.log(typeof letters.join(""))
// const name = "constantine"
// // console.log(name.split(""))
// let sentence = "Jemila is a good girl"
// console.log(sentence.split())
// console.log(sentence.split(""))
// console.log(sentence.split(" "))

// COMBINING ARRAYS AND LOOPS
// Challenge 1- print an array of numbers from 1 to 50
//  let numbers = []
//  for(let i = 1; i <= 50; i++) {
//    numbers.push(i)
//  } 
//  console.log(numbers)

// let counter = 1
// do {
//   numbers.push(counter)
//   counter += 1
// } while (counter <= 50)

// let counter = 1
// while (counter <= 50) {SVGAnimatedNumberList.push(counter)counter ++}


let numbers = []
for(let i = 1; i <= 50; i++) {
  numbers.unshift(i)
}
console.log(numbers)

