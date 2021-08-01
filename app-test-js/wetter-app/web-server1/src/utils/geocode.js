const request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibW9tb2dpZW5hayIsImEiOiJja3Bhd3VqdzEwNWRiMnZycjdqMXI5eWppIn0.rTjZKnYgpj3eIoiuES5IiQ&limit=1'

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Keine Verbindung zu Server',undefined)
        }else if(response.body.features.length===0){
            callback('nicht möglich diese Suche, suchen Sie weiter',undefined)

        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name

            })
        
        }

    })

}


module.exports=geocode