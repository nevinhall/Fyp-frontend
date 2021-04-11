const axios = require('axios').default;


const HandleUserIDPost = async (user_id,url) => {
    user_id = "under_weight_scenario"
    var res =""
    try{
        var bodyFormData = new FormData();
        bodyFormData.append("user_id",user_id);
       
        let resData = await axios.post(url,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
       
        res = resData.data
        console.log(res);

    }catch{
        res =  "failure"
    }
    return res


}


export default HandleUserIDPost 