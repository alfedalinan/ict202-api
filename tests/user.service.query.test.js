const { login } = require("../src/application/services/user.service")

describe('User', () => {

    it('Login', async () => {
        const email = 'alfed.a@test.com'
        const password = 'someKindOfPassword'

        const result = await login(email, password)

        expect(result).toBeTruthy()
        expect(result.data.loginUser.id).toBeTruthy()
        expect(result.data.loginUser.firstName).toBeTruthy()
        expect(result.data.loginUser.lastName).toBeTruthy()
        expect(result.data.loginUser.email).toEqual(email)
    })

})