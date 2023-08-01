import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="logo-kasa">
        </div>
        <ul>
          <li>
            <NavLink>
              Me contacter
            </NavLink>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>

      </footer>
    </>
  );
};

export default Layout;