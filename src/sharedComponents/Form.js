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
        <form onSubmit={props.handleSubmit}>
            <label>
                Name:
                <input type="email" name="email" onChange={OnChangeEmail}/>
            </label>

            <label>
                Password:
                <input type="password" name="password"  onChange={OnChangePassword}/>
            </label>
            <input type="submit" value="Submit" />
      </form>
    )
}

export default Form;