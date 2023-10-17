
import { LandingPage } from './pages/landingPage';
import { Intake } from './pages/intake';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/intake" element={<Intake />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
