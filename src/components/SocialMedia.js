import React from 'react';
import { Link } from 'react-router';
import sc from "../images/sc.png"
import yt from "../images/yt.png"
import email from "../images/email.png"

class Header extends React.Component {



    render() {
        return (
            <div>
              <div className="band__social__media">
                  <a href="https://soundcloud.com/dirty-dirty-jazz" target="_blank"><img className="social__icon" src={sc} alt="soundcloud icon"/></a>
                  <a href="https://www.youtube.com/watch?v=iRyn2FxY4JY&t=38s" target="_blank"><img className="social__icon" src={yt} alt="youtube icon"/></a>
                  <a href="mailto:nolawildlifeband@gmail.com" target="_blank"><img className="social__icon" id="email" src={email} alt="email icon"/></a>
              </div>
            </div>
        );
    }
}

export default Header;
