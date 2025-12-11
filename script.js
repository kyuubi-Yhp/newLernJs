const title = prompt('как называется ваш проект', 'title')
const csreen = prompt('какие типы экранов нужны', 'простые, сложные, интерактивные')
const scrinPrise = Number(prompt('сколько стоит данная работа', '12000'))
const adaptive = confirm('нужен ли адаптив на сайте')
const rollback = 10
let fullPrise = 155_500


console.log(title)
console.log(fullPrise)
console.log(adaptive)
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
  let str = String(sumStepen).slice(0, 2);
  console.log(sum)
  console.log(sumStepen)
  console.log(str);
}


const service1 = prompt('какой тип доп услуги нужен', 'очистка базы данных')
const servicePrice1 = confirm(`стоить услуга: ${service1} , будет 2000`)
const service2 = prompt('какой тип доп услуги нужен', 'рефакторинг')
const servicePrice2 = confirm(`стоить услуга: ${service2} , будет 4000`)


let priceServi1 = servicePrice1 ? 2000 : 0
let priceServi2 = servicePrice2 ? 4000 : 0

console.log(priceServi1)
console.log(priceServi2)

fullPrise = priceServi1 + priceServi2 + fullPrise * rollback / 100
console.log(fullPrise)

fullPrise = 15000

if (fullPrise >= 30000) {
  fullPrise = fullPrise - fullPrise * 0.10
  console.log(fullPrise)
  console.log('скидка 10%')
} else if (fullPrise <= 30000 && fullPrise >= 15000) {
  fullPrise = fullPrise - fullPrise * 0.05
  console.log(fullPrise)
  console.log('скидка 5%')
} else if (fullPrise < 15000) {
  console.log(fullPrise)
  console.log('скидки нет')
} else {
  console.log('вышла ошибка')
}