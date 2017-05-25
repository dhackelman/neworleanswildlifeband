import React from 'react';
import NOWBLinks from '../images/NOWBLinks.jpg';

class Links extends React.Component {



    render() {
        return (
          <div>
            <div className="links__container content__header">
              <img className="container__jumbotron" src={NOWBLinks} alt="the new orleans wildlife band links to other pages"/>
            </div>
            <div className="content__container">
              <p className="coming__soon">Coming Soon!</p>
              <p className="patience">Thanks for your patience!</p>
            </div>
          </div>
        );
    }
}

export default Links;
