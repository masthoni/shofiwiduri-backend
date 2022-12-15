const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'hahdnisemzeqaq',
    host: 'ec2-52-22-136-117.compute-1.amazonaws.com',
    database: 'de8mjjvltehti7',
    password: 'b2b45923de138b098b60a284c49a3fe641891ba23aee5fe3cfb979586489891d',
    port: 5432,
    dialect: "postgres",
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
