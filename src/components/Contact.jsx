import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./style/Contact.css";
import {FaPhoneAlt,FaEnvelope} from "react-icons/fa";
import { IconContext } from "react-icons";

const Contact = () => {
  const { register, reset, handleSubmit } = useForm();

  const submit = (formdata) => {
    emailjs
      .sendForm(
        "service_miumriz",
        "template_15zl6es",
        "#form",
        "tAlX9bQ-93wCm0Opg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("success!");
        },
        (error) => {
          console.log(error.text);
          alert("Failure...", error);
        }
      );
    reset();
  };

  return (
    <>
   
    <div id="#contact" className="contact-me">
      <div className="contact">
        <div className="contact__container">
          <div className="contact__title--text">
            <h3 className="contact__title">Get in contact</h3>
            <p className="contact__text">
              I am very approachable and would love to speak with you
            </p>
          </div>
          <div className="contact__information">
            <span className="contacts contact__phone"><IconContext.Provider value={{ className:"Icon"}}><FaPhoneAlt/></IconContext.Provider> 87963502</span>
            <span className="contacts contact__email"><IconContext.Provider value={{ className:"Icon"}}><FaEnvelope/></IconContext.Provider> rofidiaz33@gmail.com</span>
          </div>
        </div>

        <div className="contact__form">
          <h1 className="contact__title">Send me a message</h1>
          <form
            id="form"
            onSubmit={handleSubmit(submit)}
            className="contact__forms"
          >
           
            <input
              {...register("first_name")}
              type="first_name"
              placeholder="name"
              id="first_name"
              className="input"
              required
            />
        

            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              id="email"
              className="input"
              required
            />
            
            <input
              {...register("subject")}
              type="text"
              placeholder="Subject"
              id="subject"
              className="input"
              required
            />

            <input
              {...register("body")}
              type="text"
              placeholder="Your message"
              id="body"
              className="input input--body"
              required
            />
            <button className="btn btn-create">Send message</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
