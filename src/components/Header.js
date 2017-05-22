import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {



    render() {
        return (
            <div className="header__container">
              <h1 className="band__header">New Orleans Wildlife Band</h1>
              <div className="band__navigation">
                  <nav>
                    <li>About Us</li>
                    <li>Music + Videos</li>
                    <li>Booking</li>
                    <li>Press</li>
                    <li>FAQs</li>
                  </nav>
                </div>
            </div>
        );
    }
}

export default Header;
