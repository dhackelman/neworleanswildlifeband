import React from 'react';
import NOWBVideos from '../images/NOWBVideos.jpg';
import YouTube from 'react-youtube';

class Videos extends React.Component {



    render() {
      const opts = {
        playerVars: {
          autoplay: 0
        }
      };
      let videoId = "iRyn2FxY4JY";
        return (
          <div>
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
          </div>
        );
    }
}

export default Videos;
