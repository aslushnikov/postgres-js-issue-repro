#!/usr/bin/env node
import postgres from 'postgres'
import fs from 'fs';
import pg from 'pg';

process.env.PGHOST = 'localhost';
process.env.PGPORT = 5432;
process.env.PGUSER = 'user';
process.env.PGPASSWORD = 'password';
process.env.PGDATABASE = 'postgres';

const sql = postgres({ max: 1 });
await sql.file('./bad.sql');
await sql.end();

/*
const client = new pg.Client();
await client.connect();
await client.query(fs.readFileSync('./bad.sql', 'utf8'));
await client.end();
*/
