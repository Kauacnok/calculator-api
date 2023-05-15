import request from 'supertest'
import { fastify } from './server'

describe('testing application routes', () => {

	beforeAll(async () => {
		await fastify.ready()
	})

	afterAll(async () => {
		await fastify.close()
	})

	const url = process.env.API_URL!
	
	it('should be return the correct sum of two numbers', async () => {
		const number1 = 5
		const number2 = 10
		const response = await request(url).get(`/calculator/sum/${number1}/${number2}`)
		
		expect(response.status).toBe(200)
		expect(response.body.resultSum).toBe(number1 + number2)
	})
	it('should be return the correct subtraction of two numbers', async () => {
		const number1 = 4
		const number2 = 9

		const response = await request(url).get(`/calculator/subtract/${number1}/${number2}`)
		
		expect(response.status).toBe(200)
		expect(response.body.resultSubtract).toBe(number1 - number2)
	})
	it('should be return the correct multiplication of two numbers', async () => {
		const number1 = 5
		const number2 = 14

		const response = await request(url).get(`/calculator/multiply/${number1}/${number2}`)
		
		expect(response.status).toBe(200)
		expect(response.body.resultMultiply).toBe(number1 * number2)
	})
	it('should be return the correct division of two numbers', async () => {
		const number1 = 4
		const number2 = 2
		const response = await request(url).get(`/calculator/divide/${number1}/${number2}`)
		
		expect(response.status).toBe(200)
		expect(response.body.resultDivide).toBe(number1 / number2)
	})
})
