import { FastifyRequest, FastifyReply } from 'fastify'

import { fastify } from './server'
import { Calculator, CalculatorException } from './calculator'

const calculator = new Calculator(new CalculatorException())

interface calculatorParams {
	Params: {
		number1: string,
		number2: string
	}
}

export async function routes() {
	fastify.get('/calculator/sum/:number1/:number2', async (req: FastifyRequest<calculatorParams>, res: FastifyReply) => {

		const { number1, number2 } = req.params

		const resultSum = calculator.sum(Number(number1), Number(number2))

    	return { 
    		number1: Number(number1),
    		number2: Number(number2),
    		resultSum
    	}
  	})

  	fastify.get('/calculator/subtract/:number1/:number2', async (req: FastifyRequest<calculatorParams>, res: FastifyReply) => {

		const { number1, number2 } = req.params

		const resultSubtract = calculator.subtract(Number(number1), Number(number2))

    	return { 
    		number1: Number(number1),
    		number2: Number(number2),
    		resultSubtract
    	}
  	})

  	fastify.get('/calculator/multiply/:number1/:number2', async (req: FastifyRequest<calculatorParams>, res: FastifyReply) => {

		const { number1, number2 } = req.params

		const resultMultiply = calculator.multiply(Number(number1), Number(number2))

    	return { 
    		number1: Number(number1),
    		number2: Number(number2),
    		resultMultiply
    	}
  	})

  	fastify.get('/calculator/divide/:number1/:number2', async (req: FastifyRequest<calculatorParams>, res: FastifyReply) => {

		const { number1, number2 } = req.params

		const resultDivide = calculator.divide(Number(number1), Number(number2))

    	return { 
    		number1: Number(number1),
    		number2: Number(number2),
    		resultDivide
    	}
  	})
}
