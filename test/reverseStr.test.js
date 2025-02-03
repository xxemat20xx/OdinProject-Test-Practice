const { reverseString } = require('../js/reverseStr');

test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverses an empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverses a string with special characters', () => {
    expect(reverseString('!@# $%^')).toBe('^%$ #@!');
});

test('reverses a string with numbers', () => {
    expect(reverseString('12345')).toBe('54321');
});
test('throws an error if input is not a string', () => {
    expect(() => reverseString(12345)).toThrow('Input must be a string');
    expect(() => reverseString(null)).toThrow('Input must be a string');
    expect(() => reverseString(undefined)).toThrow('Input must be a string');
    expect(() => reverseString({})).toThrow('Input must be a string');
});