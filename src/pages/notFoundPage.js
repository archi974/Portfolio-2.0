import other from "../fixture/other.json";
import AutoTypingText from '../components/autoTypingText';

export default function NotFoundPage({ language }) {
    const textToDisplay = "404";

    return (
        <article className="bloc-notfound">
            <AutoTypingText text={textToDisplay} />
            <p>{other[language].descriptionNotFound}</p>
        </article>
    )
}