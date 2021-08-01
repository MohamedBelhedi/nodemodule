require('../src/db/mongoose')
const Task=require('../src/models/tasks')
const task=require('../src/models/tasks')


Task.findByIdAndDelete('60be249a7b882033087d96f7').then((task)=>{
    console.log(task)
    return Task.countDocuments({erledigt:true})
}).then((result)=>{
    console.log(result)


}).catch((e)=>{
    console.log(e)
})
// const deleteTask= async()=>{
//     const Aufage
// }