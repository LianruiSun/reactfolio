import React from "react";

function article_1() {
	return {
		date: "26 Jan 2024",
		title: "Developing a Rating Dashboard of Healthy Classrooms",
		description:
			"This study addresses the significant gap in understanding the impact of indoor classroom environments on student learning by developing a dynamic rating database for assessing classroom healthiness.",
		keywords: [
			"WPI",
			"Lianrui",
			"Lianrui Sun",
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
					<a href="https://digital.wpi.edu/concern/student_works/jh343x65c?locale=de">Link to the article at WPI</a>
					<img
						src="https://digital.wpi.edu/downloads/th83m369r?file=thumbnail"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
