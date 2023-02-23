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
  res.send({ message: 'hello from fastify serverless edge' })
})
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
}