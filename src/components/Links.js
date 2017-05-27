import React from 'react';
import NOWBLinks from '../images/NOWBLinks.jpg';

class Links extends React.Component {



    render() {
        return (
          <div>
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

export default Links;
