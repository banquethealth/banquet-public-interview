import { db } from "../src/db"

describe('example tests', () => {

    it('tests utilize the seed data too', async () => {
        const animals = await db.animal.findMany()
        expect(animals.length).toBe(2)
        await db.animal.deleteMany()
        const animalsAfter = await db.animal.findMany()
        expect(animalsAfter.length).toBe(0)
    })

    it('the seed data is reset before each test', async () => {
        const animals = await db.animal.findMany()
        expect(animals.length).toBe(2)
    })
})
