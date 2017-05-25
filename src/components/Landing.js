import React from 'react';
import { Link } from 'react-router';
import NOWBGroupshot from '../images/NOWBGroupshot.jpg';

class Landing extends React.Component {



    render() {
        return (
          <div>
            <div className="landing__container content__header">
              <img className="container__jumbotron" src={NOWBGroupshot} alt="the new orleans wildlife band"/>
            </div>
            <div className="content__container">
              <p className="coming__soon">Coming Soon!</p>
              <p className="patience">Thanks for your patience!</p>
            </div>
          </div>
        );
    }
}

export default Landing;
