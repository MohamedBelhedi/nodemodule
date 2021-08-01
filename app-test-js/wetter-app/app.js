// time Sychronous
// const chalk =require('chalk')

// console.log('Starting')


// setTimeout(()=>{
//     console.log('2 sekunden Timer')

// }, 2000)
// setTimeout(()=>{
// console.log(chalk.green.inverse('Hallo ich bin ausgeben worden'))
// },0)

// console.log('stoping')

const request=require('request')
const chalk=require('chalk')
const geocode=require('../utils/geocode')
const forecast=require('../utils/forecast')



// const url='http://api.openweathermap.org/data/2.5/weather?q=Minden&units=metric&appid=d79fbd4a5a14ecfa252873616678f06e'

// request({url:url,json:true},(error,response)=>{
//     // const data=JSON.parse(response.body)
//     // console.log(data)
//     // console.log(response.body)
//     if(error){
//         console.log('Fehler in der Verbindung')
//     } else if(response.body.error){
//         console.log('Kann nicht gefunden werden')

    
//     }else{
//         console.log('alles Funktioniert wie es sein sollte')
//         console.log('Die Temperatur ist '+ Math.round(response.body.main.temp) + '°C'+ ' fühlt sich an wie '+ Math.round(response.body.main.feels_like)+' °C')
//     }

    
// })



// // Geodaten
// //Adresse-> Lat/long->Wetter


// const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/Mindenger.json?access_token=pk.eyJ1IjoibW9tb2dpZW5hayIsImEiOiJja3Bhd3VqdzEwNWRiMnZycjdqMXI5eWppIn0.rTjZKnYgpj3eIoiuES5IiQ&limit=1'


// request({url:url1,json:true},(error,response)=>{
   
//     if(error){
//         console.log('Fehler in der Verbindung')
//     } else if(response.body.error){
//         console.log('Kann nicht gefunden werden')
//     }else if(response.body.features.length===0){
//         console.log('location nicht gefunden')

    


    
//     }else{
//         const latitude=response.body.features[0].center[0]
//         const longtitude=response.body.features[0].center[1]
//         console.log('Latitude ist : '+ latitude,'longtitude: ' + longtitude)
//     }
//     // console.log(response.body.features.bbox)
    
    
// });




// const city='Minden'
// const country='ger'
// const street=''


geocode(address,(error,data)=>{
    // console.log('Error',error)
    console.log('Data',data)

})

// const search=document.getElementById('search').value
// geocode(search,(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data)

// })
