import React from "react";

function article_1() {
	return {
		date: "16 July 2024",
		title: "The Beginning",
		description:
			"Welcome!",
		style: ``,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		body: (
			<React.Fragment>
				<h1>
					Did this work?
				</h1>
				<p>
					Yes.
				</p>
				<h1>
					Great.
				</h1>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "16 July 2024",
		title: "A Second Post!",
		description:
			"A second post!",
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Testing testing.</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "16 July 2024",
		title: "A third post!",
		description:
			"A third post indeed!",
		style: ``,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		body: (
			<React.Fragment>
				<h1>
					Not very enlightening.
				</h1>
			</React.Fragment>
		),
	};
}


function article_4() {
	return {
		date: "16 July 2024",
		title: "A fourth post!",
		description:
			"A fourth post indeed!",
		style: ``,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		body: (
			<React.Fragment>
				<h1>
					Not very enlightening (again).
				</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_4, article_3, article_2, article_1];

export default myArticles;
