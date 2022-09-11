const server = require('../src')

describe('User E2E', () => {
    let id
    it('Create', async () => {
        const input = {
            firstName: "Alfed",
            lastName: "A",
            email: "alfed.a@test.com",
            password: "someKindOfPassword",
            role: 1
        }
        
        const result = await server.executeOperation({
            query: `
                mutation {
                    createUser(input: {
                        firstName: "${input.firstName}",
                        lastName: "${input.lastName}",
                        email: "${input.email}",
                        password: "${input.password}",
                        role: ${input.role}
                    }) {
                        id
                        firstName
                        lastName
                        email
                        role
                    }
                }
            `
        })

        expect(result).toBeTruthy()
        expect(result.id).toBeTruthy()
    })

    it('Update', async () => { })

    it('Remove', async () => { })
})