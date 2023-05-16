import Fastify from 'fastify'
import { routes }  from './routes'

export const fastify = Fastify({
	logger: true
})

fastify.register(routes)

const PORT = process.env.PORT! || 3000

async function listenServer() {
	try {
		await fastify.listen({ port: Number(PORT) })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

listenServer()
