import React from 'react';
import './User.css'

const User = (props) => {
    const {name,img,Language,para}=props.user
    return (
        <div>
            <div className="cart-container" >

<div className="cart-img">
<img className="w-100 bg-success" src={img} alt="" />
</div>
{/* All cart details in dynamically */}
<div className="cart-details">
<h3 className="text-design">Name:{name}</h3>
<h3>Language:{Language}</h3>
<p>{para}</p>
</div>
</div>
        </div>
    );
};

export default User;