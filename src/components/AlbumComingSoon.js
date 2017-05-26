import React from 'react';
import NOWBalbumcover from '../images/NOWBalbumcover.jpg';
class NotFound extends React.Component {
    render() {
        return (
            <div>
                <div className="container__album">
                  <img src={NOWBalbumcover} alt="album coming soon"/>
                </div>
            </div>
        );
    }
}

export default NotFound;
