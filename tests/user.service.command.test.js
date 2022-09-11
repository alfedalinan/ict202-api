const { create, update, remove } = require('../src/application/services/user.service')

describe('User', () => {
    let id
    it('Create', async () => {

        const data = {
            firstName: "Alfed",
            lastName: "A",
            email: "alfed.a@test.com",
            password: "someKindOfPassword",
            role: 1
        }

        const result = await create(data)
        
        expect(result.data.createUser.id).toBeTruthy()
        expect(result.data.createUser.firstName).toBeTruthy()
        expect(result.data.createUser.lastName).toBeTruthy()
        expect(result.data.createUser.email).toBeTruthy()

        id = result.data.createUser.id
    })

    it('Update', async () => {
        const data = {
            firstName: "Alfeds",
            lastName: "Al",
            email: "alfeds.al@test.com"
        }

        const result = await update(id, data)

        expect(result.data.updateUser.id).toBeTruthy()
        expect(result.data.updateUser.firstName).toEqual(data.firstName)
        expect(result.data.updateUser.lastName).toEqual(data.lastName)
        expect(result.data.updateUser.email).toEqual(data.email)
    })

    it('Delete', async () => {

        const result = await remove(id)

        expect(result.data.removeUser).toBeTruthy()

    })
})