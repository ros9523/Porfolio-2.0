import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./style/Contact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import bg from "../images/Illustration3.svg";

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
    <div id="contact" className="contact">
      <img className="contact__bg" src={bg} />
      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__container_texts">
            <h3 className="contact__title">Get in contact</h3>
            <p className="contact__text">
              I am very approachable and would love to speak with you
            </p>
          </div>
          <div className="contact__information">
            <div className="contact__information--container">
            <span className="contacts contacts__phone">
              <FaPhoneAlt className="phone" size={15} />
            </span>
            <span className="contact__text">87963502</span>
            </div>
            <div className="contact__information--container">
            <span className="contacts contacts__email">
              <FaEnvelope className="envelope" size={15} />
            </span>
            <span className="contact__text">rofidiaz33@gmail.com</span>
          </div>
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
              type="text"
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
              color="white"
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
  );
};

export default Contact;
