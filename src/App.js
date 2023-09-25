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

        <div className="flex justify-center">
          <div>
            <h1 className="mt-2 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-center text-gradient font-extrabold">
              Welcome to my portfolio.
            </h1>
            <p>My name is Nicolas Arevalo, nice to meet you!</p>
            <p>
              I am a full stack developer with experience in javascript/html/css and some React. 
              I also have experience with back-end development and SQL (server) databases. 
              And experience with ETL SSIS (python/C# apis) data warehousing tasks.
            </p>
            <p className="mt-5">
              I am currently working on a project to create a website for a local business. 
              I am also working on a personal project to create a website (this one!) to showcase my work.
            </p>
          </div>
        </div>
      </Layout>
    </>

  );
}

export default App;
