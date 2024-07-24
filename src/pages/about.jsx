import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
// import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						{/* <div className="about-logo">
							<Logo width={46} />
						</div> */}
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									About me
								</div>

								<div className="subtitle about-subtitle">
									I graduated from Harvard with a 3.97 GPA and concentrated in computer science with a secondary in mathematics and a citation in Spanish. I took enough graduate-level courses during undergrad to also graduate with a master's degree in computer science. I've been playing the drums since age 3 and one of my bands, Boom Boom Sauce, won Harvard's Battle of the Bands in 2024 (pictured). I went to Westwood High School in my hometown of Westwood, MA.
									<br></br><br></br>
									If you'd like to learn more about me, check out some of my journal entries under the <b>Personal</b> tag.
									<div className="about-padding-div"></div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="drums.png"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								{/* <div className="about-socials">
									<Socials />
								</div> */}
							</div>
						</div>
						{/* <div className="about-socials-mobile">
							<Socials />
						</div> */}
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
