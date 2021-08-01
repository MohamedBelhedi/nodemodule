require('../src/db/mongoose')
const Benutzer = require('../src/models/benutzer')
const benutzer=require('../src/models/benutzer')

// 60be2cc1a1fe953828484bf5 in {} die Daten die man ändern,lesen,löschen möchte

// Benutzer.findByIdAndUpdate('60be2cc1a1fe953828484bf5',{Name:'Kaotung'}).then((benutzer)=>{
//     console.log(benutzer)
//     return Benutzer.countDocuments({Name:'Kaotung'})
// }).then((result)=>{
//     console.log(result)


// }).catch((e)=>{
//     console.log(e)
// })

const nameUpdate=async (id,Name)=> {
    const benutzer=await Benutzer.findOneAndUpdate(id,{Name})
    const count=await Benutzer.countDocuments({Name})
    return count


}


nameUpdate('60bbe815b33e5224bcd6feff','MimukMbak').then((count)=>{
    console.log(count)

}).catch((e)=>{
    console.log(e)
})