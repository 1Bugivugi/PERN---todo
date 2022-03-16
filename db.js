const Pool = require('pg').Pool;

/**
 * By using Pool we can run queries with Postgres
 * @type {{}}
 */
const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
})

module.exports = pool;