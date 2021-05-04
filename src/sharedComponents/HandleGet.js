const axios = require('axios').default;


const HandleGet = async (url) => {
    var res =""
    try{
      
        let resData = await axios.get(url,{headers : {"Access-Control-Allow-Origin": "*"}})
        res = resData.data
      
    }catch{
        res =  "failure"
    }
    return res


}


export default HandleGet