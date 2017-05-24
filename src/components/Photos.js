import React from 'react';
import NOWBPhotos from '../images/NOWBPhotos.jpg';

class Photos extends React.Component {



    render() {
        return (
          <div>
            <div className="photos__container">
              <img className="container__jumbotron" src={NOWBPhotos} alt="the new orleans wildlife band photos page"/>
            </div>
          </div>
        );
    }
}

export default Photos;
