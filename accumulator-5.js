const arr = [-1, -2, -4, 54, 3, 7, 12, 6, 9, 345]
let accumulatorEven = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        accumulatorEven.push(arr[i])
    }
}
console.log(accumulatorEven)