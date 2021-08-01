// const machEtwasPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve([1,2,3])
//         reject('Etwas lief schief')
//         resolve([1,2,3,4])

//     },2000)
// })



const doWork=async()=>{
  const sum= await add(1,99)
  return sum

}
doWork().then((result)=>{
    console.log('result',result)

}).catch((e)=>{
    console.log('e',e)

})