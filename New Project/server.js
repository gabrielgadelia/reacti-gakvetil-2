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
  app.post("/loginStudent", async (req, res) => {
    try {
      const { email, password, } = req.body;
      const sql = `
        INSERT INTO user
        (email, password, firstName, lastaName, phoneNumber, grade)
        VALUES (?, ?, ?, ?, ?, ?)
        `;
      const [rows] = await pool.query(sql, [email, password, ]);
      if (rows.length === 0) {
        return res.status(401).json({ message: "Invalid email or passcode" });
      }
      res.status(200).json({ message: "Student logged in", student: rows[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
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
