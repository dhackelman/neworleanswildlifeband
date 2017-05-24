import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {



    render() {
        return (
            <div className="header__container">
              <Link to="/"><h1 className="band__header">New Orleans Wildlife Band</h1></Link>
              <div className="band__navigation">
                  <nav>
                    <Link to="/about"><li className="band__navigation__link">About</li></Link>
                    <Link to="/music"><li className="band__navigation__link">Music</li></Link>
                    <Link to="/videos"><li className="band__navigation__link">Videos</li></Link>
                    <Link to="/photos"><li className="band__navigation__link">Photos</li></Link>
                    <Link to="/calendar"><li className="band__navigation__link">Calendar</li></Link>
                    <Link to="/contact"><li className="band__navigation__link">Contact</li></Link>
                    <Link to="/links"><li className="band__navigation__link">Links</li></Link>
                  </nav>
                </div>
            </div>
        );
    }
}

export default Header;
