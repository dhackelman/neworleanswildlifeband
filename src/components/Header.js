import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {



    render() {
        return (
            <div className="header__container">
              <Link to="/neworleanswildlifeband/"><h1 className="band__header">New Orleans Wildlife Band</h1></Link>
              <div className="band__navigation">
                  <nav>
                    <Link to="/neworleanswildlifeband/about"><li className="band__navigation__link">About</li></Link>
                    <Link to="/neworleanswildlifeband/music"><li className="band__navigation__link">Music</li></Link>
                    <Link to="/neworleanswildlifeband/videos"><li className="band__navigation__link">Videos</li></Link>
                    <Link to="/neworleanswildlifeband/photos"><li className="band__navigation__link">Photos</li></Link>
                    <Link to="/neworleanswildlifeband/calendar"><li className="band__navigation__link">Calendar</li></Link>
                    <Link to="/neworleanswildlifeband/contact"><li className="band__navigation__link">Contact</li></Link>
                    <Link to="/neworleanswildlifeband/links"><li className="band__navigation__link">Links</li></Link>
                  </nav>
                </div>
            </div>
        );
    }
}

export default Header;
