// const chalk=require('chalk')

// const name='Momo'
// const userAlter=33

// const user={
//     name,
//     alter:userAlter,
//     location:'Minden'
// }

// console.log(user)

const product={
    label:'Roter Laptop',
    preis:'300€',
    zustand:'gebraucht'
}
// const{label,preis}=product
// console.log(label,preis)

// alles was definiert ist kann man nicht doppel nehmen deshalb kann man das in der const unten übershreiben



// function
const transaktion=(type,{label,preis})=>{
console.log(type,label,preis)
}

transaktion('Bestellung',product)


const begrü=(name='user')=>{
    console.log(' hello\n' +name+ '!')

}

begrü('Kao')
begrü()

