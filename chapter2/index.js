const os = require('os')
console.log(os.arch())
process.stdin.on('data',(buffer)=>{
  console.log(buffer.toString())
})