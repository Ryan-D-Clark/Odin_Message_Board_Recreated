#! /usr/bin/env node
const { Client } = require("pg");
const pool = require("./pool")
const dotenv = require('dotenv')
dotenv.config()

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 )
);

INSERT INTO messages (username, message) 
VALUES
  ('Bryan', 'First message'),
  ('Odin', 'Second message'),
  ('Damon', 'Third message');
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.env.RENDER_URL || process.env.DATABASE_URL,
    ssl: process.env.RENDER_URL ? true : false

  });
  try {
    await client.connect();
    console.log("Connected to database.");
    await client.query(SQL);
  } catch (error) {
    console.error("Error occured:", error);
  } finally {
    await client.end();
    console.log("Done.");
  }
}

main();


