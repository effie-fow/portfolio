import "./App.scss";
import backroundImage from "./assets/graphics/background-blobs.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Interests } from "./pages/Interests/Interests";
import { Projects } from "./pages/Projects/Projects";
import { Resume } from "./pages/Resume/Resume";
import { Contact } from "./pages/Contact/Contact";
import { useState } from "react";
import { RotationButton } from "./components/RotationButton/RotationButton";

function App() {
  const [rotate, setRotate] = useState(true);

  const handleRotateClick = () => {
    rotate ? setRotate(false) : setRotate(true);
  };

  return (
    <BrowserRouter>
      <main className="main">
        <img
          src={backroundImage}
          alt="Background image of floating, pastel-coloured blobs"
          className={`main__background ${
            rotate ? "" : "main__background--no-rotation"
          }`}
        />
        <RotationButton rotate={rotate} handleRotateClick={handleRotateClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
