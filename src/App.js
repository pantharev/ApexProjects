import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import CubeAnimation from './components/CubeAnimation';
import Blog from './pages/Blog';
import Sun from './components/Sun';
import Blogs from './components/Blogs';


const lightTheme = {
  background: "#f5f5f5",
  text: "#333",
};

const darkTheme = {
  background: "#111",
  text: "#f5f5f5",
};

const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log("prefersDarkMode", prefersDarkMode);
    document.getElementById("root").style.backgroundColor = prefersDarkMode ? "rgb(17, 17, 17)" : "rgb(245, 245, 245)";
    setTheme(prefersDarkMode ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    document.getElementById("root").style.backgroundColor = theme == "light" ? "rgb(17, 17, 17)" : "rgb(245, 245, 245)";
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppWrapper>
        <Sun />
      <Header toggleTheme={toggleTheme} theme={theme} />
        <Layout className={`flex justify-center ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slugId" element={<Blog />} />
            </Routes>
        </Layout>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
