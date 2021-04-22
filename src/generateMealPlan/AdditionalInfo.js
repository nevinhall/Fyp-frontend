import React, { useState } from 'react';
import { Button, CardGroup,Card} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import routeChange from "../sharedComponents/routeChange"


const  AdditionalInfo = (props) =>{
    const history = useHistory();
    //Render Form to the user.
    return(
        <div>
        <div>
        <iframe 
             width="560"
             height="315"
             src={props.location.youtube}
             title="YouTube video player" 
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>
        </div>

        <div>
            <h1>{props.location.name}</h1>
            {props.location.youtube}
            {props.location.area}
            {props.location.instructions}
        </div>
        </div>
        
    )
}

export default AdditionalInfo;