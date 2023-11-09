import { PrismaClient } from '@prisma/client'
process.env.DATABASE_URL = 'file:./dev.db'
const prisma = new PrismaClient()
import {join} from "path"
import {parseCsv} from "./utils/parse"

const tablesToSeed = [
    'animal',
]


async function main() {
    // DELETE ALL DATA
    for(const table of tablesToSeed.slice().reverse()) {
        // @ts-ignore
        await prisma[table].deleteMany({})
    }

    for (const table of tablesToSeed) {
        const filePath = join(__dirname, 'rawData', `./${table}.csv`)
        const rawData = await parseCsv(filePath)
        // sqlite does not support createMany
        for (const row of rawData ) {
            // @ts-ignore
            await prisma[table].create({
                data: row
            })
        }
    }
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })