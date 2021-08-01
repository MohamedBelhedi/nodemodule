const express=require('express')
const Benutzer = require('../models/benutzer')
const auth=require('../middleware/auth')

const router= new express.Router()
// const bcrypt=require('bcryptjs')


router.post('/benutzer', async (req, res) => {
    const benutzer = new Benutzer(req.body)

    try {
        await benutzer.save()
        const token = await benutzer.generateAuthToken()
        res.status(201).send({benutzer, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

// router.post('/benutzer',async(req,res)=>{
 
    // const benutzer= new Benutzer(req.body)
    // try{
    //     await benutzer.save()
    //     res.status(201).send(benutzer)

    // }catch(e){
    //     res.status(400).send(e)

    // }


    // benutzer.save().then(()=>{
    //     res.status(201).send(benutzer)

    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })

// })
router.post('/benutzer/login',async(req,res)=>{
   
    try{
        const benutzer=await Benutzer.findByCredentials(req.body.Email,req.body.Passwort)
        const token=await benutzer.generateAuthToken()
        res.send({benutzer:benutzer,token})
        console.log(req.body)

    }catch(e){
        res.status(400).send('Funktioniert nicht')

    }

})
router.post('/benutzer/logout',auth,async(req,res)=>{
    try{
        req.benutzer.tokens=req.benutzer.filter((token)=>{
            return token.token!=req.token
        })
        await req.benutzer.save()

    }catch(e){
        res.status(500).send()

    }
})
router.post('/benutzer/logoutAll',auth,async(req,res)=>{
    try{
        req.benutzer.tokens=[]
        await req.benutzer.save()
        res.send()

    }catch(e){
        res.status(500).send()

    }
})

router.get('/benutzer/me',auth,async(req,res)=>{
  res.send(req.benutzer)

    
//     Benutzer.find({}).then((benutzer)=>{
//         res.send(benutzer)
//     }).catch((e)=>{
//         res.status(500).send()

     })

router.get('/benutzer/:id', async(req,res)=>{
    const _id=req.params.id
    try{
        const benutzer=await Benutzer.findById(_id)
        if(!benutzer){
            return res.status(404).send()
        }

        res.send(benutzer)


    }catch(e){
        res.status(500).send()

    }

    // Benutzer.findById(_id).then((benutzer)=>{
    //     if(!benutzer){
    //         return res.status(404).send()
    //     }
    //     res.send(benutzer)

    // }).catch((e)=>{
    //     res.status(500).send()

     })
  

router.patch('/benutzer/me',auth,async(res,req)=>{
    const updates=Object.keys(req.body)
    const allowUpdates=['Name','Email','Passwort','Alter']
    const isValidoperation=updates.every((update)=>allowUpdates.includes(update))

    if(isValidoperation){
        return res.status(400).send({error:'update nicht möglich'})
    }


    try{

        // const benutzer=await Benutzer.findById(req.params.id,req.body,{ new:true,runValidators:true})
        // const benutzer=await Benutzer.findById(req.params.id)
            
            updates.forEach((update)=>req.benutzer[update]=req.body[update])
            await req.benutzer.save()
        // if(!benutzer){
        //     return res.status(404).send()
        // }
        res.send(req.benutzer)

    }catch(e){
        res.status(400).send(e)

    }


})


router.delete('/benutzer/me',auth,async(req,res)=>{
    try{
        // const benutzer=await Benutzer.findByIdAndDelete(req.benutzer._id)

        // if(!benutzer){
        //     return res.status(404).send()
        // }

        await req.benutzer.remove()
        res.send(req.benutzer)

    }catch(e){
        res.status(500).send()

    }
})

const multer=require('multer')
const upload=multer({
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        // if(!file.originalname.endsWith('.pdf')){
        if(!file.originalname.match(/\.(jpg|jpeg)$/)){
            return cb(new Error('Bitte eine JPG oder JPEG Datei hochladen'))

        }
        cb(undefined,true)
    }
})
router.post('/benutzer/me/avatar',auth,upload.single('avatar'),async(req,res)=>{
    req.user.avatar=req.file.buffer
    await req.benutzer.save()
    res.send()

},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})
// router.get('/test',(req,res)=>{
//     res.send('Das ist ein Test datei')
// })

router.delete('/benutzer/me/avatar',auth,async(req,res)=>{
    req.benutzer.avatar=undefined
    await req.benutzer.save()
    res.send()

},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})
module.exports=router