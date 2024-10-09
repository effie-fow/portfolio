import "./App.scss";
import backroundImage from "./assets/graphics/background-blobs.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";

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
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
