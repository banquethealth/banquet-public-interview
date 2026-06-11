import {PrismaClient} from "@prisma/client";
import { config } from "dotenv";

config({ quiet: true })

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Copy .env.example to .env before running the app or tests.')
}

export const db = new PrismaClient();
