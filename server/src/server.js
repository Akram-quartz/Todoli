import express from 'express';

// import routes

import todoRoutes from "./routes/todoRoutes.js"

// define app

const app = express();

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