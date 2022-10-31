const arr = ['Islam', 'Magomed', 'Islam', 'Alvi', 'Anzor', 'Ahmad', 'Arthur', 'Johny', 'Silver']
let accumulator = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'A') {
        accumulator.push(arr[i])
    }
}
console.log(accumulator)