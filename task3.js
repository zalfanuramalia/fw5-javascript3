//Program 1

let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
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

function promise(time) {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      if (time < 5000 ){
        setTimeout((cek)=>{
          resolve(cek)
        }, time);
      } else {
        reject ("Kelamaan!")
      }
    },time) 
  })
}

async function janji(){
  try {
    const coba = await promise(3000);
    console.log("selesai!");
  } catch (err) {
    console.log(err);
  }
}

janji()