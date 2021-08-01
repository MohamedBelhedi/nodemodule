// console.log('Hallo')
// global.fetch = require("node-fetch");

// const fetch = require('fetch')
// window.fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



const wetterForm=document.querySelector('form')
const sucheElement=document.querySelector('input')
const nachricht=document.querySelector('#message1')
const nachricht2=document.querySelector('#message2')
// nachricht.textContent='from js'

wetterForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const location=sucheElement.value

    nachricht.textContent='Lädt......'
    nachricht2.textContent=''



    window.fetch('http://localhost:3000/wetter?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            nachricht.textContent=data.error
            // console.log(data.error)
        }else{
            nachricht.textContent=data.location
            nachricht2.textContent=data.forecast
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

})