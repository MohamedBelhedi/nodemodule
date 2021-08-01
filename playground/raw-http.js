const { request } = require('https')
const https=require('https')
const url= 'https://api.openweathermap.org/data/2.5/weather?q=Minden&units=metric&appid=d79fbd4a5a14ecfa252873616678f06e'


https.request(url,(response)=>{
     let data=''
    response.on('data',(chunk)=>{
        data=data+chunk.toString()
        console.log(chunk)
       


    })

    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body)

    })
    request.on('error',(error)=>{
        console.log('Error am Gange')
    })
    
})
// const res=response
    request.end();