import { NavLink } from "react-router-dom";

export default function Home() {

    return (
        <>
            <p>Portfolio</p>
            <NavLink to="/project">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <p>Vincent K/BIDI © 2023</p>
        </>
    )
}