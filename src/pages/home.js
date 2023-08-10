import { NavLink } from "react-router-dom";

export default function Home() {

    return (
        <>
            <div className="bloc-home">
                <section className="home-menu">
                    <p>Portfolio</p>
                    <NavLink to="/project">Projects</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about-me">About me</NavLink>
                </section>
                <p className="copyright-home">Vincent K/BIDI © 2023</p>
            </div>
        </>
    )
}