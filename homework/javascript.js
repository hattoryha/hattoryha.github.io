//bai tap string
bai 1
function checkStringExist(str, subStr) {
  if (str.indexOf(subStr) === -1) {
return false
  } else { return true}
}
console.log(checkStringExist('haha dc lam', 'haha'))
//bai 2
function shortenString(str) {
let eight_elements = str.slice(0, 8);
return eight_elements + "..."
}
console.log(shortenString('Xin chào các bạn'))
//bai 3
function capitalizeFirtLetter (str) {
  return str.slice(0, 1).toUpperCase() + str.substring(1)
}
function capitalizeString(str) {
  lowcaseStr = str.toLowerCase();
  strArr = lowcaseStr.split(' ');
  let result = ""
  for ( let i = 0; i < strArr.length; i++) {
console.log(strArr[i])
    result = result + " " + capitalizeFirtLetter(strArr[i])
  }

  return result.trim()
}
//bai 4
function mulString(str) {
  let result = ""
  for (let i = 0; i < 10; i++) {
    result = result + str
  }
  return result
}
//bai 5
function repeatString(str) {
    let result = ""
  for (let i = 0; i < 10; i++) {
    if(i == 0) {
          result = str
    } else {result = result + "-" + str}
  }
  return result
}
//bai 6
function repeatString2(str, n) {
    let result = ""
  for (let i = 0; i < n; i++) {
    if(i == 0) {
          result = str
    } else {result = result + "-" + str}
  }
  return result
}
//bai 7
function reverseString(str) {
  let strArr = str.split("");
  let result = "";
  for(let i = 0; i < strArr.length; i++) {
    result = result + strArr[strArr.length - 1 -i]
  }
  return result
}
//bai 8
function checkStringCenter(str) {
  let reSpaceStr = str.replace(" ", "");
  let lowcaseStr = reSpaceStr.toLowerCase();
  if (reverseString(lowcaseStr) == lowcaseStr) {
    return true
  } else {return false}
}
//bai tap Array
//bai 1
function minNumbers(arr) {
  let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
    if (arr[i] - min < 0) {
      min = arr[i]
    }
  }
  return min
}
//bai 2
function maxNumbers(arr) {
  let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
    if (arr[i] - max > 0) {
      max = arr[i]
    }
  }
  return max
}
function max2Numbers(arr) {
  let max = maxNumbers(arr)
let subArr =  arr.filter((ele) => ele != max)
return maxNumbers(subArr)
}
//bai 3
function sortStudents(arr) {
  return arr.sort(function(a, b){return a-b})
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']))
//Bai 4
function specificSum() {
  let total = 0;
  for (let num = 0; num <= 100; num++) {
    if (num % 5 == 0) {
      total += num;
    }
  }
  return total
}
//Bai 5
function arrChange (arr) {
  let newArr = arr.filter((ele) => ele % 2 ===0)
  return newArr
}
//Bai 6
function modifyArr (arr) {
  function findMaxLength(arr) {
let maxLenth = arr[0].length
for (let i = 1; i < arr.length; i++) {
  if (maxLenth < arr[i].length) {
    maxLenth = arr[i].length
  }}
    return maxLenth
  }
  let maxLength = findMaxLength(arr);
  let newArr = arr.filter((ele) => ele.length === maxLength) 
  return newArr
}
let arr1 = ['aba', 'aa', 'ad', 'c', 'vcd']
console.log(modifyArr(arr1))