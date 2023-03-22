
import  express  from "express";
import router from "./routers/product";
import mongoose from "mongoose";
import cors from "cors"
// const express = require.express();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api" , router)

mongoose.connect("mongodb://127.0.0.1:27017/ASM")

export const viteNodeApp = app ;