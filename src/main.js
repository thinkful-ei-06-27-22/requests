const city = process.argv[2];
const axios = require('axios');
const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e65c9fa9b7e55bfdc5fae728963043f5&units=imperial`;

axios.get(requestUrl).then(({data})=>{
    console.log(`The weather today in ${city}:`);
    console.log(` The temp will be ${data.main.temp}`);
    console.log(` The humidity is currently ${data.main.humidity}%`);
    console.log(` There are ${data.weather[0].description} in the sky!`)
}).catch((err)=>{
    //console.log(err.response.data)
    let data = err.response.data;
    console.error(`${data.cod}: ${data.message}`)
})