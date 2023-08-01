import { NavLink } from "react-router-dom";

export default function Home() {

    return (
        <>
            <p>Portfolio</p>
            <NavLink>Projects</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Contact</NavLink>
            <p>Vincent K/BIDI © 2023</p>
        </>
    )
}