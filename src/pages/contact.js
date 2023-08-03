import Layout from '../components/layout';
import GoogleMapComponent from '../components/googleMap';
import FormMail from '../components/formMail';

export default function Contact() {

    return (
        <Layout>
            <article className="bloc-contact">
                <h1>Contact</h1>
                <section className="adress-section">
                    <h2>ADDRESS</h2>
                    <p>saint maur-des-fossées</p>
                    <p>94100</p>
                </section>
                <section className="contact-section">
                    <h2>CONTACT</h2>
                    <p>vincent.k.97480@gmail.com</p>
                </section>
                <GoogleMapComponent />
                <FormMail />
            </article>
        </Layout>
    )
}