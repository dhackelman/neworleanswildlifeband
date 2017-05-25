import React from 'react';
import NOWBBooking from '../images/NOWBBooking.jpg';

class Contact extends React.Component {



    render() {
        return (
          <div>
            <div className="contact__container content__header">
              <img className="container__jumbotron" src={NOWBBooking} alt="the new orleans wildlife band contact page"/>
            </div>
            <div className="content__container">
              <p className="coming__soon">Coming Soon!</p>
              <p className="patience">Thanks for your patience!</p>
            </div>
          </div>
        );
    }
}

export default Contact;
