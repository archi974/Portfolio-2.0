import { NavLink, useLocation } from "react-router-dom";

const Layout = ({ children, toggleLanguage, language, styleButton }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const headerStyle = isHomePage ? "headerHome" : "";
  const footerStyle = isHomePage ? "footerHome" : "";

  return (
    <>
      <header className={`header ${headerStyle}`}>
        <NavLink to="/" className="nav-menu">
          Menu //
        </NavLink>
        <div onClick={toggleLanguage} className={`language-toggle ${styleButton}`}>
          <div className={`animate-translate`}>
            <button className="language-button">
              {language}
            </button>
          </div>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className={`footer ${footerStyle}`}>
        <div className="footer-logo">
          <a href="https://github.com/archi974" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
            <div className="logo-github-bloc">
              <svg className="logo-github" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581a9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z" />
              </svg>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/vincent-kbidi/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
            <div className="logo-linkedin-bloc">
              <svg className="logo-linkedin" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="footer-copyright">
          <p>vincent.k.97480@gmail.com</p>
          <p>Vincent K/BIDI © Portfolio 2023</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;