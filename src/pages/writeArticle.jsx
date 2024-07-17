import React, { useState } from "react";
import { Helmet } from "react-helmet";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import INFO from "../data/user";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import "./styles/writeArticle.css";

const WriteArticle = () => {

    const [article, setArticle] = useState({
        date: "",
        title: "",
        body: ""
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");

	const navigate = useNavigate();

    const handleLogin = () => {
        if (password === "abc") {
            setIsLoggedIn(true);
        } else {
            alert("Incorrect password");
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="page-content">
                <div className="login-container">
                    <div className="read-article-back">
                        <img
                            src="../back-button.png"
                            alt="back"
                            className="read-article-back-button"
                            onClick={() => navigate(-1)}
                        />
                    </div>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        );
    }

    const handleChange = (e) => {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        console.log("Article saved", article);
        // Implement save functionality (e.g., local storage, database).
    };

    const handlePost = () => {
        console.log("Article posted", article);
        // Implement post functionality.
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Write New Article</title>
            </Helmet>

            <div className="page-content">
                <NavBar />

                <div className="content-wrapper">
                    <div className="title write-articles-title">
                        Top Secret {INFO.articles.title} Page
                    </div>
                    <div className="write-article-container">
                        <div className="write-article-wrapper">
                            <input
                                className="write-article-input"
                                name="date"
                                placeholder="Date"
                                value={article.date}
                                onChange={handleChange}
                            />
                            <input
                                className="write-article-input"
                                name="title"
                                placeholder="Title"
                                value={article.title}
                                onChange={handleChange}
                            />
                            <textarea
                                className="write-article-textarea"
                                name="body"
                                placeholder="Write article here..."
                                value={article.body}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="write-article-buttons">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handlePost}>Post</button>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WriteArticle;
