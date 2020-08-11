/////////////Xử lý số/////////////
//ex1
function sphericalVolume(radius) {
  return Math.PI* 4 / 3 * Math.pow(radius, 3)
}
console.log(sphericalVolume(60))
//ex2
function scopeSum(startingNumber, endingNumber) {
  let total = 0;
  for (let i = startingNumber; i < endingNumber; i++) {
    total += i;
  }
  return total
}
console.log(scopeSum(2, 9))
//ex3
function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++)    
    {if (num % i === 0) {return false;}}
  return num > 1;
}
console.log(isPrime(36))
//ex4
function primeSum(num) {
  let total = 0;
  for (let i = 1; i < num; i++) {
    if (isPrime(i)) {
      total +=i;
    }
  }
  return total
}
console.log(primeSum(36))
//ex5
function divisorSum(num) {
  let total = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) { 
      total += i + num / i;
    }
  }
  return total
}
console.log(divisorSum(6))
//////////////Xử lý Object//////////////
//ex1
function getKeyObject(obj) {
  return Object.keys(obj)
}
var user = {
    name : "Trương Minh Thúy",
    age : 25,
    email : 'support@techmaster.vn'
};
console.log(getKeyObject(user))
//ex2
function getValueObject(obj) {
  return Object.values(obj)
}
console.log(getValueObject(user))
//ex3
function checkPropExistence(obj, prop) {
  return obj.hasOwnProperty(prop)
}
console.log(checkPropExistence(user, "name"))
//ex4
function getLengthObject(obj) {
  return getKeyObject(obj).length
}
console.log(getLengthObject(user))
//ex5
function filterObject(arr) {
   return arr.filter(obj => obj['age'] > 25 && obj['isStatus'] === true)
}
userList = [{name:'ha', age: 45, isStatus: true}, {name:'ha', age: 12, isStatus: true}, {name:'ha', age: 45, isStatus: false}, 
{name:'hoang', age: 24, isStatus: true}, {name:'van', age: 11, isStatus: true},]
console.log(filterObject(userList))

function sortUser(arr) {
  return arr.sort((a, b) => { a['age'] - b['age']})
}
console.log(sortUser(userList))

