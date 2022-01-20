const cekHariKerja = (day) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } 
            else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('rabu').then((cek)=>{
    console.log("Hari " + cek + " adalah hari kerja")
}).catch((err)=>{
    console.log(""+ err + "" )
})

async function proses(){
    try{
        const result = await cekHariKerja('minggu')
        console.log("Hari " + result + " adalah hari kerja")
    }catch(err){
        console.log(""+err)
    }
}
proses()