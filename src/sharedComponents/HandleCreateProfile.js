const axios = require('axios').default;


const HandleCreateProfile = async (user_id,height,weight,dietaryOptions,allergies,activityLevel,age,gender,url) => {
    var res =""
    try{
        var bodyFormData = new FormData();
        bodyFormData.append("user_id",user_id);
        bodyFormData.append("height",height);
        bodyFormData.append("weight",weight);
        bodyFormData.append("allergies",allergies);
        bodyFormData.append("age",age);
        bodyFormData.append("activity_level",activityLevel);
        bodyFormData.append("dietray_options",dietaryOptions);
        bodyFormData.append("gender",gender);

     
        let resData = await axios.post(url,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
       
        res = resData.data
        console.log("res:",res);

    }catch{
        res =  "failure"
    }
    return res


}


export default HandleCreateProfile 