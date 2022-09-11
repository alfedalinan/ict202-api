const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client')
const config = require('../../shared/config')
const fetch = require('cross-fetch')
const typeDefs = require('../typedefs/client')

const msUserCommandClient = new ApolloClient({
    link: new HttpLink({
        uri: config.MS_USER_COMMAND,
        fetch
    }),
    cache: new InMemoryCache(),
    typeDefs
})

const msUserQueryClient = new ApolloClient({
    link: new HttpLink({
        uri: config.MS_USER_QUERY,
        fetch
    }),
    cache: new InMemoryCache(),
    typeDefs
})

const msAccessClient = new ApolloClient({
    link: new HttpLink({
        uri: config.MS_ACCESS,
        fetch
    }),
    cache: new InMemoryCache(),
    typeDefs
})

module.exports = { msUserCommandClient, msUserQueryClient, msAccessClient }
