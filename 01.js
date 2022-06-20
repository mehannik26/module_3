// Написать функцию sum для суммирования всех переданных аргументов
function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr)
}
console.log(sum(1, 2, 3))