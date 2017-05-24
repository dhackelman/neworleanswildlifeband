import React from 'react';
import NOWBCalendar from '../images/NOWBCalendar.jpg';

class Calendar extends React.Component {



    render() {
        return (
          <div>
            <div className="photos__container">
              <img className="container__jumbotron" src={NOWBCalendar} alt="the new orleans wildlife band calendar page"/>
            </div>
          </div>
        );
    }
}

export default Calendar;
