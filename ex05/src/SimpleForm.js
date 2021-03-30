import React, { Component } from 'react';

class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Yoda" }
    }


onChangeHendler = (event) => {

    this.setState ({ name: event.target.value});
}
          render () {
    return (
        <form>
            <h1>Name: {this.state.name}</h1>
            <p>First name:</p>
            <input 
                type='type'
                onChange={this.onChangeHendler}/>
        </form>
    );
}
}

export default SimpleForm;