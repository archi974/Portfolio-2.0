import { NavLink } from "react-router-dom";
import other from "../fixture/other.json";

export default function Home() {

    return (
        <>
            <div className="bloc-home">
                {
                    other.map((data, i) => (
                        <section key={i} className="home-menu">
                            <p>{data.descriptionHome}</p>
                            <NavLink to="/project">{data.en.titleHome[0]}</NavLink>
                            <NavLink to="/skills">{data.en.titleHome[1]}</NavLink>
                            <NavLink to="/contact">{data.en.titleHome[2]}</NavLink>
                            <NavLink to="/about-me">{data.en.titleHome[3]}</NavLink>
                        </section>
                    ))
                }
                <p className="copyright-home">Vincent K/BIDI © 2023</p>
            </div>
        </>
    )
}