import express from "express";
import mysql from "mysql2/promise";
import aouthRouter from "./routes/authenicationRoutes.js";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Avozm!e9$9",
  database: "student_data",
  port: "3306",
});

const app = express();
const port = 3000;

app.use(express.json());

app.post("/loginStudent", async (req, res) => {
  try {
    const { email, passcode } = req.body;
    const sql = "INSERT INTO student (email, passcode) VALUES (?, ?)";
    const [result] = await pool.query(sql, [email, passcode]);

    res.status(201).json({ message: "Student loged in", id: result.insertId });
  } catch (error) {
    console.log(error);
  }
});

app.post("/addStudent", async (req, res) => {
  try {
    const { email, passcode, firstName, lastaName, phoneNumber, grade } =
      req.body;
    const sql =
      "INSERT INTO student (email, passcode, firstName, lastaName, phoneNumber, grade) VALUES (?, ?, ?, ?, ?, ?)";
    const [result] = await pool.query(sql, [
      email,
      passcode,
      firstName,
      lastaName,
      phoneNumber,
      grade,
    ]);

    res.status(201).json({ message: "Student added", id: result.insertId });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("listening app at http://localhost:3000");
});
