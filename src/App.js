import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { Navigate } from 'react-router-dom';

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import WriteArticle from "./pages/writeArticle";
import Contact from "./pages/contact";

import { TRACKING_ID } from "./data/tracking";
import "./App.css";

function App() {
    useEffect(() => {
        if (TRACKING_ID !== "") {
            ReactGA.initialize(TRACKING_ID);
        }
    }, []);

    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/journal" element={<Articles />} />
                <Route path="/article/:slug" element={<ReadArticle />} />
                <Route path="/article/write-article" element={<WriteArticle />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="*" element={<Navigate to="/journal" replace />} />
            </Routes>
        </div>
    );
}

export default App;
