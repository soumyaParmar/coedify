import React from "react";
// import { Map } from "google-maps-react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contact">
        <h1>Get in Touch</h1>
        <div className="contact__form">
          <form action="POST">
            <div className="nameEmail">
              <input required type="text" placeholder="Name*" />
              <input required type="email" name="" id="" placeholder="Email*" />
            </div>
            <div className="phoneSubject">
              <input required type="number" placeholder="Phone" />
              <input required type="text" name="" id="" placeholder="Subject" />
            </div>
            <div className="message">
              <textarea
                required
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn__submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="details">
        <div className="details__left">
          <div className="details__card">
            <h1>Contact Address:</h1>
            <p>
              The IT industry offers a sea of options, from platforms,
              programming languages, methodologies, technologies, tools, and
              more.
            </p>
            <span>(312) 895-9800</span>
            <span>hello.me@ozen.com</span>
            <span>121 St, Melbourne VIC 3000, Australia</span>
            <div className="socialmedia"></div>
          </div>
        </div>
        <div className="details__right">{/* <Map google={google} /> */}</div>
      </div>
    </>
  );
}

export default Contact;
