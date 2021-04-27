import React, { Component } from 'react';
import CardList from './components/CardList';
import InputSearch from './components/InputSearch';
import "./css/style.css"

class App extends Component {
    constructor() {
        super();
        this.state = { robots: [], searchfield: '' };
    }

    componentDidMount () {
        fetch( "https://jsonplaceholder.typicode.com/users" )
            .then( response => response.json() )
            .then( data => this.setState( { robots: data } ) );
    }

    handleSearch = ( event ) => {
        this.setState( { searchfield: event.target.value } );
    }

    render () {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter( ( robot ) => {
            return robot.name.toLowerCase().includes( searchfield.toLowerCase() );
        } );
        if ( robots.length === 0 ) {
            return <h1 className="load">Chargement ...</h1>
        }
        else {
            return (
                <div className="corp">
                    <h1 className="title">Mes amis Robots</h1>
                    <InputSearch searchChange={this.handleSearch} />
                    <CardList listRobots={filterRobots} />
                </div>
            );
        }
    }
}

export default App;
