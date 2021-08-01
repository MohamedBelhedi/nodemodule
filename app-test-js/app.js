// const name=require('./einstellungen.js')
// const validator=require('validator')
// chalk farben für die console
const chalk=require('chalk');
const { demandOption } = require('yargs');
const yargs=require('yargs')
const notes=require('./einstellungen.js')

// const command=process.argv[2]

// Comment Customize Yarg version
yargs.version('1.1.0')
// console.log(process.argv)
// create add command
yargs.command({
    command:'add',
    describe:'Neue Node hinzufügen',
    builder:{
        title:{
            describe:'Note Titel',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'das ist body',
            demandOption:true,
            type:'string'
    
        }
    },
    handler:function(argv){
        // console.log('Title: ',+argv.title, 'body:'+argv.body)
        notes.addNote(argv.title,argv.body)
    }
    
});

// create remove Command

yargs.command({
    command:'remove',
    describe:'Löschn ',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'

        }
    },
    handler:function(argv){
       notes.removeNote(argv.title)
    }
});

yargs.command({
    command:'read',
    describe:'einlesen ',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('einlesen der note')
        notes.readNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'listen ',
    handler:function(){
        console.log('einlisten der note')
    }
})

//add,remove,read,list


console.log(yargs.argv)
// if (command==='add'){
//     console.log('Adding note')
// }else if(command==='remove'){
//     console.log('removing notes also löschen')
// }
// const test=require('../test.js')


// // const fs=require('fs')


// // // fs.writeFileSync('test.txt',"Hallo Ich bin Momo")
// // fs.appendFileSync('./test.txt','was geht bei dir')

// // const name='momo'
// const sum=add(4,-2)
// console.log(sum)

// const message=test()
// // console.log(message)

// // console.log(validator.isURL('rocketmail.com'))
// const log=console.log;

// log(chalk.greenBright.bold.italic.bgBlueBright('sucess'),chalk.red(sum),chalk.bgYellow.red(message))

// console.log(process.argv[0])

// const log=console.log;
// log(chalk.bgGreen(notes,' not removed'))