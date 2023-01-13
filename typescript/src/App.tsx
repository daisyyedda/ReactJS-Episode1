import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
