import {db} from "../src/db";

describe('countAnimals', () => {

    it('counts the number of animals', async () => {
        const ct = await db.animal.count()
        expect(ct).toBe(2)
    })
})
