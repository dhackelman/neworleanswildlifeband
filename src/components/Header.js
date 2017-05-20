import React from 'react';
import { Link } from 'react-router';

import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';

class Header extends React.Component {



    render() {
        const logout = this.props.updateBtn ? <Logout/> : <div className="empty__container"></div>;
        return (
            <div className="header__container">
                <img className="header__logo" src={require('../styles/images/wl.png')} alt={"wildlife band Logo"}/>
                <div className="header__homerooom">
                    <h1><Link to="/">New Orleans Wildlife Band. </Link></h1>
                </div>
            </div>
        );
    }
}

export default Header;
