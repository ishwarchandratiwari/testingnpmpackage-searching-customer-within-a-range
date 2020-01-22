const indexObj=require('../src/index');
indexObj.searchingCustomers().then((eligiblelist)=>{
    if(eligiblelist && eligiblelist.length>0)console.log('Testing \n -----------Looks Good----------------');
    else console.log('Testing \n -----------No record Found----------------');
    return;
}).catch((error)=>{
    console.log('Testing \n ----------------------',{error});
    return;
})








// ```Developer Point Of view
// Error OverView
// ```
// Problem:- SyntaxError: Unexpected token { in JSON at position 96
// Solution:-  [] array of json format required, put all json data into array []