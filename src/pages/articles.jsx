import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from 'react-router-dom';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

    let navigate = useNavigate();
	const goToEditor = () => {
        navigate('/article/write-article');
    };

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialTag = searchParams.get('tag') || 'All';
    const [selectedTag, setSelectedTag] = useState(initialTag);

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		params.set('tag', selectedTag);
		navigate(`${location.pathname}?${params.toString()}`, { replace: true });
	}, [selectedTag, navigate, location.pathname, location.search]);

    const filteredArticles = myArticles.filter(article => 
        selectedTag === 'All' || article().tags.includes(selectedTag)
    );

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.articles.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>

						<div className="article-tags">
						<button
							className={`tag-button ${selectedTag === 'All' ? 'tag-button-active' : ''}`}
							onClick={() => setSelectedTag('All')}
						>
							All
						</button>
						<button
							className={`tag-button ${selectedTag === 'Thoughts' ? 'tag-button-active' : ''}`}
							onClick={() => setSelectedTag('Thoughts')}
						>
							Thoughts
						</button>
						<button
							className={`tag-button ${selectedTag === 'Reflections' ? 'tag-button-active' : ''}`}
							onClick={() => setSelectedTag('Reflections')}
						>
							Reflections
						</button>
						<button
							className={`tag-button ${selectedTag === 'About' ? 'tag-button-active' : ''}`}
							onClick={() => setSelectedTag('About')}
						>
							Personal
						</button>
						<button
							className={`tag-button ${selectedTag === 'Misc' ? 'tag-button-active' : ''}`}
							onClick={() => setSelectedTag('Misc')}
						>
							Misc
						</button>
					</div>


						<div className="articles-container">
							<div className="articles-wrapper">
								{filteredArticles.reverse().map((article) => (
									<div
										className="articles-article"
										key={article().id}
									>
										<Article
											key={article().id}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + article().id}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<button onClick={goToEditor}></button>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
