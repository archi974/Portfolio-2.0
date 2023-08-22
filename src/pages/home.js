import { NavLink } from "react-router-dom";
import other from "../fixture/other.json";

export default function Home() {
    const routeArray = ["/project", "/skills", "/contact", "/about-me"];

    return (
        <div className="bloc-home">
            <section className="home-menu">
                <p>{other.descriptionHome}</p>
                {
                    routeArray.map((route, i) => (
                        <NavLink to={route}>{other.en.titleHome[i]}</NavLink>
                    ))
                }
            </section>
            <p className="copyright-home">Vincent K/BIDI © 2023</p>
        </div>
    )
}