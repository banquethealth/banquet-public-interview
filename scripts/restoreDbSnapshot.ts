import { PrismaClient } from "@prisma/client";
import { join } from "path"
import { adminDatabaseUrl, dbName, runCommand, seedDataDir } from "./utils"

// Need to connect to different database in order to drop the dev database
process.env.DATABASE_URL = adminDatabaseUrl

const db = new PrismaClient()

const resetDb = async () => {
    await db.$executeRawUnsafe(`DROP DATABASE IF EXISTS ${dbName} WITH (FORCE)`)
    await db.$executeRawUnsafe(`CREATE DATABASE ${dbName}`)
}

const resetDbFromSnapshot = async () => {
    const snapshotPath = join(seedDataDir, 'snapshot.sql')

    await resetDb()
    await runCommand(
        `docker compose -f docker/docker-compose.yml exec -T -e PGPASSWORD=local postgres pg_restore --host=127.0.0.1 -p 5432 --disable-triggers --dbname=${dbName} --username=postgres < "${snapshotPath}"`
    )
}

resetDbFromSnapshot()
    .then(() => {
        console.log('Database initialized successfully')
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
