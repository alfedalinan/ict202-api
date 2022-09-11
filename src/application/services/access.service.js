const { gql } = require("@apollo/client");
const { msAccessClient } = require("../lib/apollo-client");

async function createToken(input) {

    const result = await msAccessClient.mutate({
        mutation: gql`
            mutation GeneratToken($input: AccessInput) {
                generateToken(
                    input: $input
                ) {
                    token
                    expiresIn
                }
            }
        `,
        variables: { input }
    })

    return result
}

async function verifyToken(token) {

    const result = await msAccessClient.query({
        query: gql`
            query ReadToken($token: String) {
                readToken(token: $token) {
                    email
                    info
                }
            }
        `,
        variables: { token }
    })

    return result
}

module.exports = {
    createToken,
    verifyToken
}