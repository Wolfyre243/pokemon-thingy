// Import dependencies
// import * as pg from 'pg';
// const { Pool } = pg;
// import { PoolClient } from 'pg';
import pg from "pg";
const { Pool } = pg;
import secrets from '../secret.json' with { type: 'json' };

// Create a pool instance for PostgreSQL database connections

export const pool = new Pool({
    host: secrets.db_url,
    port: 5432,
    database: 'pokemon_db_lnc7',
    user: secrets.db_user,
    password: secrets.db_password,
    max: 20,
    idleTimeoutMillis: 30000, // Amount of time to keep the database open for connections
    connectionTimeoutMillis: 20000, // Amount of time to wait for a connection before timing out.
    ssl: true
});

export const getClient = async () => {
    const client: any = await pool.connect();
    
    const query = client.query;
    const release = client.release;
    // If a client is checked out for more than 5s, a leak is detected.
    const timeout = setTimeout(() => {
        console.error('Client has been checked out for over 5s.');
        console.error(`Last executed query by this client: ${client.lastQuery}`);
    }, 5000);

    // Monkey Patching (I have yet to figure out what this does exactly.)
    client.query = (...args: any[]) => {
        client.lastQuery = args;
        return query.apply(client, args); // Applies the 'query' function to 'client'.
    }
    client.release = () => {
        clearTimeout(timeout);
        client.query = query;
        client.release = release;
        return release.apply(client);
    }
    
    return client;
}