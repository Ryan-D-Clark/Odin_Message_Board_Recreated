#! /usr/bin/env node

const { Client } = require("pg");
const dotenv = require('dotenv');
dotenv.config();

const connectionSring = process.env.CONNCECTIONSTRING


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 )
);

INSERT INTO usernames (username, message) 
VALUES
  ('Bryan', 'First message'),
  ('Odin', 'Second message'),
  ('Damon', 'Third message');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
  host: `${process.env.HOST}`,
  user: `${process.env.USER}`,
  database: `${process.env.DATABASE}`,
  password: `${process.env.PASSWORD}`,
  port: 5432
});
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();


