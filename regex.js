const validator = {
    validateEmail: (email) => {
        let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
       //  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(email)
    },
    validatePhone: (mobile) => {
        let mobileRegex = /[0-9]{10}$/
        return mobileRegex.test(mobile)
    },
    validateAlphaNumeric : (name) => {
        let alphaNumeric = /^[a-z0-9]+$/i
        return alphaNumeric.test(name)
    }
}

console.log(validator.validateEmail('WWEEE'))
console.log(validator.validateEmail('qwett45353535@gmail.com'))
console.log(validator.validateEmail('ert566@gmail.com'))
console.log(validator.validatePhone('1234567890'))
console.log(validator.validatePhone('ewrewtwg24'))
console.log(validator.validateAlphaNumeric('WWEEE'))
console.log(validator.validateAlphaNumeric('ewrewtwg24'))