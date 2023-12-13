const validation = { // обект валидации
    userName : { // объект элемента формы 
        str : '', // свойство для хранения значения input 
        valid :  false, // отображает , валидна ли строка записанная в input
        validation : function () { // метод для проверки строки для дальнешего изменения поля valid
            return this.str.length >= 2 && this.str.length <= 10
        },
    },
    contact : {
        str : '',
        valid : false,
        validation : function () {
            return this.str.includes('@')
        },
    },
    message : {
        str : '',
        valid : false,
        validation : function () {
            return this.str.length > 0
        }
    }
}

export default validation