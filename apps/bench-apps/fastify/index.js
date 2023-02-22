import Fastify from 'fastify'

const fastify = Fastify({ logger: true })
const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify.get('/', schema, function (req, res) {
  res.send({ message: 'hello from fastify serverless' })
})

fastify.listen({ port: 3000, host: '127.0.0.1' })