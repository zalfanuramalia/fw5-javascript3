//Program 1

let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if ( ditepati) {
    setTimeout (()=> {
      resolve ("Janji telah ditepati");
    }, 2000)
  } else {
    reject ("Ingkar janji..");
  }
});

janji1.then((item) => {
  console.log("OK! :" + item)
}).catch((err) => {
  console.log("NOT OK! :" + err)
})

//Program 2

function promise() {
  return new Promise ((resolve, reject) => {
    const time = 6000
    if (time < 5000 ){
      setTimeout((cek)=>{
        resolve(cek)
      }, time);
    } else {
      reject ("Kelamaan!")
    }
  })
}

async function janji(){
  try {
    const coba = await promise();
    console.log("selesai!");
  } catch (err) {
    console.log(err);
  }
}

janji()