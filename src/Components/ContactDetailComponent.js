import React from "react";
import "../Sass/contactDetail.scss";

const ContactDetailComponent = () => {
  const onSubmit = () => {};
  return (
    <div className="contactDetailContainer">
      <div className="contact-heading-content">
        <h1 className="contact-heading">Convinced to work with us?</h1>
        <h4>
          Company has helped agencies keep their promises to clients since 2005
        </h4>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <div className="contactDetailInputs">
            <input 
              className="detail-input" 
              placeholder="Fullname" 
              autoComplete="off"
              spellCheck="false"
              />
            <input 
              className="detail-input" 
              placeholder="Email adress"
              autoComplete="off"
              spellCheck="false"
               />
            <input
              className="detail-input nthInput"
              placeholder="Phone number"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <input className="message-input" placeholder="Message in brief" />
          {/* <div></div> */}
          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default ContactDetailComponent;
