import { NavLink, useLocation } from "react-router-dom";

const Layout = ({ children, languageButtonText, toggleLanguage, languageStyleButton, toggleColor, colorStyleButton }) => {

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const headerStyle = isHomePage ? "header-home" : "";
  const footerStyle = isHomePage ? "footer-home" : "";

  return (
    <>
      <header className={`header ${headerStyle}`}>
        <div onClick={toggleColor} className={`color-toggle ${colorStyleButton}`}>
          <div className={`animate-translate`}>
            <button className={`color-button`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21" />
              </svg>
            </button>
          </div>
        </div>
        <div className="block-nav-language">
          <NavLink to="/" className="nav-menu">
            Menu //
          </NavLink>
          <div onClick={toggleLanguage} className={`language-toggle ${languageStyleButton}`}>
            <div className={`animate-translate`}>
              <button className="language-button">
                {languageButtonText}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className={`footer ${footerStyle}`}>
        <div className="footer-logo">
          <a href="https://github.com/archi974" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
            <div className="logo-bloc">
              <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581a9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z" />
              </svg>
            </div>
          </a>
          <div className="footer-logo-cv">
            <a href="/Curriculum_Vitae_Vincent_K_BIDI.pdf" target="_blank" rel="noreferrer" aria-label="Curriculum vitae au format pdf">
              <div className="logo-bloc">
                <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
                  <path d="M249.18 328.324c-9.788 15.384-19.179 30.434-40.222 45.055c-11.256 7.89-37.164 23.306-73.99 23.306C64.709 396.685 8 345.605 8 255.801c0-78.486 53.345-140.486 128.466-140.486c30.434 0 57.474 10.521 77.387 26.304c18.414 14.65 27.038 29.304 34.563 42.456l-52.58 26.273c-3.762-8.626-8.29-17.649-19.913-27.406c-12.784-10.155-25.54-13.152-36.46-13.152c-42.821 0-65.364 39.825-65.364 84.145c0 58.238 29.7 87.143 65.364 87.143c34.563 0 48.48-24.042 57.474-39.426l52.243 26.673zm184.194-204.75H504l-92.037 265.22h-67.597l-90.904-265.22h70.625l54.843 188.6z" />
                </svg>
              </div>
            </a>
          </div>
          <a href="https://www.linkedin.com/in/vincent-kbidi/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
            <div className="logo-bloc">
              <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
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