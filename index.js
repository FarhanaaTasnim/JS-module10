// 1. Count vowels
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
countVowels("Your Name") 
// Output: 4

// 2. Sorting
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}
sortNumbers([4, 1, 8, 3]) 
// Output: [1, 3, 4, 8]


// 3. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
 reverseString("hello")
// Output: "olleh"

// 4. Get the last element of an array
function getLastElement(arr) {
    return arr[arr.length - 1];
}
getLastElement([10, 20, 30, 40])
// Output: 40

// 5. Merge arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
mergeArrays([1, 2], [3, 4])
// Output: [1, 2, 3, 4]


// 6. Check if a string contains a space
function hasSpace(str) {
    return str.includes(' ');
}
hasSpace("Ostad Limited")
// Output: true

// 7. Check if a string is empty
function isEmptyString(str) {
    return str === '';
}
isEmptyString("")
// Output: true 
isEmptyString("Hello") 
// Output: false

// 8. Remove negative numbers from an array
function removeNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}
removeNegativeNumbers([-5, 2, -1, 6, 0])
// Output: [2, 6, 0]
