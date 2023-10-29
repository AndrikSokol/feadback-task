require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 9090;

app.use(
  cors({
    credentials: true,
    origin: process.env.URL,
  })
);
app.get("/api/ping", async (req, res) => {
  res.json({
    status: "success",
    message: "Server is ready",
  });
});

app.post("/api/feedback", async (req, res) => {
  const fields = req.body.fields;
  if (!fields) {
    res.status(200).json({
      status: "success",
      msg: "Ваша заявка успешно отправлена",
    });
  } else {
    res.status(400).json({
      status: "error",
      fields,
    });
  }
});

app.post("/api/registration", async (req, res) => {
  const number = Math.floor(Math.random() * 2);
  if (number) {
    res.status(200).json();
  } else {
    res.status(400).json();
  }
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
