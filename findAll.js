const {hewan} = require('./models')

hewan.findAll({
})
.then(hewan=>{
    console.log(hewan)
})