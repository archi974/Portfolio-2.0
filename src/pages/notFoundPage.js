import other from "../fixture/other.json";
import { NavLink } from "react-router-dom";
import AutoTypingText from '../components/autoTypingText';

export default function NotFoundPage({ language }) {
    const textToDisplay = "404";

    return (
        <article className="bloc-notfound">
            <AutoTypingText text={textToDisplay} />
            <p>{other[language].notFoundPage.description} <NavLink to={"/"}>menu</NavLink> !</p>
        </article>
    )
}