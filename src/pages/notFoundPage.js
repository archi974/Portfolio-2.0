import other from "../fixture/other.json";

export default function NotFoundPage({ language }) {

    return (
        <article className="bloc-notfound">
            <h1>404</h1>
            <p>{other[language].descriptionNotFound}</p>
        </article>
    )
}