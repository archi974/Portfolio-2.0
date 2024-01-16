import React, { useEffect } from 'react';
import GoogleMapComponent from '../components/googleMap';
import FormMail from '../components/formMail';
import other from "../fixture/other.json";

export default function Contact({ language }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <article className="bloc-contact">
            <h1>Contact</h1>
            <div className="adress-section-bloc">
                <section className="adress-section">
                    <h2>{other[language].titleAdressContact}</h2>
                    <p>saint maur-des-fossées</p>
                    <p>94100</p>
                </section>
                <section className="contact-section">
                    <h2>CONTACT</h2>
                    <p>vincent.kbidi.974@gmail.com</p>
                </section>
            </div>
            <GoogleMapComponent />
            <section className="email-section">
                <FormMail subject={other[language].formSubjectContact} button={other[language].formButtonContact} />
            </section>
        </article>
    )
}