
// Take an array of numbers and return the sum.
const array1 = [1,2,3,4,5,6]
const array2 = [7,8,9,10,11,12]
const array3 = [13,14,15,16,17,18]
// Take an array of numbers and return the average.
function arraySum (myArray) {
    return myArray.reduce ((a,b) => a + b)
}

console.log (` the sum of array1 is ${arraySum(array1)}`)
console.log (` the sum of array2 is ${arraySum(array2)}`)
console.log (` the sum of array3 is ${arraySum(array3)}`)


console.log (` the average of array1 is ${arrayAverage(array1)}`)
console.log (` the sum of array2 is ${arrayAverage(array2)}`)
console.log (` the sum of array3 is ${arrayAverage(array3)}`)

function arrayAverage(myArray) {

    const sum = myArray.reduce ((a,b) => a + b)
    return sum /myArray.length
}
// Take an array of strings and return the longest string.
const stringArray1 = ['green', 'is', 'my', 'favorite', 'color']
const stringArray2= ['your', 'pet', 'should', 'be', 'cool']
const stringArray3 = ['food', 'always', 'makes', 'me', 'happy']

function arrayLongest(myArray){
    return myArray.sort ((a, b) =>{

        if (a.length < b.lenght)
        return 2
    else 
    return -2
    }) [0]
}
// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
console.log(`the longest string in stringArray1 is ${arrayLongest(stringArray1)}`)
console.log(`the longest string in stringArray1 is ${arrayLongest(stringArray2)}`)
console.log(`the longest string in stringArray1 is ${arrayLongest(stringArray3)}`)


