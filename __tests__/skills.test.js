const { calculateNumbers } = require('../skills');

test('adds two numbers correctly', () => {
    expect(calculateNumbers(1, 2)).toBe(3);
});

test('throws error when first argument is not a number', () => {
    expect(() => calculateNumbers('a', 2)).toThrow('Both arguments must be numbers');
});

test('throws error when second argument is not a number', () => {
    expect(() => calculateNumbers(1, 'b')).toThrow('Both arguments must be numbers');
});

test('throws error when both arguments are not numbers', () => {
    expect(() => calculateNumbers('a', 'b')).toThrow('Both arguments must be numbers');
});