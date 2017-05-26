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
              <div className="event-calendar">
                <div className="head">
                  <p className="top-line">upcoming events</p>
                </div>
                <div className="spacer"></div>
                <div className="event-list">
                  <a href="#" className="event">
                    <div className="event-container">
                      <span className="date-container">
                        <span className="date">6th<span className="month">june</span></span>
                      </span>
                      <span className="detail-container">
                        <span className="title">The Jazz Playhouse</span>
                        <span className="description">8:00pm - Midnight</span>
                      </span>
                    </div>
                  </a>
                <div className="spacer"></div>
                <a href="#" className="event">
                  <div className="event-container">
                    <span className="date-container">
                      <span className="date">7th<span className="month">june</span></span>
                    </span>
                    <span className="detail-container">
                      <span className="title">Marigny Brasserie</span>
                      <span className="description">7:00pm - 11:00pm</span>
                    </span>
                  </div>
                </a>
                <div className="spacer"></div>
                <a href="#" className="event">
                  <div className="event-container">
                    <span className="date-container">
                      <span className="date">21st<span className="month">june</span></span>
                    </span>
                    <span className="detail-container">
                      <span className="title">Marigny Brasserie</span>
                      <span className="description">7:00pm - 11:00pm</span>
                    </span>
                  </div>
                </a>
                <div className="spacer"></div>
            </div>
            </div>
            </div>
          </div>
        );
    }
}

export default Calendar;
