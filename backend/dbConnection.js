import mysql from 'mysql2'

// MySQL connection
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_mysql_password', // Replace with your MySQL password
    database: 'userdb'
});