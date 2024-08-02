const mysql = require('mysql2/promise')
const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'databasePassword',
    database: 'nodeassign6'
})

module.exports = mysqlPool;