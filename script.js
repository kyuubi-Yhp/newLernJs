const title = 1
const csreen = 1
const scrinPrise = 1
const rollback = 1
const fullPrise = 1
const adaptive = 1

console.log(121123)

let namePrompt = prompt('Введите ваше имя');

while (
  namePrompt === null ||             // Нажали "Отмена"
  namePrompt.trim() === '' ||        // Пусто или пробелы
  /\d/.test(namePrompt)              // Есть цифры
) {
  alert('Имя не может быть пустым, состоять из пробелов или содержать цифры.');
  namePrompt = prompt('Введите ваше имя');
}
alert(`Отлично, ${namePrompt}!`);
