import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Taskbar from "./components/Taskbar";
import ExternalApp from "./components/ExternalApp";
import Escritorio from "./layouts/Escritorio";
import VSCodeSimulator from "./pages/vscode.jsx";
import MicrosoftStore from "./pages/store.jsx";
import SpotifySimulator from "./pages/spotify.jsx";
import Calculator from "./pages/calculator.jsx";
import Calendar from "./pages/calendar.jsx";

const App = () => {
  return (
    <Router>
      <Escritorio>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/spotify" element={<SpotifySimulator />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="vscode" element={<VSCodeSimulator />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/store" element={<MicrosoftStore />} />
        </Routes>
      </Escritorio>
    </Router>
  );
};

export default App;
