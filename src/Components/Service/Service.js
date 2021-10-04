import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import './Service.css'

const Service = () => {
    const [carts,setCarts]=useState([])
    useEffect(()=>{
        fetch('./details.JSON')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    return (
        <div >
            <h1 className="text-success border">Our Courses</h1>
             <div className="all-container">
            {/* All cart section where showing all companies details in dynamically */}
            <div className="store-container">
                {
                    carts.map(cart=><Cart cart={cart}></Cart>)
                }
              
            </div>
           
            </div>
            </div>
    );
};

export default Service;