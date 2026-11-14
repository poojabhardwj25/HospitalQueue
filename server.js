const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./db');

dotenv.config();

connectDB();

const app=express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json({message:'Hospital Queue Sysytem API is running succesfully...'});
})

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`Server is running smoothly on port ${PORT}`);
})