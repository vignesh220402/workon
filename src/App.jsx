
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SinglePage from "./pages/About ";
import BlogSection from "./pages/BlogSection";
import Navbar from './Components/Navbar';


const App = () => {
  return (
   <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<SinglePage />} />
        <Route path="/Blog" element={<BlogSection />} />
      </Routes>
    </Router>
  );
}

export default App;
