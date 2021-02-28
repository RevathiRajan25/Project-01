import { useEffect } from "react";
import Map from "../../public/images/map.jpg";
import "../Sass/NetworkScreen.scss";

const Screen2 = () => {
  return (
    <div className="networkScreen-container">
      <div className="networkScreen-text-content">
        <h1 className="networkScreen-text">
          Maurin id bibendum est. Proin dapibus sollicitudin iaculis maecenus
          condimentum maximus laoreet
        </h1>
        <p className="networkScreen-paragh">
          You can buy a web template, add your text and images, and use it as
          your website. You can buy an HTML site template, convert it to
          WordPress, and use it as your website (but not as a stock template for
          sale. You can buy a flyer template, modify the text, print a flyer,
          and hand it out. You can buy a game starter kit, compile it, and put
          the game on an app store. You can buy a music track and use it in your
          radio or TV ad.
        </p>
      </div>
      <img className="map-image" src={Map} />
    </div>
  );
};
export default Screen2;
