import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import NotFoundPage from './pages/notFoundPage';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/project" exact element={<Projects />}/>
          <Route path="/skills" exact element={<Skills />}/>
          <Route path="/contact" exact element={<Contact />}/>
          <Route path="/404" exact element={<NotFoundPage />}/>
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
  );
}

export default App;