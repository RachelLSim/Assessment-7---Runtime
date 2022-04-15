// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

let result = false

const addToZero = (array) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++){
            if (array[i] + array[j] === 0 && i != j){
                result = true
            }
        }
    }
}

addToZero([1, 2, 3, -2]);

console.log(result)

//

////2) Unique Chars
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

  const hasUniqueChars = (str) => {
    let chars = []
    let arr = str.split('')
    for(let i = 0; i < arr.length; i++){
      if(chars[arr[i]]) {
        return false
      } else {
        chars[arr[i]] = 1
      }
    } return true
  }
console.log(hasUniqueChars('asdfghjkl;'))

//3) Pangram Sentence
