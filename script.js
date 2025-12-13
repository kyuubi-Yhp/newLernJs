const cleanHandsOp = () => {
  console.log('start')

  function step(i, str) {
    console.log(i + ' ' + str);
  }
  step(1, 'испачкать')
  step(2, 'пойти мыть')
  step(3, 'помыть')
}

cleanHandsOp()

const secondFunc = (num) => {
return num + 2
}

const countSum = (a, b, callBack) => {
  res = a + callBack(b)
  return res
}

res = countSum(3, 5, secondFunc)
console.log(res)


const money = 5000
const expenses1 = 200
const expenses2 = 300

const sumExpenses = (exp1, exp2) => {
  let sumEx = exp1 + exp2
  return sumEx
}

const countTotal = (count, call) => {
  let total = count - call
  return total
}

console.log(countTotal(money, sumExpenses(expenses1,expenses2)))

const sendServer = (callFun) => {
  setTimeout(function() {
    console.log('вызов пошел')
    callFun()
  }, 2000)
}

const someFunc = () => {
  console.log('отаботала вторая функция')
}



sendServer(someFunc)
