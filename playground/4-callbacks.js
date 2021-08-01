// setTimeout(()=>{
//     console.log('2 sekunden')

// },2000)


// const namen=['Momo','Nindi','Kao']
// const  kurzname=namen.filter((name)=>{
//     return name.length<= 3

// })

// const geocode=(adress,callback)=>{
//  setTimeout(()=>{
//     const data={
//         latitude:0,
//         longtitude:0
//     } 

//     callback(data)


//  },2000)
// }

// geocode('Mindenger',(data)=>{
//     console.log(data)

// })
// console.log(data)

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
// const add=(a,b,callback)=>{
//     setTimeout(()=>{
//         callback(a+b)

//     },2000)

//     console.log('ergebnis kommt gleich Bitte warten')
    
// }


//     add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

const machEtwas=(callback)=>{
    setTimeout(()=>{
        // callback('das ist der Fehler',undefined)
        callback(undefined,[1,4,7])

    },2000)

}

machEtwas((error,result)=>{
    if(error){
        return console.log(error)
    }
    console.log(result)


})