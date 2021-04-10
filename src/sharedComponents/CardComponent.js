import React, { useState } from 'react';
import { Button, CardGroup,Card} from 'react-bootstrap';


const  CardComponent = (props) =>{
 
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
            <Button variant="primary">View {props.title}</Button>
        </Card.Footer>
    </Card>
        
    )
}

export default CardComponent;