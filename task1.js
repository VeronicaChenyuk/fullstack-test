// У вас есть строка str с произвольным текстом, например:

var str = 'Hello World!'

// Необходимо подсчитать количество букв латинского алфавита
// (от a до z, не учитывая регистр). Какой наиболее простой способ вы можете предложить?
console.log('Hello World!'.match(/[A-Za-z]/g).length || []); //logs 3