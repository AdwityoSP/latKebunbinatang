const {hewan} = require('./models')
const query = {where:{id:1}}
hewan.update({
    id : '1',
    nama : 'ular',
    jenis :'reptile'
})
.then(hewan=>{
    console.log(hewan)
})