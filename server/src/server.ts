import Fastify from 'fastify'
import { routes }  from './routes'

export const fastify = Fastify({
	logger: true
})

fastify.register(routes)

async function listenServer() {
	try {
		await fastify.listen({ port: 3000 })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

listenServer()
