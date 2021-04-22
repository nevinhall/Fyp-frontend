import React, { useState } from 'react';
import { Button, CardGroup,Card} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import routeChange from "../sharedComponents/routeChange"


const  MealCard = (props) =>{
    const history = useHistory();
    //Render Form to the user.
    return(
        <Card>
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

export default MealCard;