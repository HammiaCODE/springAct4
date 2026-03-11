import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Page/NavBar/NavBar";
import Form from "./Page/MainPages/Form";
import Main from "./Page/MainPages/Main";
import AllCorrect from "./Page/MainPages/AllCorrect";
import SomeCorrect from "./Page/MainPages/SomeCorrect";
import NoneCorrect from "./Page/MainPages/NoneCorrect";
import './App.css';

function App() {
  return (
     <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<Form />} />
            <Route path="/all-correct" element={<AllCorrect />} />
            <Route path="/some-correct" element={<SomeCorrect />} />
            <Route path="/none-correct" element={<NoneCorrect />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;