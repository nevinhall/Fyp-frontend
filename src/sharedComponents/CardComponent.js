import React, { useState } from 'react';
import { Button, CardGroup,Card} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import routeChange from "../sharedComponents/routeChange"


const  CardComponent = (props) =>{
    const history = useHistory();
    //Render Form to the user.
    return(
        <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.data}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" onClick={() => routeChange(history,props.link)}>View {props.title}</Button>
        </Card.Footer>
    </Card>
        
    )
}

export default CardComponent;