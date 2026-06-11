import { exec } from "child_process"
import { join } from "path"
import { config } from "dotenv"

config({ quiet: true })

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Copy .env.example to .env before running database scripts.')
}

if (!process.env.ADMIN_DATABASE_URL) {
  throw new Error('ADMIN_DATABASE_URL is not set. Copy .env.example to .env before running database scripts.')
}

if (!process.env.DATABASE_NAME) {
  throw new Error('DATABASE_NAME is not set. Copy .env.example to .env before running database scripts.')
}

export const seedDataDir = join(__dirname, '../prisma/seed/rawData')

export const dbName = process.env.DATABASE_NAME
export const adminDatabaseUrl = process.env.ADMIN_DATABASE_URL

export const runCommand = (
    command: string,
    options = {
      maxBuffer: 1024 * 10000, // https://stackoverflow.com/a/65248598
    }
  ) => {
    return new Promise((resolve, reject) => {
      exec(command, options, (err, stdout) => {
        if (err) {
          reject(err)
          return
        }
        resolve(stdout)
      })
    })
}
