const express=require('express')
require('./db/mongoose')
const Benutzer=require('./models/benutzer')
const Task=require('./models/tasks')
const app=express()
const port=process.env.PORT||3000
const multer=require('multer')
const upload=multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        // if(!file.originalname.endsWith('.pdf')){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Bitte eine Word Datei hochladen'))

        }
        cb(undefined,true)

        // cb(new Error('Die Datei muss ein PDF Datein sein'))
        // cd(undefined,true)
        // cb(undefined,false)

    }
})
// const errorMiddleware=(req,res,next)=>{
//     throw new Error('Von meiner Middleware')
// }

app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('Abrufen nicht möglich')

//     }else{
//         next()
//     }

// }) 

// app.use((req,res,next)=>{
//     res.status(503).send('Server wird gewartet')
// })
app.use(express.json())
// const router=new express.Router()
// router.get('/test',(req,res)=>{
//     res.send('Das ist ein Test ')
// })
const routerBenutzer=require('./routers/benutzer')
app.use(routerBenutzer)

const routerTask=require('./routers/tasks')
const { response } = require('express')
app.use(routerTask)





app.listen(port,()=>{
    console.log('server läuft'+port)
})
// const Task=require('./models/tasks')
// const main=async()=>{
//     const tasks=await Task.findById('')
//     await tasks.populate('owner').execPopulate()
//     console.log(tasks.owner)

// }
// main()
// const pet={
//     Name:'Haily'

// }

// pet.toJSON=function(){
//     console.log(this)
//     return this
// }


// console.log(JSON.stringify(pet))
// const bcrypt=require('bcryptjs')
// const jwt=require('jsonwebtoken')

// const myFunction=async()=>{
//     const token=jwt.sign({ _id:'abc123' },'dasistmeinporgramm',{expiresIn:'7 days'})
//     console.log(token)
//    const data= jwt.verify(token,'dasistmeinporgramm')
//    console.log(data)


//     const passwort='rot1223454!'
//     // 8 Runde sind gut für eine Hash nicht zu viele nicht zu wenig zu unsicher
//     const hashedpasswort=await bcrypt.hash(passwort,8)

//     console.log(passwort)
//     console.log(hashedpasswort)

//     const passt=await bcrypt.compare('rot1223454!',hashedpasswort)
//     console.log(passt)


// }

// myFunction()