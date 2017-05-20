import React from 'react';
import Header from './Header'
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            UpcomingGigs: [],
            RegisteredUser: {}
        }
    }

    updateUpcomingGigs({date: location}) {
        if (this.state.UpcomingGigs.length != 0) {
            this.setState(this.state.UpcomingGigs.push({date: location}));
        }
    }
    updateCurrentUser(id) {
        this.setState({CurrentUser: Number(id)})
    }

    render() {

        return (
            <div>
                <h1>This is The New Orleans Wildlife Band.</h1>
                <Header/>
            </div>
        );
    }
}

export default App;
