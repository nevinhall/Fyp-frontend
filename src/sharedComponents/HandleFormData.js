import {Redirect} from "react-router-dom";
const axios = require('axios').default;


const HandleFormData = async (email,password,url,rediectTo) => {
    console.log("here");
    console.log("email sent is", email);


    var bodyFormData = new FormData();
    bodyFormData.append("email",email);
    bodyFormData.append("password",password);
   
 
    let res = await axios.post(url,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
    return res.data

 

}


export default HandleFormData