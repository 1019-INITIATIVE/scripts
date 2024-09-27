import mysql from "mysql2/promise";


const pool = mysql.createPool({
    host: '172.17.0.2',
    user: 'root',
    database: '1019-community',
    password: 'passwd',
    waitForConnections: true,
    connectionLimit: 15,
    queueLimit: 0,
});

export default pool;
