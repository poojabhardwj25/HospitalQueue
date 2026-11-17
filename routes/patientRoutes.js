const express=require('express');
const router=express.Router();
const Patient=require('../models/patient');


router.post('/',async(req,res)=>{
    try{
        const newPatient=new Patient(req.body);
        const savedPatient=await newPatient.save();
        res.status(201).json({
            success:true,
            message:'Patient registered succesfully',
            data:savedPatient
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:'Failed to register patient',
            error:error.message
        });
    }
});

module.exports=router;