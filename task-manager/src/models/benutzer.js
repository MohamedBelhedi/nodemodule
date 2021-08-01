const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Taks=require('./tasks')
const userSchema=new mongoose.Schema({
    Name:{
    type:String,
    trim:true
},Email:{
    type:String,
    unique:true,
    required:true,
    trim:true,
    lowercase:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw Error('Email es passt nicht')
        }

    }
},
Alter:{
    type:Number,
    default:0,
    validate(value){
        if(value<0){
            throw new Error('Alter muss eine Positive Zahl')
        }
    }
  },Passwort:{
      type:String,
      required:true,
      trim:true,
      minlength:7,
      lowercase:true,

     
      validate(value){
          if(value.includes('Passwort')){
              throw new Error('Passwort zu unsicher')
          }
}
},
tokens:[{
    token:{
        type:String,
        required:true
    }
}],
avatar:{
    type:Buffer
}
},{
    timestamps:true,

})
userSchema.virtual('tasks',{
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
})
// Passwörter verstecken
userSchema.methods.toJSON=function(){
    const benutzer=this
    const userObject=benutzer.toObject()
    delete userObject.Passwort
    delete userObject.token
        return userObject

}

userSchema.methods.generateAuthToken=async function(){
    const benutzer=this
    const token=jwt.sign({_id:benutzer._id.toString()},'dasistmeinprogramm')
    benutzer.tokens=benutzer.tokens.concat({token})
    await benutzer.save()
    return token
    

}

userSchema.statics.findByCredentials=async(Email,Passwort)=>{
    const benutzer=await Benutzer.findOnee({Email})
    if(!benutzer){
        throw new Error('Kann nicht eingeloggt werden')

    }

    const passt=await bcrypt.compare(Passwort,benutzer.Passwort)
    if(!passt){
        throw new Error('Kann nicht eingeloggt werden')
    }
    return benutzer
}

userSchema.pre('save', async function(next){
    const benutzer=this

    if(benutzer.isModified('Passwort')){
        benutzer.Passwort=await bcrypt.hash(benutzer.Passwort,8)

    }

    next()

})

userSchema.pre('remove',async function(next){
    const benutzer=this
    Taks.deleteMany({irgendetwas:benutzer._id})

    next()
})


const Benutzer=mongoose.model('Benutzer',userSchema)
    

    
    module.exports=Benutzer