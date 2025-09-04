# Banquet Health Case Challenge Environment Setup

The purpose of this repository is to test your environment setup for the Banquet Health interview.
None of the code in this repository is intended to be used in the interview itself.

## Prerequisites
```
- Docker
- node.js >= 20
- npm >= 10
```

## Setup

Make sure you are in the `case-challenge` directory of this repository

```
npm install
npm run db-up     # Start the Postgres container
npx prisma generate 
npx jest
```

If the unit tests are successful, you are ready to go!

## Optional DB Gui Setup

You can also optionally confirm that you are able to connect to the database via your preferred GUI.

- Host: 127.0.0.1
- Port: 5442 (not the default 5432, to avoid conflicts)
- Database: dev
- User: postgres
- Password: local
