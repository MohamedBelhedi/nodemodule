// GRUD Creat Read Update Delete

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

const {MongoClient,ObjectID}=require('mongodb')
const id=new ObjectID()
console.log(id.id)
console.log(id.toHexString().length)

const connectionURL='mongodb://127.0.0.1:27017'
const dataBaseName='Task_Manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('kann nicht zu der Datenbank eine Verbindung aufbauen')
    }

   const db=client.db(dataBaseName)

//    const updatenPromise=db.collection('Benutzer').updateOne({
//        _id:new ObjectID("60bbf4929fe0af3ac4f92637")
    
//     },{
//         $set:{
//             Name:'Momo',
//         }
//     })
//     updatenPromise.then((result)=>{
//         console.log(result)

//     }).catch((error)=>{
//         console.log(error)

//     })

db.collection('Benutzer').updateMany({
    Name:'Nindi'
},{
    $set:{
        Name:'Mimukbesar'
    }
}).then((result)=>{
    console.log(result.modifiedCount)

}).catch((error)=>{
    console.log(error)


})
})

//    db.collection('Benutzer').insertOne({
//        _id:id,
//        Name:'Nindi',
//        Alter:'37'
       
//    },(error,result)=>{
//        if(error){
//            return console.log('Nicht möglich')
//        }

//        console.log(result.ops)
// db.collection('Benutzer').findOne({_id:new ObjectID("60bbe815b33e5224bcd6feff")},(error,benutzer)=>{
//     if(error){
//         return console.log('Verbindung nicht möglich')

// }

//     console.log(benutzer)


//     })

// db.collection('Benutzer').find({ Alter:'28' }).toArray((error,benutzer)=>{
//     console.log(benutzer)

// })
// db.collection('Benutzer').find({ Alter:'28' }).count((error,benutzer)=>{
//     console.log(benutzer)

// })
// db.collection('Benutzer').insertMany([
//     {
//         Name:'Mohamed',
//         alter:'33'

// },

// {

//     Name:'Kaouthar',
//     Alter:'28'

// }

// ],(error,result)=>{
//     if(error){
//         return console.log('Nicht möglich sich zu verbinden')
//     }
//     console.log(result.ops)
// })
// db.collection('Aufgaben').insertMany([
//     {
//         aufgabe1:'Wäsche Waschen',
//         anschließen:'Lernen'

// },

// {
//     aufgabe2:'Kochen',
//         anschließen:'Fitness'

// },

// {
//     aufgabe3:'Einkaufen',
//         anschließen:'Coden'

// }
// ],(error,result)=>{
//     if(error){
//         return console.log('Verbindung nicht möglich')

//     }

//     console.log(result.ops)


// })
