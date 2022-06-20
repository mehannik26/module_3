// Создать класс SearchEnginePage, который наследуется от Page(из предыдущей задачи) и реализует новый метод search(text) - который выводит "поиск по <NAME>: <text>"
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
class SearchEnginePage extends Page {
    _name
    constructor(name, url) {
        super(name, url)
        this._name = name
    }

    search(text) {
        console.log(`поиск по ${this._name}: ${text}`)
    }
}
const page = new SearchEnginePage("Yandex", "https://yandex.ru")
page.open()
page.search("car")