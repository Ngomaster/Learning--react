import React, { useState } from "react";

import "./index.css";

Card.propTypes = {};

function Card({ status }) {
  const [selects, setSelects] = useState(status);
  let change = (a) => {
     setSelects(a.target.value);
  };
  return (
    <div>
        <div className="card-items">
            <h3 className="card-title">title: Task 1</h3>
            <p className="card-text">creator: Author 1 </p>
            <p id="status">status: {selects}</p>
            <h4>Description: </h4>
            <p>This is a task,This is a task,This is a task,This is a task... </p>
            <select name="" id="" onChange={change}>
                <option value="New">New</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
            
        </div>
    </div>
  );
}

export default Card;