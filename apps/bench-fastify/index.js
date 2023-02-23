const Fastify = require('fastify')

const app = Fastify()

app.get('/', (req, reply) => {
  reply.send({ message: 'hello from Fastify Server-based' })
})

app.listen({ port: process.env.PORT || 3000 }, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log(`Server listening on port ${process.env.PORT || 3000}`)
})