import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Layout>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </Layout>
    </>

  );
}

export default App;
