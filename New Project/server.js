import express from "express";
import pool from "./databases/MyDataBase.js"
import aouthRouter from "./routes/authenicationRoutes.js";
import cors from "cors"
import bcrypt from 'bcrypt'


const app = express();
const port = 3000;

app.use(aouthRouter);
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}))

app.get("/", (req, res) => {
  res.send("Auth route working");
});

app.post("/addStudent", async (req, res) => {
  try {
    const { email, password, firstName, lastName, phoneNumber, grade, Nickname } =
      req.body;

      const hashedPassword = await bcrypt.hash(password, 10)

    const sql =
      "INSERT INTO user (email, password, firstName, lastName, phoneNumber, grade, Nickname) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [result] = await pool.query(sql, [
      email,
      hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      grade,
      Nickname
    ]);

    res.status(201).json({ message: "Student added", id: result.insertId });
  } catch (error) {
    console.log(error);
  }
});



app.post("/loginStudent", async (req, res) => {
  try {
    const { email, password } = req.body;

    const sql = `
      SELECT id, email, password
      FROM user
      WHERE email = ?
    `;

    const [rows] = await pool.query(sql, [email]);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    
    const user = rows[0]

    const isMatch = await bcrypt.compare(password, user.password)

    if (isMatch){
      return res.status(402).json({message: "email or password is incorect"})
    }

    res.status(200).json({
      message: "Student logged in",
      student: {
        id: user.id,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/provisions/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const sql = `
      SELECT * FROM provision WHERE id = ?
    `;

    const [rows] = await pool.query(sql, [id]);

    const provision = rows[0];
    res.status(200).json({ message: "Provision fetched", provision: provision });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(port, () => {
  console.log("listening app at http://localhost:3000");
});
