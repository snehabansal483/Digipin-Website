import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Architecture from './pages/Architecture';
import Demo from './pages/Demo';
import BatchProcessing from './pages/BatchProcessing';
import Contribute from './pages/Contribute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/batch-processing" element={<BatchProcessing />} />
            {/* <Route path="/docs" element={<Docs />} /> */}
            <Route path="/contribute" element={<Contribute />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
