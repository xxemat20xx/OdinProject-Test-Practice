export class Calculator {
    add(num1, num2) {
        this.errorHandler(num1, num2);
        return num1 + num2;
    }
    subtract(num1, num2) {
        this.errorHandler(num1, num2);
        return num1 - num2;
    }
    multiple(num1, num2) {
        this.errorHandler(num1, num2);
        return num1 * num2;
    }
    divide(num1, num2) {
        this.errorHandler(num1, num2);
        return num1 / num2;
    }
    errorHandler(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Invalid input');
        }
    }
}
