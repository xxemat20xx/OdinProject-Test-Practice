const capitalize  = require('../js/capitalize');

describe('capitalize', () => {
    test('exists', () => {
      expect(capitalize).toBeDefined();
    });
    test('capitalized', ()=>{
        expect(capitalize('cat')).toBe('Cat');
    })
    test('unchanged', ()=>{
        expect(capitalize('Abc')).toBe('Abc');
    });
    test('empty', ()=>{
        expect(capitalize('')).toBe('');
    })
    test('single character', ()=>{
        expect(capitalize('a')).toBe('A');
    })
    test('no string throws', ()=>{
        expect(() => capitalize(5)).toThrow('Not a string');
    })
  });