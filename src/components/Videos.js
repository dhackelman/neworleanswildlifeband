import React from 'react';
import NOWBVideos from '../images/NOWBVideos.jpg';

class Videos extends React.Component {



    render() {
        return (
          <div>
            <div className="videos__container">
              <img className="video__placeholder"src={NOWBVideos} alt="the new orleans wildlife band music page"/>
            </div>
          </div>
        );
    }
}

export default Videos;
