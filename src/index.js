module.exports = {
    prueba(num1, num2) {
        if (typeof num2 == 'undefined') {
            return { error: 10 }
        }
        return `resultado: ${num1 + num2}`
    }
}
