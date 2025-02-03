import { caesarCipher } from '../js/caesarCipher';

test('shifts letters by 1', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('shifts letters by 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('handles wrapping from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('maintains case', () => {
    expect(caesarCipher('AbC', 1)).toBe('BcD');
});

test('does not shift non-alphabetic characters', () => {
    expect(caesarCipher('a.b,c!', 1)).toBe('b.c,d!');
});

test('handles negative shift', () => {
    expect(caesarCipher('bcd', -1)).toBe('abc');
});

test('handles large positive shift', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd');
});

test('handles large negative shift', () => {
    expect(caesarCipher('bcd', -27)).toBe('abc');
});