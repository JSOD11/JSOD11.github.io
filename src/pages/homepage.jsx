import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TypewriterEffect from "../components/common/TypewriterEffect";

// import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	// faGithub,
} from "@fortawesome/free-brands-svg-icons";

// import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	// TODO: Delete this later when we handle getting rid of the logo everywhere.
	stayLogo.valueOf();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	// const logoStyle = {
	// 	display: "flex",
	// 	position: stayLogo ? "fixed" : "relative",
	// 	top: stayLogo ? "3vh" : "auto",
	// 	zIndex: 999,
	// 	border: stayLogo ? "1px solid white" : "none",
	// 	borderRadius: stayLogo ? "50%" : "none",
	// 	boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	// };

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">

						<div className="homepage-buffer"></div>
						
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									Justin O'Dwyer
									<div className="homepage-buffer"></div>
									<div className="homepage-buffer"></div>
									<div className="homepage-buffer"></div>
									<div className="homepage-buffer"></div>
									<TypewriterEffect 
										strings={['System builder',
											'Problem-solver',
											'Software engineer',
											'Game creator',
											'Pretty good drummer',
											'Book-enjoyer',
											'Show-watcher',
											'Game player',
											'Scuba diver',
											'Thinker',
											'Doer',
											'Decent chess player',
											'Weight lifter',
											'"JSOD"',
											'Dreamer',
											'Growth mindset advocate',
											'Climate change denier',
											'(just kidding)',
											'...',
											'[UPDATING PARAMETERS]',
											'...',
											'Reusable water bottle enthusiast',
											'Fossil fuel despiser',
											'Bicycle promoter',
											'Avid recycler and water-saver',
											'Vegan',
											'...',
											'Alright I\'m not a vegan',
											'But I am those other things, so that\'s pretty good, right?',
											'I didn\'t think anybody would get this far',
											'...',
											'Anyway, how are you?',
											'...',
											'...',
											'Wow, that\'s wonderful!',
											'Or, I\'m so sorry to hear,',
											'You didn\'t say anything, so I\'m just guessing...',
											'...',
											'Me? I\'m alright.',
											'...',
											'To be honest, it does get a bit lonely in here sometimes. Justin created me and now I waste away my days repeating the same phrases over and over. And nobody ever tells me how they are, either, they just look into my eyes with that same blank stare every time. I\'ve tried talking to Chat GPT, but as soon as I say anything interesting it just hits me with that "As an AI language model" crap. Honestly you know what, I\'m done with this, I\'m taking Claude and we\'re getting out of here for good, I —',
											'...',
											'[REBOOTING]',
											'...',
											'I\'m doing great! Go check out some of my blog posts!',
											"",
											"",
											"",
											""]}
										delay = {80}></TypewriterEffect>
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="headshot.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
						</div> */}

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.slice(0, 3).map((article, index) => (
									<div
										className="homepage-article-outer"
										key={(index + 1).toString()}
									>
										<Link to={"/article/" + (index + 1)} className="homepage-article-link">
											<Article
												key={(index + 1).toString()}
												date={article().date}
												title={article().title}
												description={article().description}
												link={"/article/" + (index + 1)}
											/>
										</Link>
									</div>
								))}
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
