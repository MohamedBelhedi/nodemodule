const mongoose=require('mongoose')
// const Aufgabe=require('../routers/tasks')
const validator=require('validator')
// const Task=mongoose.model('Task',{
const taskSchema= new mongoose.Schema({
    Aufgabe:{
        type:String,
        trim:true
    },
    irgendetwas:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Benutzer'
    }
    },{
        timestamps:true,
    })
    
    const Task= mongoose.model('Task',taskSchema)

  

    
    module.exports=Task