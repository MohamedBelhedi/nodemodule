const mongoose=require('mongoose')
const Benutzer=require('../models/benutzer')

const validator=require('validator')



mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false

})



const ich=new Benutzer({
   Name:'Mohamed',
   Email:'MOMO@rocketmail.com',
   Passwort:'Passwort123'
})

ich.save().then(()=>{
    console.log(ich)


}).catch((error)=>{
    console.log('Error',error)

})



const Aufgabe=mongoose.model('Aufgabe',{
    Aufgabe:{
        type:String
    },
    erledigt:{
        type:String
    }
})

const aufgaben=new Aufgabe({
    Aufgabe:'Wäsche Waschen',
    erledigt:true
})

aufgaben.save().then(()=>{
    console.log(aufgaben,'Daten wurden akzeptiert')

}).catch((error)=>{
    console.log('Fehler,Daten konnten nicht gespeichert werdem!',error)
})



  

module.exports=mongoose

