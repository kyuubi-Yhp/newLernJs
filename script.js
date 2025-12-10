const title = 'lesson02'
const csreen = 'простые, сложные, интерактивные'
const scrinPrise = 22
const rollback = 10
const fullPrise = 155_500
const adaptive = true

console.log(typeof (title))
console.log(typeof (fullPrise))
console.log(typeof (adaptive))
console.log(csreen.length)
console.log(scrinPrise + ' ' + 'руб')
console.log(fullPrise + ' ' + 'руб')
console.log(csreen.split(', '))
console.log(fullPrise * (rollback / 100))


let num = 266219
let value = 123

let newValue = String(value)
console.log(newValue)

let arrayNumStr = newValue.split('')
let arrayNumNum = arrayNumStr.map(index => {
  return Number(index)
})

while (arrayNumNum.length) {
  let current = arrayNumNum.shift();
  let sum = current * num
  let sumStepen = sum ** 3
  let str = String(sumStepen).slice(0,2);
  console.log(sum)
  console.log(sumStepen)
  console.log(str);
}




console.log('----------------------------------')

const numm = 266219

const ar = 123

let srString = String(ar).split('')
let srNumm = srString.map(index => {
  return Number(index)
})


for (i = 0; i < srNumm.length; i++) {
  let current = srNumm[i]
  let summ = numm * current
  let summStep = summ ** 3
  let summStepTwoNum = summStep.toString().slice(0,2)

  console.log(summ)
  console.log(summStep)
  console.log(summStepTwoNum)
}

