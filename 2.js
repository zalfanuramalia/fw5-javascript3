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
        },3000)
    })
}
try {
  cekHariKerja("senin")
  .then((value) =>{
    console.log(value);
  }).catch((error) =>{
    console.log(""+error);
  });
}
catch(e)
{
  console.log("catch"+e);
}