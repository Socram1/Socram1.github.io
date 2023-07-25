import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from "./component/Footer";
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
