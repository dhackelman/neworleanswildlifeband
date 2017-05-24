import React from 'react';
import NOWBLinks from '../images/NOWBLinks.jpg';

class Links extends React.Component {



    render() {
        return (
          <div>
            <div className="links__container">
              <img className="container__jumbotron" src={NOWBLinks} alt="the new orleans wildlife band links to other pages"/>
            </div>
          </div>
        );
    }
}

export default Links;
