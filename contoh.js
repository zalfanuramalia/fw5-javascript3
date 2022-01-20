function tunggu(){
    return new Promise((resolve, reject)=>{
    const data = []
    setTimeout(()=>{
        resolve(data)
    }, 1000)
    //reject ("Gagal nih")
    })
}

tunggu().then((sapa)=>{
    console.log(sapa)
    console.log("Halo")
}).catch((err)=>{
    console.log(err)
})

//async function proses(){
//    const proc = await tunggu
//    console.log("Halo")
//}

//proses()

//async function proses(){
//    try{
//        const result = await tunggu
//        console.log(result)
//        console.log("Halo")
//    }catch(err){
//        console.log(err)
//    }
//}

//proses()