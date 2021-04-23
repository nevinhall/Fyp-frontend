import React, { useState } from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import routeChange from "../sharedComponents/routeChange"
import Navbar from "../sharedComponents/Nav"


const  AdditionalInfo = (props) =>{
    const history = useHistory();
    //Render Form to the user.
    return(
        <div>
        <Navbar/>
        <Container fluid>
        <Row className="justify-content-md-center p-5">
        <iframe 
            width="560"
            height="315"
            src={props.location.youtube}
            title="YouTube video player" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
         </iframe>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs="6">
            <h1>{props.location.name}</h1>
            {props.location.area}
            {props.location.instructions}
            </Col>
        </Row>

        </Container>
        </div>
    )
}

export default AdditionalInfo;



{/* <div>
<div className="d-flex justify-content-around">

</div>

<div>
    <h1>{props.location.name}</h1>
    {props.location.area}
    {props.location.instructions}
</div>
</div> */}
