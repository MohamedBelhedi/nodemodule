const { fips } = require('crypto')
const fs=require('fs')


// const buch={
//     title:'Momo der Fahrlehrer',
//     Author:'Momogienak'
    
// }


const datapuffer=fs.readFileSync('1-json.json')
const dataJSON=datapuffer.toString()
const name= JSON.parse(dataJSON)
name.name='Nindi'
name.age='45'

const nameJSON=JSON.stringify(name)
fs.writeFileSync('1-json.json',nameJSON)


// const buchJSON=JSON.stringify(buch)

// fs.writeFileSync('1-json.txt',buchJSON)
// console.log(buchJSON)

// const parsedDATA=JSON.parse(buchJSON)
// console.log(parsedDATA.Author)
// const datapuffer=fs.readFileSync('1-json.json')
// const dataJSON=datapuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title)


