// const quadrat=(x)=>{
//     return x*x

// }

// const quadrat=(x)=> x*x
// console.log(quadrat(2))

const evente={
    name:'Geburtstag Party',
    Gästeliste:['Momo','Nindi','Kao'],
    printGueslist(){
        // const that=this falls this nicht eingebunden werden kann das ist die Lösung
        console.log('Gästeliste für '+ this.name)
        this.Gästeliste.forEach((Gast) => {
            console.log(Gast+ ' ist Eingeladen' + this.name)
        })
    }
}

evente.printGueslist()