const { gql } = require('@apollo/client')
const { msUserCommandClient, msUserQueryClient } = require('../lib/apollo-client')

async function create(input) {
    
    const result = await msUserCommandClient.mutate({
        mutation: gql`
            mutation CreateUser($input: UserInput) {
                createUser(
                    input: $input
                ) {
                    id
                    firstName
                    lastName
                    email
                }
            }
        `,
        variables: { input }
    })

    return result    
}

async function update(id, input) {

    const result = await msUserCommandClient.mutate({
        mutation: gql`
            mutation UpdateUser($id: Int!, $input: UserInput!) {
                updateUser(
                    id: $id
                    input: $input
                ) {
                    id
                    firstName
                    lastName
                    email
                }
            }
        `,
        variables: { id, input }
    })

    return result
}

async function remove(id) {

    const result = await msUserCommandClient.mutate({
        mutation: gql`
            mutation RemoveUser($id: Int!) {
                removeUser(id: $id)
            }
        `,
        variables: { id }
    })

    return result
}

async function login(email, password) {

    const result = await msUserQueryClient.query({
        query: gql`
            query LoginUser($email: String!, $password: String!) {
                loginUser(
                    email: $email
                    password: $password
                ) {
                    id
                    firstName
                    lastName
                    email
                }
            }
        `,
        variables: { email, password }
    })

    return result
}

module.exports = {
    create,
    update,
    remove,
    login
}