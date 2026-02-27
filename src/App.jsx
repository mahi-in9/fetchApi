import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
      </Routes>
    </>
  );
}

export default App;
