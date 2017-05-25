import React from 'react';
import NOWBCalendar from '../images/NOWBCalendar.jpg';

class Calendar extends React.Component {



    render() {
        return (
          <div>
            <div className="photos__container content__header">
              <img className="container__jumbotron" src={NOWBCalendar} alt="the new orleans wildlife band calendar page"/>
            </div>
            <div className="content__container">
              <p className="coming__soon">Coming Soon!</p>
              <p className="patience">Thanks for your patience!</p>
            </div>
          </div>
        );
    }
}

export default Calendar;
