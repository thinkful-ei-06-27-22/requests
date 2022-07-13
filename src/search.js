const axios = require('axios');
const requestUrl = `http://localhost:5000/constellations`

function search(constName){
   return axios.get(`${requestUrl}`).then(({data})=>{
        return data.find(constell=>constell.name===constName);
    }).catch(err=>console.error(err.message));
}
function addConst(constObj){
   return axios.post(`${requestUrl}`,constObj).then(({data})=>{
        return data;
    }).catch(err=>console.error(err.message));
}

/*async function testMethod(){
    let cancer = await search('Cancer');
    let taurus = await search('Taurus');
    console.log(cancer, taurus);
    return {cancer, taurus};
}
testMethod().then(data=>{
    console.log('we found it!', data);
})*/



module.exports = {search,addConst};

