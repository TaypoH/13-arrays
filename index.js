// 1. 
/*
const array = [2, 5, 12, 53, 10];

for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
*/

// 2.
/*
let arr = [2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 2) continue;
  
  let isComposite = true;
  
  for (let j = 2; j <= j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      isComposite = false;
      break;
    }
  }
  
  if (isComposite) {
    console.log(arr[i]);
  }
}
*/

// 3. 
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
console.log(arr3);
*/

// 4.
/*
const arr = [6, 5, 4];

arr.reverse();
console.log(arr);
*/

// 5.
/*
const arr = [1, 2, 3];

arr.push(4, 5, 6);
console.log(arr);
*/

// 6.
/*
const arr = [7, 8, 9];

arr.unshift(1, 2, 3);
console.log(arr);
*/

// 7. 
/*
const arr = ['aaa', 'bbb', 'ccc'];

console.log(arr.shift());
console.log(arr);
*/

// 8. 
/*
const arr = ['aaa', 'bbb', 'ccc'];
 
console.log(arr.pop());
console.log(arr);
*/


// 9. 
/*
const arr = [9, 10, 11, 12, 13];

const arr2 = arr.splice(1, 4);
console.log(arr2);
*/

// 10.
/*
const arr = [1, 2, 3, 4, 5];

arr.splice(1, 2)
console.log(arr);
*/

// 11.
/*
const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.splice(2, 4);
console.log(arr2);
*/

// 12.
/*
const arr1 = [1, 2, 3, 4, 5];

arr1.splice(0, 1, 1, 'w', 'trtr');
arr1.splice(6, 1, 'vvv', 'a', 'hello');
console.log(arr1);
*/

// *

const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
const str1 = 'lorem ipsum dolor sit amet' // 9
const str2 = 'hello to you' // 6

function countVowels(str, vowelsArray) {
    let count = 0;
    
    for (i = 0; i < str.length; i++) {
        const letters = str[i];
        if (vowelsArray.includes(letters)) {
            count += 1;
        }
    }

    return count;
}

console.log(countVowels(str2, vowelsArray));