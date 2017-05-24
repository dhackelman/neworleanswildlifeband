import React from 'react';
import { Link } from 'react-router';
import NOWBGroupshot from '../images/NOWBGroupshot.jpg';

class Landing extends React.Component {



    render() {
        return (
          <div>
            <div className="landing__container">
              <img className="container__jumbotron" src={NOWBGroupshot} alt="the new orleans wildlife band"/>
            </div>
          </div>
        );
    }
}

export default Landing;
