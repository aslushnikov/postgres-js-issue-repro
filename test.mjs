#!/usr/bin/env node
import postgres from 'postgres'
import fs from 'fs';
import pg from 'pg';

process.env.PGHOST = 'localhost';
process.env.PGPORT = 5432;
process.env.PGUSER = 'user';
process.env.PGPASSWORD = 'password';
process.env.PGDATABASE = 'postgres';

{
  const sql = postgres({ max: 1 });
  await sql.file('./bad.sql').then(() => {
    console.log('postgres.js: No error!');
  }).catch(e => {
    console.log('postgres.js: yes error!', e.message);
  });
  await sql.end();
}

{
  const client = new pg.Client();
  await client.connect();
  await client.query(fs.readFileSync('./bad.sql', 'utf8')).then(() => {
    console.log('node-postgress: No error!');
  }).catch(e => {
    console.log('node-postgers: yes error!', e.message);
  });;
  await client.end();
}

