import React from 'react';
import NOWBBooking from '../images/NOWBBooking.jpg';

class Contact extends React.Component {



    render() {
        return (
          <div>
            <div className="contact__container">
              <img className="container__jumbotron" src={NOWBBooking} alt="the new orleans wildlife band contact page"/>
            </div>
          </div>
        );
    }
}

export default Contact;
