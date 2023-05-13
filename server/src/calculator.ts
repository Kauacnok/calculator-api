export class CalculatorException {
	constructor() {}

	handleInputsNotNumber(number1: number, number2: number) {
		if ( isNaN(number1) || isNaN(number2) ) {
			throw new Error("The inputs must be numbers")	
		}
	}

	handleDivideByZero(number: number) {
		if ( number === 0 ) {
			throw new Error("Cannot divide by zero")	
		}
	}
}

export class Calculator {
	constructor(private calculatorException: CalculatorException) {}

	sum(number1: number, number2: number) {
		this.calculatorException.handleInputsNotNumber(number1, number2)
		return number1 + number2
	}

	subtract(number1: number, number2: number) {
		this.calculatorException.handleInputsNotNumber(number1, number2)
		return number1 - number2
	}

	multiply(number1: number, number2: number) {
		this.calculatorException.handleInputsNotNumber(number1, number2)
		return number1 * number2
	}

	divide(number1: number, number2: number) {
		this.calculatorException.handleInputsNotNumber(number1, number2)
		this.calculatorException.handleDivideByZero(number2)

		return number1 / number2
	}
}
