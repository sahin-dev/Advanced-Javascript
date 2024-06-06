
function asyncTask(cb){
    for(let i = 0;i<20000000000;i++){
        
    }
    cb()
}
asyncTask(()=>{ console.log("Task finished!")})
console.log("Main")