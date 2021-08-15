import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.status(200).send("ola");
});

app.listen(3000, () => console.log("server is running bitch!"));
