import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./index.css";

function Form() {
  const [formindex, setFormindex] = useState({
      Title: "",
      Creator: "",
      Description: "",
      status: "new"
  });

  function handlechangeform(e) {
    setFormindex({
      ...formindex, [e.target.name]:e.target.value,
    });
  }
  
  // let arr =[];
  function handleCreateTask(event) {
    event.preventDefault();
    let arr = JSON.parse(localStorage.getItem('todoList'));
    arr.push(formindex);
        localStorage.setItem('todoList', JSON.stringify(arr));
      }
    
      return (
        <div>
          <form >
            <label htmlFor="title">Title:</label><br/>
            <input
              name="title"
              onChange={handlechangeform}
              type="text"
              id="title"
            />
            <br />
            <label htmlFor="creator">Creator:</label><br/>
            <input name="creator" onChange={handlechangeform} type="text" /><br/>
            <label htmlFor="desc">Description:</label><br/>
            <input name="decs" onChange={handlechangeform} type="text" />
            <br /><br/>
            <button type="submit" onClick={handleCreateTask}>Save</button>
          </form>
        </div>
      );
    }
    
    export default Form;

  






