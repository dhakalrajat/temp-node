const {readFileSync,writeFileSync} = require('fs');

const readData = (path,encoding)=>{
    dataRead = readFileSync(path,encoding)
    return dataRead
}
dataRead=readData("./content/first.txt","utf-8")
dataRead=dataRead+ readData("./content/second.txt","utf-8")
console.log(dataRead);

dataToWrite=dataRead+"\nHello I am enjoying learning nodeJS"
writeFileSync("./content/result-sync",dataToWrite,{flag: 'a'})