const request = require('request')

const forecast = (city => {
    // const city=city
    const url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=d79fbd4a5a14ecfa252873616678f06e'

    
    request({url:url,json:true},(error,response)=>{
            // const data=JSON.parse(response.body)
            // console.log(data)
            console.log(response.main)
            if(error){
                response('Fehler in der Verbindung')
            } else if(response.main.error){
                console.log('Kann nicht gefunden werden')
        
            
            }else{
                response('alles Funktioniert wie es sein sollte')
                response(undefined,'Die Temperatur ist '+ Math.round(response.main.temp) + '°C'+ ' fühlt sich an wie '+ Math.round(response.main.feels_like)+' °C')
                console.log(undefined,'Die Temperatur ist '+ Math.round(response.main.temp) + '°C'+ ' fühlt sich an wie '+ Math.round(response.main.feels_like)+' °C')
            }
        
            
        })



    // der erste code
//     // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    // const url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=d79fbd4a5a14ecfa252873616678f06e'

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.coord[0] + ' It is currently ' + body.main.temp + '°C' )
//             // callback(undefined, body.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
    })

module.exports = forecast