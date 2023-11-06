
import { LandingPage } from './pages/landingPage';
import { Intake } from './pages/intake';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Finquiz } from './pages/finquiz';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/finquiz" element={<Finquiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
