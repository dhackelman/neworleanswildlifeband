import React from 'react';
import { Link } from 'react-router';
import NOWBGroupshot from '../images/NOWBGroupshot.jpg';
import NOWBalbumcover from '../images/NOWBalbumcover.jpg';
import NOWBCalendar from '../images/NOWBCalendar.jpg';
import NOWBMusic from '../images/NOWBMusic.jpg';
import NOWBVideos from '../images/NOWBVideos.jpg';
import YouTube from 'react-youtube';
import NOWBPhotos from '../images/NOWBPhotos.jpg';
import NOWBBooking from '../images/NOWBBooking.jpg';
import NOWBLinks from '../images/NOWBLinks.jpg';


class Landing extends React.Component {



    render() {
      const opts = {
        playerVars: {
          autoplay: 0
        }
      };
      let videoId = "iRyn2FxY4JY";
        return (
          <div>
            <div className="landing__container content__header">
              <h1 className="content__header__text" id="landing__header">The New Orleans Wildlife Band</h1>
              <img className="container__jumbotron" src={NOWBGroupshot} alt="the new orleans wildlife band"/>
          </div>
          <div className="container__album">
            <img src={NOWBalbumcover} alt="album coming soon"/>
          </div>
          <div className="calendar__container content__header">
            <h1 className="content__header__text">Calendar</h1>
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
          <div className="music__container content__header">
            <h1 className="content__header__text">Music</h1>
            <img className="container__jumbotron" src={NOWBMusic} alt="the new orleans wildlife band music page"/>
          </div>
          <div className="content__container">
            <p className="about__text">Formed in the Fall of 2016, the New Orleans Wildlife Band brings a new energy to the bandstand. An enthusiasm for Black American Music brought this talented group of musicians together and their positive energy and musical sensitivity provides fuel for dynamic performances. They have recently completed their first album, A Dream or a Nightmare, and are preparing for its release in the summer of 2017.</p>
            <p className="about__text">Led by bassist Grayson Brockamp, their music seeks to defy labels by embracing a plethora of styles based in the tradition of swing, blues, and soul. Brockamp’s brother, Bailey Hinton sings with a Gospel sensibility that can bring a tear to your eye and a crowd to its feet.  Pianist Shea Pierre commands his instrument with a delicate touch while the melodic interplay of saxophonist Ricardo Pascal and trumpeter Ashlin Parker create a joyful wall of sound. Accompanying singer Gio Blackmon brings spirit, spunk, and an amazing vocal range. Simon Lott drives the band from the drums with a fiery passion that supports and surprises in the same breath.</p>
            <p className="about__text">Together their sound is convincing yet searching, intentional but curious. The electricity of their performances can be compared to the chicken-or-the-egg paradox: does the band get wild because of the audience, or does the audience get wild because of the band?</p>
          </div>
          <div className="videos__container content__header">
            <h1 className="content__header__text">Videos</h1>
            <img className="video__placeholder container__jumbotron"src={NOWBVideos} alt="the new orleans wildlife band music page"/>
          </div>
          <div className="video__container">
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={this._onReady}
              className="video__actual"
            />
          </div>
          <div className="photos__container content__header">
            <h1 className="content__header__text">Photos</h1>
            <img className="container__jumbotron" src={NOWBPhotos} alt="the new orleans wildlife band photos page"/>
          </div>
          <div className="content__container">
            <p className="coming__soon">Coming Soon!</p>
            <p className="patience">Thanks for your patience!</p>
          </div>
          <div className="contact__container content__header">
            <h1 className="content__header__text">Booking</h1>
            <img className="container__jumbotron" src={NOWBBooking} alt="the new orleans wildlife band contact page"/>
          </div>
          <div className="content__container">
            <p className="booking__text">For booking inquiries, please contact:</p>
              <p className="booking__text">Betina Brockamp - Booking Manager</p>
              <p className="booking__text"><a href="mailto:nolawildlifeband@gmail.com">nolawildlifeband@gmail.com</a> </p>
          </div>
          <div className="links__container content__header">
            <h1 className="content__header__text">Links</h1>
            <img className="container__jumbotron" src={NOWBLinks} alt="the new orleans wildlife band links to other pages"/>
          </div>
          <div className="content__container links__content">
            <a href="www.dirtydirtyjazz.com"><h1 className="external__link">DirtyDirtyJazz.com</h1></a>
            <a href="www.simonlottmusic.com"><h1 className="external__link">SimonLottMusic.com</h1></a>
            <a href="www.nicholaspayton.com"><h1 className="external__link">NicolasPayton.com</h1></a>
            <a href="www.wwoz.org"><h1 className="external__link">WWOZ.org</h1></a>
            <a href="www.NewOrleansMusiciansClinic.org"><h1 className="external__link">NewOrleansMusiciansClinic.org</h1></a>
            <a href="www.baileyhinton.com"><h1 className="external__link">BaileyHinton.com</h1></a>
          </div>
          </div>
        );
    }
}

export default Landing;
