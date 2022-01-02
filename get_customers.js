const fun = require('./function');

async function  getCustomers(){
    try{
    var x = await fun.query_exec(`SELECT * FROM ep_customers where status = '${1}'`);
    console.log(x);
    var bussiness = [];
    for (let i = 0; i < x.length; i++) {
        bussiness[i] = x[i];
    }
    console.log(bussiness[0]);
    //return 0;
    //return (bussiness);
    return ({
        'status':1,
        'message':'Customer List sent Successfully!',
        'data':bussiness,
        'error':null
    });
  }catch(error){
    if(error){
        log(error)
        return ({
            'status':0,
            'message':'Some Error Occured!',
            'error':error
        });
    }
}
}


module.exports = {
     getCustomers
}