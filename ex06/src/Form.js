// src/Form.js
import React, {Component} from 'react';
import Table from './Table';
class Form extends Component {
        state = {
        firstName: "",
        lastName: "",
    };
    state = this.state;

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]: value,})
    }
render() {
    const { firstName, lastName } = this.state;

    return (
        <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value="{firstName}"
            onChange={this.handleChange} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id ="lastName" value="{lastName}"
            onChange={this.handleChange} />
         
       
        
          </form>
         
    );  
   
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.state)
    }
<input type="button" velue="Submit" onClick={this.submitForm}/>

    }

export default Form;