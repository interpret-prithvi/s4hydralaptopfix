import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ChapterDetail from './pages/ChapterDetail';
import WordMatch from './pages/games/WordMatch';
import MathGame from './pages/games/MathGame';
import ScienceQuiz from './pages/games/ScienceQuiz';
import NepaliAlphabet from './pages/games/NepaliAlphabet';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subject/:subjectId/chapter/:chapterId" element={<ChapterDetail />} />
          
          {/* Game routes */}
          <Route path="/game/word-match" element={<WordMatch />} />
          <Route path="/game/math-game" element={<MathGame />} />
          <Route path="/game/science-quiz" element={<ScienceQuiz />} />
          <Route path="/game/nepali-alphabet" element={<NepaliAlphabet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
