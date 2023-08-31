const { log } = require('console');
const path=require('path');

log(path.sep)

const filePath= path.join('/content','subfolder','test.txt')
log(filePath)
log(path.basename(filePath))
log(path.resolve(__dirname,'content','subfolder','test.txt'))