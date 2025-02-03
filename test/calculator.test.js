import { Calculator } from '../js/calculator';

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should multiply two numbers correctly', () => {
        expect(calculator.multiple(2, 3)).toBe(6);
    });

    test('should divide two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });

    test('should throw an error for invalid input in add', () => {
        expect(() => calculator.add(2, 'a')).toThrow('Invalid input');
    });

    test('should throw an error for invalid input in subtract', () => {
        expect(() => calculator.subtract(2, 'a')).toThrow('Invalid input');
    });

    test('should throw an error for invalid input in multiple', () => {
        expect(() => calculator.multiple(2, 'a')).toThrow('Invalid input');
    });

    test('should throw an error for invalid input in divide', () => {
        expect(() => calculator.divide(2, 'a')).toThrow('Invalid input');
    });

    test('should handle division by zero', () => {
        expect(calculator.divide(6, 0)).toBe(Infinity);
    });
});