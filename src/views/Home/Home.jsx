import React, { useState } from "react";
import "./Home.scss"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useNavigate } from 'react-router-dom';




function Home () {

  
    const [id, setId] = useState(uuidv4());
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    let Post = useNavigate();
      const data =  () => {
        axios.get("http://localhost:8000/map").then((res)=> {
      console.log(res); 
     }).catch(err => console.log(err))
      };
      const postData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/map", {
            id,
            name,
            price,
            image
        }).then(ress => console.log("posting data:", ress )).catch(err => console.log(err)) 

        let path = '/product';
        Post  (path);
        
      }
  let handleReset = (e) => {
        setName(e.target.value = "")
        setPrice(e.target.value = "")
        setImage(e.target.value = "")
      }

return(
    <>
    <div className="Home-Container"> 
         <h2>Add New Product</h2>
<form onSubmit={postData}  >
    <div className="Home-Item">
    <label htmlFor="">Name :</label>
    <input name="name" type="text" 
    value={name}
    onChange= {(e) => setName(e.target.value)}
    />
    </div>
    <div className="Home-Item">

    <label htmlFor="" >Price :</label>
    <input type="number" 
    name="price"
    value={price}
    onChange= {(e) => setPrice(e.target.value)}
     
     />
  
    </div>
    <div className="Home-Item">

    <label htmlFor="" >Image :</label>
    <input type="url" name="image"
        value={image}
        onChange= {(e) => setImage(e.target.value)}
    />
  
    </div>
    <div className="Home-Button">
        <button
        type="submit"
       >Save</button>
        <button type="reset"
        onClick={handleReset}>Reset</button>
    </div>
</form>

</div>
</>
)
}

export default Home;
