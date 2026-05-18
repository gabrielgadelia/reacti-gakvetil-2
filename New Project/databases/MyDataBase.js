import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Avozm!e9$9",
    database: "student_data",
    port: "3306",
  });

export default pool