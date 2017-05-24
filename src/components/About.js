import React from 'react';
import NOWBMembers from '../images/NOWBMembers.jpg';


class About extends React.Component {

    render() {

        return (
          <div>
            <div className="about__container">
              <img className="container__jumbotron" src={NOWBMembers} alt="about the new orleans wildlife band"/>
            </div>
          </div>
        );
    }
}

export default About;
