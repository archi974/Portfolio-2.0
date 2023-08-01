import Layout from '../components/layout';
import GoogleMapComponent from '../components/googleMap';

export default function Contact() {

    return (
        <Layout>
            <h1>Contact.</h1>
            <section>
                <h2>ADDRESS</h2>
                <p>75 avenue</p>
                <p>saint maur-des-fossées</p>
                <p>94100</p>
            </section>
            <section class="contact">
                <h2>CONTACT</h2>
                <p>vincent.k.97480@gmail.com</p>
            </section>
            <GoogleMapComponent />
        </Layout>
    )
}