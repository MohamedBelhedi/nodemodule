const jwt=require('jsonwebtoken')
const Benutzer=require('../models/benutzer')

const auth =async(req,res,next)=>{
    try{
        const token=req.header('Authorization').replace('Bearer','')
        const decoded=jwt.verify(token,'dasistmeinprogramm')
        const benutzer=await Benutzer.findOne({_id:decoded._id,'tokens.token': token})

        if(!benutzer){
            throw new Error()
        }
        req.token=token
        req.benutzer=benutzer

        next()

    }catch(e){
        res.status(401).send({error:'Bitte Authorisieren'})

    }
}

   

module.exports=auth