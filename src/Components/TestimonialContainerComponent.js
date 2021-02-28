import React, {useEffect, useState} from "react";
import "../Sass/TestimonialContainerComp.scss";
import TestimonialComponent from "../Components/TestimonialComponent";
import ClientInfo from '../../public/JSON/clientInfo.json'

const TestimonialContainerComponent = () => {

  const [clientInfo, setClientInfo]= useState(ClientInfo)
  const [className, setClassName] = useState(false)

  // useEffect(()=>{
  //   var x = window.matchMedia("(max-width: 700px)")
    
  //   if(x.matches){
  //     console.log("clientinfo",clientInfo)
  //     var clientInfovar = clientInfo  
  //     clientInfovar.splice(0+1, clientInfovar.length -(0+1))
   
  //   }
  // })
  // alert("clientInfo", ClientInfo)
  return (
    <div className="testimonial-Container">
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonial-component">
        {clientInfo && clientInfo.map((item,index)=>{
            return(
              <TestimonialComponent 
                  clientDetail={item.clientDetail}
                  clientName={item.clientName}
                  className={className}
                  clientPosition={item.clientPosition}
                  clientOrg={item.clientOrg}
              />
            )
        })}
          
      </div>
      
    </div>
  );
};
export default TestimonialContainerComponent;
