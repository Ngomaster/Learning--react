import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Card from "../productcard/Carditem";





const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=> {fetch("http://localhost:8000/map").then((res)=> res.json())
    .then((data) => setProduct(data))},
    [])

    
     return (
         <>
            {product.map((item, index) => (<Card
                    image ={item.image}
                    name={item.name}
                    id = {item.id}
                    price={item.price}
                    
                />

            ))

            }
         </>
     )
 };
 
 export default Product;