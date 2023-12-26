const mysql = require("mysql2/promise")

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST, //pegando variaveis de ambientes do .env para ninguem do github ver essas informações
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

module.exports = connection