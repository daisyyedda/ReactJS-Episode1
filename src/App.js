/*
JSX (function that returns HTML tags)
state (a variable that are subject to change)
... (an array composed of everything in the old array and the new thing after)
&& (followed by codes to execute should the condition be true)
event (used to grab information about input)
*/

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import { Navbar } from "./pages/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Daisy");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/profile" 
            element={<Profile/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Error/>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
