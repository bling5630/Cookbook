var jasmineTester = require('../src/calculator');

describe('Simple Total Test', function() {
    it('2+2=4', function() {
        var testObject = new jasmineTester({
            a: 2,
            b: 2
        });
        expect(testObject.total()).toEqual(4);
    });
});