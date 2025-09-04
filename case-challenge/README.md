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

Make sure you are in the `case-challenge` directory of this repository.  Wait a few seconds after running `npm run db-up` to give the docker container time to spin up.

```
npm install
npm run db-up     # Start the Postgres container
npm run test
npm run db-down   # Stop the postgres container
```

If the unit tests are successful, you are ready to go!

## Optional DB GUI Setup

You can also optionally confirm that you are able to connect to the database via your preferred GUI.  You must do this __before__ running `npm run db-down`.

- Host: 127.0.0.1
- Port: 5442 (not the default 5432, to avoid conflicts)
- Database: dev
- User: postgres
- Password: local

Sample Query:
select * from animals;
