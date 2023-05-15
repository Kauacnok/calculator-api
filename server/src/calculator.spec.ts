import { Calculator, CalculatorException } from './calculator'

const calculator = new Calculator(new CalculatorException())

describe('testing calculator', () => {
	it('should be to adds 1 + 2 to equal 3', () => {
		expect(calculator.sum(1, 2)).toBe(3)
	})

	it('should be to adds 3 + 2 to equal 5', () => {
		expect(calculator.sum(3, 2)).toBe(5)
	})

	it('should be to decrease 1 - 2 to equal -1', () => {
		expect(calculator.subtract(1, 2)).toBe(-1)
	})

	it('should be to decrease 2 - 2 to equal 0', () => {
		expect(calculator.subtract(2, 2)).toBe(0)
	})

	it('should be to multiply 1 * 2 to equal 2', () => {
		expect(calculator.multiply(1, 2)).toBe(2)
	})

	it('should be to multiply 2 * 2 to equal 4', () => {
		expect(calculator.multiply(2, 2)).toBe(4)
	})

	it('should be to divide 1 / 2 to equal 0.5', () => {
		expect(calculator.divide(1, 2)).toBe(0.5)
	})

	it('should be to divide 2 / 2 to equal 1', () => {
		expect(calculator.divide(2, 2)).toBe(1)
	})
})


test('it should not be possible to divide a number by zero', () => {
	expect(() => calculator.divide(2, 0)).toThrow("Cannot divide by zero")
})

test('it should not be possible to do a mathematical calculation if the inputs are not numbers', () => {
	expect(() => calculator.sum(2, Number("test"))).toThrow("The inputs must be numbers")
	expect(() => calculator.subtract(Number("test"), 0)).toThrow("The inputs must be numbers")
	expect(() => calculator.multiply(2, Number("test"))).toThrow("The inputs must be numbers")
	expect(() => calculator.divide(Number("test"), 0)).toThrow("The inputs must be numbers")
})
