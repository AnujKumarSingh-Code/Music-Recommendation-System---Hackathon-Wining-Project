import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./src/routes/auth.js";
import { SongRouter } from "./src/routes/song.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/song",SongRouter);

mongoose.connect("mongodb+srv://pranshu007parashar:GojNLfK1RfHEM8qN@cluster0.a5grryn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>console.log("Connected to database"))
        .catch(()=>console.log("Could not connect"))

app.listen(3002, () => console.log("Server started"));