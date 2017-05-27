import React from 'react';
import NOWBPhotos from '../images/NOWBPhotos.jpg';

class Photos extends React.Component {



    render() {
        return (
          <div>
            <div className="photos__container content__header">
              <h1 className="content__header__text">Photos</h1>
              <img className="container__jumbotron" src={NOWBPhotos} alt="the new orleans wildlife band photos page"/>
            </div>
            <div className="content__container">
              <p className="coming__soon">Coming Soon!</p>
              <p className="patience">Thanks for your patience!</p>
            </div>
          </div>
        );
    }
}

export default Photos;
