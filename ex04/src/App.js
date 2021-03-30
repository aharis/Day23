import React, { Component } from 'react';
import Table from './Table';
class App extends Component {
    state = {
        characters: [
            {

            firstName: 'Lary',
            lastName: 'Page',
        },
        {
            firstName: 'Ada',
            lastName: 'Turing',
        },
    ],
    
    }


    render() {
        const { characters } = this.state;
            
        return (
            <div className="container">
                <Table charactersData={characters} />
                removeCharacter={this.removeCharacter}
            </div>
        )
    }
}
export default App;