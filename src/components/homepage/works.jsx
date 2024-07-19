import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ddog.png"
								alt="Datadog"
								className="work-image"
							/>
							<div className="work-title">Datadog</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./seas.png"
								alt="Harvard"
								className="work-image"
							/>
							<div className="work-title">Research Assistant</div>
							<div className="work-subtitle">
								Data systems research assistant
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./harvard.png"
								alt="Harvard"
								className="work-image"
							/>
							<div className="work-title">Teaching Fellow</div>
							<div className="work-subtitle">
								Statistics 110, 111 Teaching Fellow
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./hsa.png"
								alt="Harvard"
								className="work-image"
							/>
							<div className="work-title">Harvard Student Agencies</div>
							<div className="work-subtitle">
								Managing Director, CTO
							</div>
							<div className="work-duration">2019 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./prepared.jpeg"
								alt="Prepared"
								className="work-image"
							/>
							<div className="work-title">Prepared</div>
							<div className="work-subtitle">
								Sales
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./toppings.jpeg"
								alt="Toppings"
								className="work-image"
							/>
							<div className="work-title">Toppings</div>
							<div className="work-subtitle">
								Cofounder
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
