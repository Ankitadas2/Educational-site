import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {img,language,price}=props.cart|| {}
    return (
<div className="cart-container" >

            <div className="cart-img">
            <img className="w-100 bg-success" src={img} alt="" />
            </div>
            {/* All cart details in dynamically */}
            <div className="cart-details">
            <h3 className="text-design">Language:{language}</h3>
            <h3 className="text-design">Price: <small>$</small> {price}</h3>   
            <i class="bi bi-star-fill text-success"></i>
            <i class="bi bi-star-fill text-success"></i>
            <i class="bi bi-star-fill text-success"></i>
            <i class="bi bi-star-half text-success"></i>
            </div>
        </div>













//         <div>
            
//               <CardGroup>
//   <Card >
//   <img className="w-100 bg-success" src={img} alt="" />
//     <Card.Body>
       
//       <Card.Title>
//           <h3 className="text-design">Language:{language}</h3>    
//       </Card.Title>
//       <Card.Text>
//        <h3 className="text-design">Price: <small>$</small> {price}</h3> 
      
     
        
//       </Card.Text>
//     </Card.Body>
    
//   </Card>
// </CardGroup>
//         </div>
    );
};

export default Cart;