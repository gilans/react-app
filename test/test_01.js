var assert = require('chai').assert;
const { prueba } = require('./../src')

describe("Prueba de calculadora sumar con mocha y chai: ", function () {
    describe("chequeo de modulo test: ", function () {
        let num1 = 5
        let num2 = 6
        it("Check the returned value using: assert.equal(value,'value'): ", function () {
            result = prueba(num1, num2);

            assert.equal(result, `resultado: ${num1 + num2}`);
           //061963715

        });

        it("Check the returned value using: assert.typeOf(value,'value'): ", function () {

            result = prueba(num1,num2);

            assert.typeOf(result, "string");

        });
        /*
                it("Check the returned value using: assert.lengthOf(value,'value'): ", function () {
        
                    result = calculator.addTested("text");
        
                    assert.lengthOf(result, 11);
        
                }); */

    });
});
