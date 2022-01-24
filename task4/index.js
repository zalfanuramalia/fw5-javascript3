const fetch = require ("cross-fetch")

const url = "https://jsonplaceholder.typicode.com/users"

//Menggunakan async await
async function listName(){
    const data = await fetch(url)
    const res = await data.json()
    res.forEach(item => {
        console.log(item.name)
    })
}

listName()

//Menggunakan then catch
fetch(url).then(res =>{
    res.json().then(fin => {
        fin.forEach(item => {
            console.log(item.name)
        })
    }).catch(err =>{
        console.log("Catch 2")
    })
}).catch(err =>{
    console.log("Catch 1")
})


//function res (err, meta, body){
//    const result = body.toString()
//    const data = JSON.parse(result)
//    data.forEach(item => {
//        console.log(item.name)
//    })
    //console.log(data[3].name)
    //console.log(body.toString())
//}
//fetch.fetchUrl(url).then(res => {
//    console.log(res)
//})