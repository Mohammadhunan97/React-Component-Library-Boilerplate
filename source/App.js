/*
    This file is for the app
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SampleComponent from './components/SampleComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="App">
            <SampleComponent />
        </div>);
    }
}
 

ReactDOM.render(<App />, document.getElementById('app'));