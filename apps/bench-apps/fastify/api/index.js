import Fastify from 'fastify'

const app = Fastify({ logger: true })
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

app.get('/', schema, function (req, res) {
  res.send({ message: 'hello from fastify serverless' })
})
export default async function handler(req, res) {
  await app.ready();
  app.server.emit('request', req, res);
}