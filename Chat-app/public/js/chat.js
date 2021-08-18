// const e = require("express")

// const { moveMessagePortToContext } = require("worker_threads")

const socket=io()



const $messageform=document.querySelector('#message')
const $messageforminput=document.querySelector('input')
const $messageformbuttton=document.querySelector('button')
const $messages=document.querySelector('#message')

// Templates
const messageTemplate=document.querySelector('#message-template').innerHTML
const locationMessageTemplate=document.querySelector('#location-message-template').innerHTML


socket.on('message',(message)=>{
    console.log(message)
    const html=Mustache.render(messageTemplate,{
        message:message.text,
        createdAt:moment(message.createdAt).format('hh:mm')
    })
    $messages.insertAdjacentHTML('beforeend',html)
})
socket.on('locationMessage',(message)=>{
    console.log(message)
    const html=Mustache.render(locationMessageTemplate,{
        url:message.url,
        createdAt:moment(message.createdAt).format('hh:mm')
    })
    $messages.insertAdjacentHTML('beforeend',html)
})

$messageform.addEventListener('submit',(e)=>{
    e.preventDefault()
    $messageformbuttton.setAttribute('disabled','disabled')

    const message=document.querySelector('#message')
    // const message=e.target.elements.message.value
    $messageforminput.value=''


    socket.emit('SendMessage',message,(error)=>{
        $messageformbuttton.removeAttribute('disabled')
        $messageforminput.value=''
        $messageforminput.focus()
        if(error){
            return console.log(error)
        }
        console.log('Die Nachricht wurde gesendet')
    })
})

document.querySelector('#standort').addEventListener('click',()=>{
    if(!navigator.geolocation){
        return alert('Wird in deinem Browser nicht unterstützt')

    }

    navigator.geolocation.getCurrentPosition((position)=>{
        // console.log(position)
        socket.emit('sendLocation',{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        },()=>{
            console.log('Standort geteilt')
        })

    })
})

// socket.on('countUpdated',(count)=>{
//     console.log('Count wurde aktuellisert',count)
// })

// document.querySelector('#knopf').addEventListener('click',()=>{
//     console.log('wurde angeklickt')
//     socket.emit('knopf')

// })