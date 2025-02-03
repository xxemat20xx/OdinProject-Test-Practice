import { analyzeArray } from '../js/analyze';

describe('analyzeArray', () => {
    test('should return correct analysis for a valid array', () => {
        const result = analyzeArray([1, 2, 3, 4, 5]);
        expect(result).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });

    test('should throw an error for an empty array', () => {
        expect(() => analyzeArray([])).toThrow('Input must be a non-empty array of numbers');
    });

    test('should throw an error for a non-array input', () => {
        expect(() => analyzeArray('not an array')).toThrow('Input must be a non-empty array of numbers');
    });

    test('should return correct analysis for an array with negative numbers', () => {
        const result = analyzeArray([-1, -2, -3, -4, -5]);
        expect(result).toEqual({
            average: -3,
            min: -5,
            max: -1,
            length: 5
        });
    });

    test('should return correct analysis for an array with mixed positive and negative numbers', () => {
        const result = analyzeArray([-1, 2, -3, 4, -5]);
        expect(result).toEqual({
            average: -0.6,
            min: -5,
            max: 4,
            length: 5
        });
    });

    test('should return correct analysis for an array with a single number', () => {
        const result = analyzeArray([42]);
        expect(result).toEqual({
            average: 42,
            min: 42,
            max: 42,
            length: 1
        });
    });
});