import express, { json } from "express";
import "dotenv/config";

const app = express();

app.use(json());

export default app;