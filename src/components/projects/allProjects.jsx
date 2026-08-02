import React from "react";

import Project from "./project";

import INFO from "../../data/user";
import PROJECTS_ZH from "../../data/projects.zh";
import { useLanguage } from "../../contexts/languageContext";

import "./styles/allProjects.css";

const AllProjects = () => {
	const { language } = useLanguage();
	const projects = language === "zh" ? PROJECTS_ZH : INFO.projects;

	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						index={index}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
