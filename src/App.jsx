import "./App.scss";
import backroundImage from "./assets/graphics/background-blobs.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Interests } from "./pages/Interests/Interests";

function App() {
  return (
    <main className="main">
      <img
        src={backroundImage}
        alt="Background image of floating, pastel-coloured blobs"
        className="main__background"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
