import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//import css
import './card.css'
import { useState } from 'react';



function Cards(){
    const [carta, setCarta]= useState([])

    return (
        <Card className='card-content' style={{width: '18rem'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
         </Card>
    );
}


export default Cards