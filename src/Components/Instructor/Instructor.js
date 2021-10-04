import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Instructor = () => {
    const [users,setUsers] =useState([])
    useEffect(()=>{
        fetch('./ins.JSON')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            
            <h1 className="text-success border">Our Instructors</h1>
             <div className="all-container">
            {/* All cart section where showing all companies details in dynamically */}
            <div className="store-container">
                {
                  users.map(user=><User user={user}></User>)  
                }
              
            </div>
           
            </div>
        </div>
    );
};

export default Instructor;