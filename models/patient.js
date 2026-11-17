const mongoose=require('mongoose');

const patientSchema=new mongoose.Schema({
    tokenNumber:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:[true,'Full name is required']
    },
    age:{
        type:Number,
        required:[true,'Age is required']
    },
    symptoms:{
        type:String,
        required:[true,'Symptoms description is required']
    },
    urgencyLevel:{
        type:String,
        enum:['PENDING','CRITICAL','PRIORITY','ROUTINE'],
        default:'WAITING'
    },
    status:{
        type:String,
        enum:['WAITING','IN_CONSULTATION','COMPLETED'],
        default:'WAITING'
    }
},
    {
    timestamps:true
});

module.exports=mongoose.model('Patient',patientSchema);