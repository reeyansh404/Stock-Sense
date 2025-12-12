import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';

import Home from './pages/home';
import Market from './pages/market';
import Portfolio from './pages/portfolio';
import MarketNews from './pages/news';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar />

        {/* Main Content - No Sidebar! */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/news" element={<MarketNews />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;