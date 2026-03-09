import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Form from "./pages/mainPages/Form";
import About from "./pages/mainPages/About";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="app">
        {/* Barra de navegación */}
        <Navbar />
        {/* Contenido de la página */}
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;