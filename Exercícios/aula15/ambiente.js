let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num[5] = 5
num.push(6)
console.log(num.length)
num.sort()

console.log(num)

for (let i in num) {
    console.log(num[i])
}

let i = 0
console.log("---")

while (i < num.length) {
    console.log(num[i])
    i++
}