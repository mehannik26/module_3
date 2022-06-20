// Создать класс Calculator имеет 4 метода (add, sub, mul, div и getValue). Конструктор принимает опциональное начальное значение
// Объект должен поддерживать chain
// Пример (new Calculator()).add(5).sub(4).mul(6).div(2).getValue() // 3
class Calculator {
    n;
    constructor(i = 0) {
        this.n = i
    }
    add(num) {
        this.n += num
        return this
    }
    sub(num) {
        this.n -= num
        return this
    }
    mul(num) {
        this.n *= num
        return this
    }
    div(num) {
        this.n /= num
        return this
    }
    getValue() {
        return this.n
    }
}

const calc = new Calculator()
console.log(calc.add(5).sub(4).mul(6).div(2).getValue())