import React from "react";
import {AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall} from "react-icons/bi"
import {GoLocation} from "react-icons/go"
import "./Contact.css";
function Contact() {
  return (
    <>
    {/* backgroundImage :---STYLING IS LEFT */}
    {/* <div className="title">
      <h1>Contact Us</h1></div> */}
    <div className="bgImg">
   <img src="https://trynext-react.envytheme.com/images/page-banner1.jpg" alt="img"/>
    </div>
      <div className="contact" id="contactus">
      <div className="contactDetails">
      <div className="contactCard">
        <div className="CCicon">
          <AiOutlineMail/>
        </div>
        <div className="CCInfo">
          <h3>Mail Here</h3>
          <span>coedify@gmail.com</span>
        </div>
      </div>
      <div className="contactCard">
        <div className="CCicon">
          <GoLocation/>
        </div>
        <div className="CCInfo">
          <h3>Visit Here</h3>
          <span>C-89 , Third Floor Sector-2 , Noida , 201301 Uttar Pradesh</span>
        </div>
      </div>
      <div className="contactCard">
        <div className="CCicon">
          <BiPhoneCall/>
        </div>
        <div className="CCInfo">
          <h3>Call Here</h3>
          <span>+91 9258433304</span>
        </div>
      </div>  
      </div>
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
      
    </>
  );
}

export default Contact;
