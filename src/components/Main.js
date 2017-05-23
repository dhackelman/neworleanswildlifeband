import React from 'react';
import GroupStraightOn from "../images/Group-straight-on.jpg"
import BassSaxDrums from "../images/wheel_bass_sax_drums.jpg"
import PianoBass from "../images/wheel_piano_bass.jpg"


class Main extends React.Component {

    render() {

        return (
          <div>
            <div className="main__container">
            <div className="home">
              <p id="band__intro__info">Are you looking for music or entertainment for a special event ? We offer a wide range of musical styles for any event with competitive prices.Depending on your specific needs we can provide light background music consisting of swing, latin, and traditional New Orleans music or a big band experience with music ranging from Frank Sinatra to Stevie Wonder.The New Orleans Wildlife Band is based out of New Orleans and brings enthusiasm and professionalism to every event.</p>
              <br/>
              <p>For booking inquiries, please contact: Betina Brockamp - Booking Manager <a href="mailto:nolawildlifeband@gmail.com">nolawildlifeband@gmail.com</a> </p>
              <img className="band__photo" src={GroupStraightOn} alt="piano and bass"/>
            </div>
          </div>
          </div>
        );
    }
}

export default Main;
