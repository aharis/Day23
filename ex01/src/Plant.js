import React, { Component } from 'react';

class Plant extends Component {
    constructor(props) {
        super(props);
        this.state = {type: "Flowering plant"}
    }
    render() {
        return (
            
            <h1>This is a Plant Component!</h1>
        )
    }
    
}


export default Plant;