import numberCruncher from '../../src/modules/calculation/numberCruncher';
describe('numberCruncher integration tests', () => {
    // Positive test cases
    test('should add two numbers', () => {
        const result = numberCruncher({ numOne: '5', numTwo: '3', operator: 'add' });
        expect(result).toBe(8);
    });
    test('should subtract two numbers', () => {
        const result = numberCruncher({ numOne: '5', numTwo: '3', operator: 'subtract' });
        expect(result).toBe(2);
    });
    test('should multiply two numbers', () => {
        const result = numberCruncher({ numOne: '5', numTwo: '3', operator: 'multiply' });
        expect(result).toBe(15);
    });
    test('should divide two numbers', () => {
        const result = numberCruncher({ numOne: '6', numTwo: '3', operator: 'divide' });
        expect(result).toBe(2);
    });
    test('should calculate percentage', () => {
        const result = numberCruncher({ numOne: '50', numTwo: '200', operator: 'percentage' });
        expect(result).toBe(25);
    });
    test('should calculate exponent', () => {
        const result = numberCruncher({ numOne: '2', numTwo: '3', operator: 'exponent' });
        expect(result).toBe(8);
    });
    test('should calculate gcd', () => {
        const result = numberCruncher({ numOne: '54', numTwo: '24', operator: 'gcd' });
        expect(result).toBe(6);
    });
    test('should return null for unknown operation', () => {
        const result = numberCruncher({ numOne: '5', numTwo: '3', operator: 'unknown' });
        expect(result).toBeNull();
    });
    // Negative test cases
    test('should return null for non-numeric numOne', () => {
        const result = numberCruncher({ numOne: 'five', numTwo: '3', operator: 'add' });
        expect(result).toBeNaN();
    });
    test('should return null for non-numeric numTwo', () => {
        const result = numberCruncher({ numOne: '5', numTwo: 'three', operator: 'add' });
        expect(result).toBeNaN();
    });
    test('should return null for non-numeric inputs for gcd', () => {
        const result = numberCruncher({ numOne: 'abc', numTwo: 'xyz', operator: 'gcd' });
        expect(result).toBeNaN();
    });
    test('should return null for non-existent operator', () => {
        const result = numberCruncher({ numOne: '5', numTwo: '3', operator: 'nonexistent' });
        expect(result).toBeNull();
    });
    test('should return NaN for invalid division', () => {
        const result = numberCruncher({ numOne: '5', numTwo: '0', operator: 'divide' });
        expect(result).toBe(Infinity); // Division by zero should return Infinity
    });
    test('should handle empty inputs gracefully', () => {
        const result = numberCruncher({ numOne: '', numTwo: '', operator: 'add' });
        expect(result).toBeNaN();
    });
    test('should handle null inputs gracefully', () => {
        const result = numberCruncher({ numOne: null, numTwo: null, operator: 'add' });
        expect(result).toBeNaN();
    });
    test('should handle undefined inputs gracefully', () => {
        const result = numberCruncher({ numOne: undefined, numTwo: undefined, operator: 'add' });
        expect(result).toBeNaN();
    });
});









