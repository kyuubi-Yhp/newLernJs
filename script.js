let title = prompt('как называется ваш проект', 'калкькулятор')
let screens = prompt('какие типы экранов нужны', 'простые, сложные, интерактивные')
let scrinPrise = Number(prompt('сколько стоит данная работа', '12000'))
let adaptive = confirm('нужен ли адаптив на сайте')
let rollback = 10
let fullPrise = scrinPrise

let service1 = prompt('какой тип доп услуги нужен', 'очистка базы данных')
let servicePrice1 = confirm(`стоить услуга: ${service1} , будет 2000`)
let service2 = prompt('какой тип доп услуги нужен', 'рефакторинг')
let servicePrice2 = confirm(`стоить услуга: ${service2} , будет 4000`)

let priceServi1 = servicePrice1 ? 5000 : 0
let priceServi2 = servicePrice2 ? 12000 : 0


fullPrise = priceServi1 + priceServi2 + fullPrise * rollback / 100

const getRollBackMassage = (prise) => {
  if (prise >= 30000) {
    prise = prise - prise * 0.10
    return 'скидка 10%'
  } else if (prise <= 30000 && prise >= 15000) {
    prise = prise - prise * 0.05
    return 'скидка 5%'
  } else if (prise < 15000) {
    return 'скидки нет'
  } else {
    return 'вышла ошибка'
  }
}


console.log(fullPrise, typeof fullPrise)
console.log(getRollBackMassage(fullPrise))






