
import React from 'react';
import "./Carditem.css"

function Productcard({ name, image, price}) {
    
    
    return (
        <div className='card-father'>
            <img src={image}  />
            <h4>{name}</h4>
            <p>{price}$</p>
            <button className='add-to-cart'>Add to cart</button>       
        </div>
    );
}

export default Productcard;