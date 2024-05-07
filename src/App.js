import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./Components/Nav.js";
import { Home } from "./Components/pages/indexp.js";

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}
