import express from 'express'
// import router from './routes/index.js';
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/index.js';
import connectDB from './db/config.js';


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT
connectDB();

app.use("/api",router)

app.get("/rahul",(req,res)=>{
    res.status(200).json({message:"Hello world"})
})

app.listen(PORT,()=>{
    console.log(`Server started ${PORT}`)
})