const machEtwasPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve([1,2,3])
        reject('Etwas lief schief')
        resolve([1,2,3,4])

    },2000)
})

machEtwasPromise.then((result)=>{
    console.log('Erfolgreich',result)

}).catch((error)=>{
    console.log('Error!',error)
})


