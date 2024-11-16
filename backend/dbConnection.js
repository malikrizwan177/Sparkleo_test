import mysql from 'mysql2'

// MySQL connection
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'userdb'
});