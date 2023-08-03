import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormMail = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.error(error.text);
        });
        form.current.reset();
    };
    return (
        <form className="bloc-form" ref={form} onSubmit={sendEmail}>
            <section className="bloc-form_section">
                <h2>Mail</h2>
                <input type="email" name="from_email" placeholder="Mail" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required/>
                <input type="text" name="from_subject" placeholder="Subject" required/>
                <textarea className="textAreaMail" placeholder="Message" name="message" cols="30" rows="10" required></textarea>
                <button className="sendButtonMail" type="submit">Send</button>
            </section>
        </form>
    );
};

export default FormMail;
