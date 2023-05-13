import Fastify from 'fastify'

const fastify = Fastify({
	logger: true
})

async function listenServer() {
	try {
		await fastify.listen({ port: 3000 })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

listenServer()
