import React from 'react';
import NOWBBooking from '../images/NOWBBooking.jpg';

class Contact extends React.Component {



    render() {
        return (
          <div>
            <div className="contact__container content__header">
              <h1 className="content__header__text">Booking</h1>
              <img className="container__jumbotron" src={NOWBBooking} alt="the new orleans wildlife band contact page"/>
            </div>
            <div className="content__container">
              <p className="booking__text">For booking inquiries, please contact:</p>
                <p className="booking__text">Betina Brockamp - Booking Manager</p>
                <p className="booking__text"><a href="mailto:nolawildlifeband@gmail.com">nolawildlifeband@gmail.com</a> </p>
            </div>
          </div>
        );
    }
}

export default Contact;
