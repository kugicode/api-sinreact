import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Posts from './pages/posts';
import Nav from './components/Nav';
import Users from './pages/Users';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users/:id" element={<Users />}/>
      </Routes>
   <div></div>
  </Router>
  );
}

export default App
