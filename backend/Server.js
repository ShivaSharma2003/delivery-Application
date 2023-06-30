import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import databaseconnection from "./database.js";
import mongoose from "mongoose";

const app = express();

dotenv.config();
cors()

databaseconnection();

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("open", () => {
  console.log("database Successfully connected");
});

app.get("/", (req, res) => {
  res.send("Hello World, This is swiggy clone backend...");
});

app.listen(process.env.PORT, () => {
  console.log(`Serving listing http://localhost:${process.env.PORT}`);
});
