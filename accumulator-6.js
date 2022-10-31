const arr = [-1, -2, -4, 54, 3, 7, 12, 6, 9, 345]
let accumulatorOdd = []
let i = 0
while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
        accumulatorOdd.push(arr[i])
    }
    i++
}
console.log(accumulatorOdd)