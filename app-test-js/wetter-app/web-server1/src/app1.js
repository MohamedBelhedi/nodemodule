const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./../src/utils/geocode') 
const forecast = require('./../src/utils/forecast')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app =express()
const public=(path.join(__dirname,'../public'))

// app.set('view engine','hbs')
app.set('views', __dirname + '/./templates/views');
const partialPfad=path.join(__dirname,'./templates/partials')
app.set('view engine','hbs')

hbs.registerPartials(partialPfad)


// app.engine('html', require('hbs').__express);

app.use(express.static(public))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Wetter',
        autor:'Momo'
        
    })


})

app.get('/wetter',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Du musst eine Adresse eingeben'
        })
    }

    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(temp,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })
        })

    })
    // res.send({
    //     Wetter:'es Schneit',
    //     location:'Minden',
    //     adress:req.query.adress
    // })
})

app.get('/products',(req,res)=>{


    if(!req.query.search){
        return res.send({
            error:'Gib ein Suchwort ein '
        })
    }

  


    console.log(req.query)
    res.send({
        products:[]
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        autor:'Momo'
        
    })
})




// app.get('',(req,res)=>{

//     res.send('Hallo from Express')

// })

// app.get('/help',(req,res)=>{
//     res.send({
//         Name:'Momo',
//         Alter:'33'
//     })

// })
// app.get('/wetter',(req,res)=>{
//     const wetter=[{
//         Wetter:'Heute',
//         Standort:'Minden'
//     }]
//     res.send(wetter)

// })
// app.get('/about',(req,res)=>{
//     res.send('<h>Über Uns</h')

// })
app.get('/about/*',(req,res)=>{
    res.render('404',{
        title:'404',
        errorNachricht:'about nicht gefunden'

    })

})

// starten des Servers
// *stern heißt alles was nicht vergeben ist 
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        errorNachricht:'Seite nicht gefunden'
    })


})
app.listen(3000,()=>{
    console.log('Server Funktioniert')
})