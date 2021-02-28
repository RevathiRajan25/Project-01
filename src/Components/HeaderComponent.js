import { useState } from "react";
import "../Sass/HeaderComponent.scss";
import Menu from "../../public/images/menuBurger.svg";
import ChatIcon from "../../public/images/chat.svg";
import CancelIcon from "../../public/images/cancel.svg";

const HeaderComponent = () => {
  const [menu, setMenu] = useState(false);
  const [menuSection, setMenuSection] = useState("menu-section-close");
  const onClickMenu = () => {
    setMenu(true);
    setMenuSection("menu-section");
  };
  const onClickClose = () => {
    setMenu(false);
    setMenuSection("menu-section-close");
  };

  return (
    <div className="header">
      <div className="header__left">
        {menu ? (
          <img
            className="cancel-icon"
            onClick={() => onClickClose()}
            src={CancelIcon}
          />
        ) : (
          <img className="menu-icon" onClick={() => onClickMenu()} src={Menu} />
        )}
      </div>
      <div className="company-logo">
        COMPANY
        <a className="logo"> LOGO</a>
      </div>
      <div className="header__right">
        <div className="menu-item">About</div>
        <div className="menu-item">Services</div>
        <div className="menu-item">Solutions</div>
        <div className="menu-item">Blogs</div>
        <img className="chat-icon" src={ChatIcon} />
        <button className="btn">
          <img className="btn-chat-icon" src={ChatIcon} />
          Get In Touch
        </button>
      </div>
      <div className={menuSection}>
        <div className="menu-item">About</div>
        <div className="menu-item">Services</div>
        <div className="menu-item">Solutions</div>
        <div className="menu-item">Blogs</div>
      </div>
    </div>
  );
};
export default HeaderComponent;
