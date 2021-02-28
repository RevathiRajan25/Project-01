import React,{useState} from "react";
import "../Sass/TestimonialComponent.scss";
import Profile from '../../public/images/profile.svg';
import DoubleQuotes from '../../public/images/double-quotes.svg';

const TestimonialComponent = (props) => {

  const [clientName, setClientName]= useState(props.clientName)
  const [clientPosition, setClientPosition] = useState(props.clientPosition)
  const [clientDetail, setClientDetail] = useState(props.clientDetail)
  const [clientOrg, setClientOrg] = useState(props.clientOrg)
  const [className, setClassName] = useState(props.className ? "removeTestimonial" :"")

  return (
    <div className={"testimonial" +  className}>
      <div className="testimonial-content">
        <div className="description-container">
        <p class="description">
          <img className="image" src={DoubleQuotes}/>
         {clientDetail}
        </p>
        </div>
      </div>
      <div class="testimonial-profile">
        <div class="pic"><img className="testimonial-image" src={Profile} /></div>
        <h3 class="title">
          {clientName}
          <span class="post">{clientPosition}, {clientOrg}</span>
        </h3>
      </div>
    </div>
  );
};
export default TestimonialComponent;
