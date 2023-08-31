const { error, log } = require('console');
const {readFile,writeFile} = require('fs');
log("Let's see how this works!")
readFile('./content/first.txt',"utf-8",(error,result)=>{
    log("1")
    if(error){
        log(error)
    }
    const first=result
    log("12")
    readFile('./content/second.txt',"utf-8",(error1,result1)=>{
        if(error1){
            log(error1)
        }
    const second=result1
    dataToWrite="I am new to callback functions\n"
    writeFile("./content/result-async.txt",dataToWrite+` ${first},${second}`,(errorW,resW)=>{
    log("1234")
        if(errorW){
            log(errorW)
        }
        log(resW)
    })
    })
    log("12345")    
})
log("It's over")
// log are to see the fascinating way how async functions work with call back!
// Truly fascinating!