const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false;
        let month = ['January','February','March','April','May','June','July','August',
        'September','October','November','December'];
        if (!error){
            callback(null, month)
        }
        else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}
function printMonth(err,month){
	if(month.length){
      month.map((mon) =>{
        console.log(mon);
      })
    }else{
      console.log(""+err)
    }
  }
  getmonth(printMonth)