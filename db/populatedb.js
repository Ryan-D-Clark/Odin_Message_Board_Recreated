#! /usr/bin/env node

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
  await pool.connect();
  await pool.query(SQL);
  console.log("done");
};


main()


