const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;


async function getConstellations([id1,id2]) {
    const url1 = `${BASE_URL}/constellations/${id1}`;
    const url2 = `${BASE_URL}/constellations/${id2}`;
    console.log(url1,url2)
    try {
      const { data:const1 } = await axios.get(url1);
      const { data:const2 } = await axios.get(url2);
      console.log(const1, const2);
      return [const1,const2];
    } catch (error) {
      throw `Constellation with id of ${id1} could not be found.`;
    }
  }
   
  getConstellations(["n2OEOzp", "32TN5F8"]).then(console.log);
  console.log("test")
  //> "Libra"
   
  //getConstellations("error").catch(console.log);
  //> Constellation with id of error could not be found.
  