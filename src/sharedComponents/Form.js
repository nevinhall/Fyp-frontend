import React, { useState } from 'react';


const Form = (props) =>{
    //Define hooks to store data.


    const OnChangeEmail = (e) => {
        console.log(e.target.value);
        props.setEmail(e.target.value)
    }

    const OnChangePassword = (e) => {
        console.log(e.target.value);
        props.setPassword(e.target.value)
    }

    //Render Form to the user.
    return(
 
        <form onSubmit={props.handleSubmit} className="d-block d-flex justify-content-center">
            <div>
                <div className="d-block d-flex justify-content-center p-3">
                    <label>
                        Name:
                        <input type="email" name="email" onChange={OnChangeEmail}/>
                    </label>
                </div>

                <div className="d-block d-flex justify-content-center p-3">
                    <label>
                        Password:
                        <input type="password" name="password"  onChange={OnChangePassword}/>
                    </label>
                </div>
               
                <div  className="d-block d-flex justify-content-center">
                      <input  type="submit" value="Submit"  />    
                </div>
              
            </div>
      </form>
    
    )
}

export default Form;