const { ApolloServer } = require('apollo-server')
const typeDefs = require('./application/typedefs/server')
const resolvers = require('./application/resolvers')
const context = require('./application/lib/build-context')
const config = require('./shared/config')
const { formatResponse, formatError } = require('./application/lib/formatters')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    debug: config.DEBUG === 'true',
    formatError,
    formatResponse
})

server.listen({ port: config.SERVER_PORT })
      .then(({ url }) => {
        console.log(`Running at ${url}`)
      })

module.exports = server
