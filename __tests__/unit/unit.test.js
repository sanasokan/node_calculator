import exp from '../../src/modules/calculation/util/exp';
import gcd from '../../src/modules/calculation/util/gcd';
import percentage from '../../src/modules/calculation/util/percentage';
describe('exp function', () => {
    test('exp function exists', () => {
        expect(exp).toBeDefined();
    });
    test('2 raised to the power of 3 is 8', () => {
        expect(exp(2, 3)).toBe(8);
    });
    test('5 raised to the power of 0 is 1', () => {
        expect(exp(5, 0)).toBe(1);
    });
    test('3 raised to the power of 2 is 9', () => {
        expect(exp(3, 2)).toBe(9);
    });
    test('1 raised to the power of 5 is 1', () => {
        expect(exp(1, 5)).toBe(1);
    });
    test('4 raised to the power of 1 is 4', () => {
        expect(exp(4, 1)).toBe(4);
    });
});
    // Greatest Common divisor
    describe('gcd function', () => {
        test('gcd function exists', () => {
            expect(gcd).toBeDefined();
        });
        test('gcd of 12 and 8 is 4', () => {
            expect(gcd(12, 8)).toBe(4);
        });
        test('gcd of 54 and 24 is 6', () => {
            expect(gcd(54, 24)).toBe(6);
        });
        test('gcd of 101 and 103 is 1 (co-prime numbers)', () => {
            expect(gcd(101, 103)).toBe(1);
        });
        test('gcd of 0 and 5 is 5', () => {
            expect(gcd(0, 5)).toBe(5);
        });
        test('gcd of 5 and 0 is 5', () => {
            expect(gcd(5, 0)).toBe(5);
        });
        test('gcd of 0 and 0 is 0', () => {
            expect(gcd(0, 0)).toBe(0);
        });
        test('gcd of negative numbers -48 and 18 is 6', () => {
            expect(gcd(-48, 18)).toBe(6);
        });
    });
    // percentage
describe('percentage function', () => {
    test('percentage function exists', () => {
        expect(percentage).toBeDefined();
    });
    test('50 is 50% of 100', () => {
        expect(percentage(50, 100)).toBe(50);
    });
    test('25 is 25% of 100', () => {
        expect(percentage(25, 100)).toBe(25);
    });
    test('0 is 0% of 100', () => {
        expect(percentage(0, 100)).toBe(0);
    });
    test('100 is 100% of 100', () => {
        expect(percentage(100, 100)).toBe(100);
    });
    test('50 is 50% of 200', () => {
        expect(percentage(50, 200)).toBe(25);
    });
    test('handling division by zero gracefully', () => {
        expect(percentage(50, 0)).toBe(Infinity); // or you might want to handle this differently
    });
    test('handling negative numbers', () => {
        expect(percentage(-50, 100)).toBe(-50);
    });
    test('handling both negative numerator and denominator', () => {
        expect(percentage(-50, -100)).toBe(50);
    });
});





















