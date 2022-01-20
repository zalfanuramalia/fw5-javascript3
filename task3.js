function panggilKucing(name){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve(name+' : Meow..');
      }, 2000);
    });
  }
  
  function callKucing(name){
    setTimeout(function(){
      return name+' : Purr';
    }, 2000);
  }
  
  async function main(){
    let dialogTanpaPromise = callKucing('Kitty');
    console.log(dialogTanpaPromise);
  
    try{
      let dialogDenganPromise = await panggilKucing('Doraemon');
      console.log(dialogDenganPromise);
    } catch(error){
      console.log(error);
    }
  }
  
  main();