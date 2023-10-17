
import { LandingPage } from './pages/landingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
