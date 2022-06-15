const {hewan} = require('./models')

hewan.findOne({
    where:{id:1}
})
.then(hewan=>{
    console.log(hewan)
})