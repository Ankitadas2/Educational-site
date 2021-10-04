import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Details.css'

const Details = (props) => {
    const {language,price,img}=props.details|| {}
    return (
        <div className="">
              <CardGroup>
  <Card >
  <img className="w-100" src={img} alt="" />
    <Card.Body>
       
      <Card.Title>
          <h3 className="text-design">Language:{language}</h3>    
      </Card.Title>
      <Card.Text>
       <h3 className="text-design">Price: <small>$</small> {price}</h3> 
       <i class="bi bi-star-fill text-success"></i>
            <i class="bi bi-star-fill text-success"></i>
            <i class="bi bi-star-fill text-success"></i>
            <i class="bi bi-star-half text-success"></i>
     
        
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>

        </div>
    );
};

export default Details;