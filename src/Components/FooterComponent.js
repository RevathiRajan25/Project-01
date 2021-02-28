import React from 'react';
import '../Sass/FooterComponent.scss';
import FacebookIcon from '../../public/images/facebookIcon.svg';
import LinkedinIcon from '../../public/images/linkedinIcon.svg';
import TwitterIcon from '../../public/images/twitterIcon.svg';
import MessageIcon from '../../public/images/messageIcon.svg';

const FooterComponent = () =>{
  return(
    <div className="footer">
       <div className="footer__left">
          © 2017 Company. All rights reserved
       </div>
       <div className="footer__right">
        <div className="footer__text">
          Follow us on:
        </div>
        <div className="footer__icon">
          <img className="icon_style" src={FacebookIcon} />
          <img className="icon_style" src={LinkedinIcon} />
          <img className="icon_style" src={TwitterIcon} />
          <img className="icon_style" src={MessageIcon} />
        </div>
       </div>
    </div>
  )
}
export default FooterComponent;