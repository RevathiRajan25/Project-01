import { useEffect } from "react";
import "../Sass/ServiceComponent.scss";
import conversation from "../../public/images/conversation.svg";
import techicalSupport from "../../public/images/technical-support.svg";
import settings from "../../public/images/settings.svg";

const ServiceComponent = () => {
  return (
    <div className="serviceContainer">
      {/* <div className="row"> */}
        <h1 className="service__text">
          Integer Bibidium sit amet arcu vel egestes
        </h1>
      {/* </div> */}
      <div className="row">
        <div className="card">
          <img className="card-image" src={conversation}/>
          <h4>Service name</h4>
        </div>
        <div className="card">
          <img className="card-image" src={techicalSupport}/>
          <h4>Service name</h4>
        </div>
        <div className="card">
          <img className="card-image" src={settings}/>
          <h4>Service name</h4>
        </div>
      </div>
    </div>
  );
};
export default ServiceComponent;
