import express from "express";

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not Found",
    statusCode: 404,
  });
});

app.listen(PORT, console.log("This app is running on port 5000"));
