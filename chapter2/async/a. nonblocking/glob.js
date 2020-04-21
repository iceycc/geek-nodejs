
const glob = require('glob')
var result = null
console.time('glob')
glob(__dirname + '/**/*',function(err,res){
  console.log('res')
})
console.timeEnd('glob')