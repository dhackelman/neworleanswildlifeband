import React from 'react';
import Header from './Header';
import SocialMedia from './SocialMedia';
import Main from './Main';
import Footer from './Footer';
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
            <div className="main">
                <Header/>
                <SocialMedia/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
