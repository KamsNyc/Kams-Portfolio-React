import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Contact, Home, Services} from "./components/pages";
import Projects from "./components/pages/Projects";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App"> 

       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
