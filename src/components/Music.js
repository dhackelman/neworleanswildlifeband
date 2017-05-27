import React from 'react';
import { Link } from 'react-router';
import NOWBMusic from '../images/NOWBMusic.jpg';

class Music extends React.Component {



    render() {
        return (
          <div>
            <div className="music__container content__header">
              <h1 className="content__header__text">Music</h1>
              <img className="container__jumbotron" src={NOWBMusic} alt="the new orleans wildlife band music page"/>
            </div>
            <div className="content__container">
              <p className="about__text">Formed in the Fall of 2016, the New Orleans Wildlife Band brings a new energy to the bandstand. An enthusiasm for Black American Music brought this talented group of musicians together and their positive energy and musical sensitivity provides fuel for dynamic performances. They have recently completed their first album, A Dream or a Nightmare, and are preparing for its release in the summer of 2017.</p>
              <p className="about__text">Led by bassist Grayson Brockamp, their music seeks to defy labels by embracing a plethora of styles based in the tradition of swing, blues, and soul. Brockamp’s brother, Bailey Hinton sings with a Gospel sensibility that can bring a tear to your eye and a crowd to its feet.  Pianist Shea Pierre commands his instrument with a delicate touch while the melodic interplay of saxophonist Ricardo Pascal and trumpeter Ashlin Parker create a joyful wall of sound. Accompanying singer Gio Blackmon brings spirit, spunk, and an amazing vocal range. Simon Lott drives the band from the drums with a fiery passion that supports and surprises in the same breath.</p>
              <p className="about__text">Together their sound is convincing yet searching, intentional but curious. The electricity of their performances can be compared to the chicken-or-the-egg paradox: does the band get wild because of the audience, or does the audience get wild because of the band?</p>
            </div>
          </div>
        );
    }
}

export default Music;
