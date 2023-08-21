import Layout from '../components/layout';
import other from "../fixture/other.json";

export default function NotFoundPage() {

    return (
        <Layout>
            <article className="bloc-notfound">
                <h1>404</h1>
                <p>{other[0].en.descriptionNotFound}</p>
            </article>
        </Layout>
    )
}