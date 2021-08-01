const express=require('express')
const auth=require('../middleware/auth')
const Task=require('../models/tasks')
const router=new express.Router()

router.get('/tasks',async(req,res)=>{
    try{
        const task=await Task.find({})
        res.send(task)
    }catch(e){
    res.status(404).send()

    }


    // Task.find().then((task)=>{
    //     res.send(task)

    // }).catch((e)=>{
    //     res.status(500).send()

    // })
  

})



router.get('/tasks/:id',auth,async(req,res)=>{
    const _id=req.params.id
    try{
        // const task=await Task.findById(_id)
        const task=await Task.findOne({_id,irgendetwas:req.user._id})
        if(!task){

                return res.status(404).send()
                }

    }catch(e){

    }

    // Benutzer.findById(_id).then((task)=>{
    //     if(!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)

    // }).catch((e)=>{
    //     res.status(500).send()

    // })
  

})

//GET/Tasks
router.get('/tasks',auth,async(req,res)=>{
    const match={}
    const sort={}
    if(req.query.fertig){
        match.fertig=req.query.fertig==='true'

    }
    if(req.query.sortBy){
        const parts=req.query.sortBy.split(':')
        sort[parts[0]]= parts[1]==='desc' ? -1 : 1

    }
    try{
        await req.benutzer.populate({
            path:'tasks',
            match,
            options:{
                // die Seiten Limit
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
                sort:{
                   completed:-1,

                }
            }
        }).execPopulate()
        res.send(req.benutzer.tasks)
    }catch(e){
        res.status(500).send()
    }
})


// router.post('/tasks',auth,async(req,res)=>{
//     // const task=new Task(req.body)
//     const task=new Task({
//         ...req.body,
//         irgendetwas:req.benutzer._id
//     })
//     try{
//         await task.save()
//         res.status(201).send(task)

//     }catch{
//         res.status(400).send(e)

//     }



    //     task.save().then(()=>{
//         res.status(201).send(task)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
//  })

 router.patch('/tasks/:id',auth,async(res,req)=>{
     const updates=Object.keys(req.body)
     const allowUpdates=['Name','email','Passwort','Alter']
     const isValidoperation=updates.every((update)=>allowUpdates.includes(update))
     try{
     if(isValidoperation){
         return res.status(400).send({error:'Update nicht möglich'})
     }
     const task=await Task.findById(req.params.id,req.body,{ new:true,runValidators:true})
     if(!task){
         return res.status(404).send()
     }
        res.send(task)
    }catch(e){
        res.status(400).send(e)

    }


 



 })

 router.delete('/tasks/:id',auth,async(req,res)=>{
    try{
        const task=await Task.findByIdAndDelete({_id:req.params.id,irgendetwas:req.benutzer._id})

        if(!task){
            return res.status(404).send()
        }

    }catch(e){
        res.status(500).send()

    }
})

module.exports=router