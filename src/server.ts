import express from "express";
import "reflect-metadata";
import "./database";

const app = express();

app.get("/test", (req, res) => {
  res.status(200).send("ola");
});

app.listen(3000, () => console.log("server is running bitch!"));
