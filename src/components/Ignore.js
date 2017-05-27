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
              <div className="photo__container">
                <div className="band__photo" ><div className="overlay"></div></div>
              </div>
              <a href="https://soundcloud.com/dirty-dirty-jazz" target="_blank"><img className="social__icon" src={sc} alt="soundcloud icon"/></a>
              <a href="https://www.youtube.com/watch?v=iRyn2FxY4JY&t=38s" target="_blank"><img className="social__icon" src={yt} alt="youtube icon"/></a>
              <a href="mailto:nolawildlifeband@gmail.com" target="_blank"><img className="social__icon" id="email" src={email} alt="email icon"/></a>
            </div>
          </div>
          </div>
        );
    }
}

export default Main;

//<AlbumComingSoon/>
// <Calendar/>
// <Music/>
// <Videos/>
// <Photos/>
// <Contact/>
// <Links/>
