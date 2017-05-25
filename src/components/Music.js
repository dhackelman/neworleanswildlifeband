import React from 'react';
import { Link } from 'react-router';
import NOWBMusic from '../images/NOWBMusic.jpg';

class Music extends React.Component {



    render() {
        return (
          <div>
            <div className="music__container content__header">
              <img className="container__jumbotron" src={NOWBMusic} alt="the new orleans wildlife band music page"/>
            </div>
            <div className="content__container">
              <p className="coming__soon">Coming Soon!</p>
              <p className="patience">Thanks for your patience!</p>
            </div>
          </div>
        );
    }
}

export default Music;
