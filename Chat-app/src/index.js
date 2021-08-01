const path=require('path')
const express=require('express')
const http=require('http')
const socketIO=require('socket.io')
const Filter=require('bad-words')
const app=express()
const server=http.createServer(app)
const io=socketIO(server)
const {generateMessage,generateLocationMessage}=require('./utils/messages')


const port=process.env.PORT||3000
const publicDirectorypath=path.join(__dirname,'../public')
app.use(express.static(publicDirectorypath))
let count=0



io.on('connection',(socket)=>{
    console.log('Das neue ist Socket Io')
    socket.emit('message',generateMessage('Willkommen'))
    socket.broadcast.emit('message',generateMessage('neuer User ist eingetreten im Chat'))
    socket.on('sendMessage',(message,callback)=>{
        const filter=new Filter()

        if(filter.isProfane(message)){
            return callback('Profanity nicht erlaubt')
        }
        io.emit('message',generateMessage(message))
        callback('Übermittelt')
    })
    socket.on('sendLocation',(coords,callback)=>{
        io.emit('locationMessage',generateLocationMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
callback()

    })
    socket.on('disconnect',()=>{
        io.emit('message',generateMessage('Jemand hat den Chat verlassen'))
    })

    // socket.emit('countUpdated',count)
    // socket.on('knopf',()=>{
    //     count++
    //     // socket.emit('countUpdated',count)
    // })

})
server.listen(port,()=>{
    
    
 console.log(`'server läuft'+${port}`);
    
})



// module.exports=app