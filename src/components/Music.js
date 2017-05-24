import React from 'react';
import { Link } from 'react-router';
import NOWBMusic from '../images/NOWBMusic.jpg';

class Music extends React.Component {



    render() {
        return (
          <div>
            <div className="music__container">
              <img className="container__jumbotron" src={NOWBMusic} alt="the new orleans wildlife band music page"/>
            </div>
          </div>
        );
    }
}

export default Music;
