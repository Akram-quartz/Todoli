import express from 'express';
import { config } from 'dotenv'
import { connectDB, disconnectDB } from './config/db.js';

// import routes

import todoRoutes from "./routes/todoRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"

// define app and db

const app = express();
config();
connectDB();

// body parse middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// API routes

app.use('/todoit',todoRoutes)
app.use('/category',categoryRoutes)
app.use('/auth',authRoutes)


app.get('/', (req, res)=>{
    console.log("hi")
    res.json({message:"good moorning"})
});


const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
});


// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});