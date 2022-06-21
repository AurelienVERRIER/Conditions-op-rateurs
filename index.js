const test = 143
const bis = 219
const limit = 150
const score = 64

if (score <= limit) {
  console.log("Ok good!") 
}

else {
  console.log("Oh, nooo...")
}

const password = "azerty"

if (password.length > 5) {
  console.log("the pasword is secure")
}
else {
  console.log("pasword is not secured")
}

if (score <= limit && password.length > 5){
  console.log("Everything is good")
}

else if (score <= limit || password.length > 5){
  console.log("Something is good")
}

else {
  console.log("Nothing is good")
}

const min = 1
const max = 6
const random = Math.floor(Math.random() * max) + min


if (random > 5) {
  console.log("Yes I win !")
}
else {
  console.log("So, close...")
}

let month = "October"

switch (month) {
  case "March":
    console.log("This is spring!")
    break;
  case "April":
    console.log("This is spring!")
    break;
  case "May":
    console.log("This is spring!")
    break;

  case "June":
    console.log("So hot, this summer!")
    break;
  case "July":
    console.log("So hot, this summer!")
    break;
  case "August":
    console.log("So hot, this summer!")
    break;
  
  case "September":
    console.log("Autumn is arrived...")
    break;
  case "October":
    console.log("Autumn is arrived...")
    break;
  case "November":
    console.log("Autumn is arrived...")
    break;

  case "December":
    console.log("Winter, so freezy!!")
    break;
  case "January":
    console.log("Winter, so freezy!!")
    break;
  case "February":
    console.log("Winter, so freezy!!")
    break;
  
  default:
    console.log("That is not a month")
}


const roundedNumer = 12.4
const difference = Math.ceil(roundedNumer) - Math.floor(roundedNumer)

if (difference > (1/2)) {
  console.log(Math.ceil(roundedNumer))
}
else {
  console.log(Math.floor(roundedNumer))
}
console.log(difference)