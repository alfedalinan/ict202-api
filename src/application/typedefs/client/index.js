const readTypeDefs = require('../../lib/read-type-defs')
const { gql } = require('@apollo/client')
const userTypeDefs = readTypeDefs(`${__dirname}/user`)

const typeDefs = gql`
    type Query
    type Mutation
    ${userTypeDefs}
`

module.exports = typeDefs