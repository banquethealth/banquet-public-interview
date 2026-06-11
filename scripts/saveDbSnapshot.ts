import { join } from "path"
import { dbName, runCommand, seedDataDir } from "./utils"

const saveDbSnapshot = async () => {
    const snapshotPath = join(seedDataDir, 'snapshot.sql')

    await runCommand(
        `npx prisma migrate reset --force`
    )
    await runCommand(
        `docker compose -f docker/docker-compose.yml exec -T -e PGPASSWORD=local -e TZ=America/New_York postgres pg_dump --host=127.0.0.1 -p 5432 --dbname=${dbName} --username=postgres --format=t > "${snapshotPath}"`
      )
}

saveDbSnapshot()
    .catch((err) => {
        console.error(err)
    })
