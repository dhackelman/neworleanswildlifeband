import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {



    render() {
        return (
            <div className="header__container">
              <Link to="/"><h1 className="band__header">New Orleans Wildlife Band</h1></Link>
              <div className="band__navigation">
                  <nav>
                    <Link to="/"><li>About Us</li></Link>
                    <Link to="/musicvideos"><li>Music + Videos</li></Link>
                    <Link to="/main"><li>Booking</li></Link>
                    <Link to="/main"><li>Press</li></Link>
                    <Link to="/main"><li>FAQs</li></Link>
                  </nav>
                </div>
            </div>
        );
    }
}

export default Header;
