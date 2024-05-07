import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./Components/Nav.js";
import { Home, Website, Docs, News, About } from "./Components/pages/indexp.js";

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/Website" element={<Website />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
