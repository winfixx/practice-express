const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: '327745',
    host: 'localhost',
    port: 5432,
    database: 'practic_2'
})

module.exports = pool