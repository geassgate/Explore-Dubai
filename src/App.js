import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/get-demo" element={<DemoProduct />} />
          <Route path="/SimplePage" element={<SimplePage />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
