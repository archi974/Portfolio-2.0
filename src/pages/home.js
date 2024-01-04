import { NavLink } from "react-router-dom";
import other from "../fixture/other.json";

export default function Home({ language }) {
    const routeArray = ["/project", "/skills", "/contact", "/about-me"];

    return (
        <section className="bloc-home">
            <h1>{other.descriptionHome}</h1>
            {
                routeArray.map((route, i) => (
                    <NavLink key={i} to={route}>{other[language].titleHome[i]}</NavLink>
                ))
            }
            <p className="copyright-home">Vincent K/BIDI © 2023</p>
        </section>
    )
}