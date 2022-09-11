const { createToken, verifyToken } = require("../src/application/services/access.service")

describe('Access', () => {

    it('Generate Token', async () => {
        const input = {
            email: 'alfed.a@email.com',
            info: '{ role: 1 }'
        }

        const result = await createToken(input)

        expect(result).toBeTruthy()
        expect(result.data.generateToken.token).toBeTruthy()
        expect(result.data.generateToken.expiresIn).toBeTruthy()
    })

    it('Read Token', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZmVkLmFAZW1haWwuY29tIiwiaW5mbyI6Insgcm9sZTogMSB9IiwiaWF0IjoxNjYyODk3NDI0LCJleHAiOjE2NjI5MzM0MjR9.4BrpruFXlZCL8XlsZZVZn_KQMxdNe4vXBLg7zyibeJ8'

        const result = await verifyToken(token)
        
        expect(result).toBeTruthy()
        expect(result.data.readToken.email).toBeTruthy()
        expect(result.data.readToken.info).toBeTruthy()
    })
})