import React from 'react';
import PropTypes from 'prop-types';
import "./index.css";
// Form.propTypes = {
    
// };

class Form extends React.Component {
    state = {
      Title: "",
      Creator: "",
      Description: "",
    };
    handleTitle = (e) => {
      this.setState({
        Title: e.target.value,
      });
    };
    handleCreator = (e) => {
      this.setState({
        Creator: e.target.value,
      });}
    handleDescription = (e) => {
      this.setState({
        Description: e.target.value,
      });
    };
    arr = [this.state];
    
    handleSubmit = (e) => {
      e.preventDefault();
      alert("submit done");
      localStorage.setItem('users', JSON.stringify(this.arr))
    };
  
    render() {
      console.log(`call state: `, this.state);
      return (
        <>
          <form>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              type="text"
              value={this.state.Title}
              onChange={(e) => this.handleTitle(e)}
            />
            <br />
            <label htmlFor="creator">Creator:</label>
            <br />
            <input
              type="text"
              value={this.state.Creator}
              onChange={(e) => this.handleCreator(e)}
            /><br/>
            <label htmlFor='description'>Description:</label>
            <br/>
            <input type="text" value={this.state.Description}
            onChange={(e) => this.handleDescription(e)}
            /> 
            <br />
            <br />
            <input
              type="submit"
              value="Save"
              onClick={(e) => this.handleSubmit(e)}
            />
          </form>
        </>
      );
    };
  };
export default Form


