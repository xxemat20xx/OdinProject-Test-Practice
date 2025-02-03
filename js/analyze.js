export function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array of numbers');
    }

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    };
}
console.log(analyzeArray([1, 2, 3, 4, 5]));