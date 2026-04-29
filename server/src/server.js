import express from 'express';
import { config } from 'dotenv'
import { connectDB, disconnectDB } from '../config/db.js';

// import routes

import todoRoutes from "./routes/todoRoutes.js"

// define app and db

const app = express();
config();
connectDB();

// API routes

app.use('/todoit',todoRoutes)


app.get('/', (req, res)=>{
    console.log("hi")
    res.json({message:"good moorning"})
});


const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
});