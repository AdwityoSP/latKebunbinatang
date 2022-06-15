const {hewan} = require('./models')
const {kebunbinatang} = require('./models')

hewan.create({
    id : '1',
    nama : 'ular',
    jenis :'reptile'
},{
    id : '2',
    nama : 'kadal',
    jenis :'reptile'
},{
    id : '3',
    nama : 'kumbang',
    jenis :'serangga'
})
.then(hewan=>{
    console.log(hewan)
})

kebunbinatang.create({
    id : '1',
    nama : 'bandung',
    alamat :'depan itb'
},{
    id : '2',
    nama : 'bogor',
    alamat :'hutan raya'  
})
.then(kebunbinatang=>{
    console.log(hewan)
})