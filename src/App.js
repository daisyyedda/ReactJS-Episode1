/*
JSX (function that returns HTML tags)
state (a variable that are subject to change)
... (an array composed of everything in the old array and the new thing after)
&& (followed by codes to execute should the condition be true)
event (used to grab information about input)
*/

import "./App.css";
import {BrowserRouter as Router, Routes, Route }from 'react-router-dom'
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import  {Navbar } from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
