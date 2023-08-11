import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import ReCAPTCHA from "react-google-recaptcha";

const FormMail = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        // const recaptchaValue = form.current['g-recaptcha-response'].value;
        // if (!recaptchaValue) {
        //     alert("Veuillez cocher la case 'Je ne suis pas un robot'");
        //     return;
        // }

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
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
                <input type="email" name="from_email" placeholder="Email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required />
                <input type="text" name="from_subject" placeholder="Subject" required />
                <textarea className="textAreaMail" placeholder="Message" name="message" cols="30" rows="10" required></textarea>
                {/* <ReCAPTCHA className="form-recaptcha" sitekey={process.env.REACT_APP_RECAPTCHA_KEY} /> */}
                <button className="sendButtonMail" type="submit">Send</button>
            </section>
        </form>
    );
};

export default FormMail;
