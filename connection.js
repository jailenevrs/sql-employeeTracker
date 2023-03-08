const mysql = require('mysql2')


const db = mysql.createConnection(
    {
        host: "localhost",
        user:"root",
        port:"8889",
        password:"root",
        database:"employees_db"
    },
)


module.exports = db;