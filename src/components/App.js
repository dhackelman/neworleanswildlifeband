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
      const childWithProp = React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child);
      });

        return (
            <div className="main">
                <Header/>
                <SocialMedia/>
                 {childWithProp}
                <Footer/>
            </div>
        );
    }
}

export default App;
