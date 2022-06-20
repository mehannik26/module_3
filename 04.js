// Создать класс Page с полями url, name и методами open() - выводящим "Переход на страницу <Название>: <url>".
// Экспортировать класс и создать два экземпляра в другом файле
class Page {
    _name
    _url
    constructor(name, url) {
        this._name = name
        this._url = url
    }
    open() {
        console.log(`Переход на страницу ${this._name}: ${this._url}`)
    }
}
const page = new Page("Yandex", "https://yandex.ru")
page.open()