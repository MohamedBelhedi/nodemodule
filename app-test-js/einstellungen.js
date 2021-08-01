// console.log('einstellugen.js')
const fs=require('fs')
const chalk=require('chalk')
const { bgGreen } = require('chalk')
// const name= "MOMOgie"
// const add=function(a,b){
    
//     return a+b;
// }
const getNotes=function(){
    return 'your notes'
}
const addNote=(title,body)=> {
    const notes=loadNotes()
    // const duplizierenNotes=notes.filter((note)=>note.titel===title)
    const duplizierenNote=notes.find((note)=>note.title===title)

    // debugger
    // dann chrome aufmachen und eintippen chrome://inspect/#devices
    // const duplizierenNotes=notes.filter(function(note){
    //     return note.title===title

    // })

    if(!duplizierenNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('neu Hinzugefügt'))

    }else{
        console.log(chalk.red.inverse('Note wurde schon vergeben'))
    }
  

}



const removeNote=function(title){
    const notes=loadNotes()
    const noteToKeep=notes.filter(function(note){
        return note.title!==title
    })

    if(notes.length>noteToKeep.length){
       console.log(chalk.green.inverse('wurde gelöscht'))

    }else{
        console.log(chalk.red.inverse('wurde nicht gefunden'))
    }


    saveNotes(noteToKeep)

}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('your Notes'))
    note.forEach((notes)=>{
        console.log(note.title)
    })
}

const readNote=(title)=>{
   const notes=loadNotes()
   const note=notes.find((note)=>note.title===title)

   if(note){
       console.log(chalk.inverse(note.title))
       console.log(note.body)

   }else{
       console.log(chalk.red.inverse('nicht gefunden'))

   }
}

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=function(){
    try{
        const datapuffer=fs.readFileSync('notes.json')
        const dataJSON=datapuffer.toString()
        return JSON.parse(dataJSON)

    }catch(e){
        return[]

    }
  
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    readNote:readNote,
}