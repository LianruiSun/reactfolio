import React from "react";

import Project from "./project";

import INFO from "../../data/user";
import PROJECTS_ZH from "../../data/projects.zh";
import { useLanguage } from "../../contexts/languageContext";

import "./styles/allProjects.css";

const GROUP_COPY = {
	en: { featured: "AI products", archive: "Archive · earlier projects" },
	zh: { featured: "AI 产品", archive: "存档 · 早期项目" },
};

const ProjectGrid = ({ projects }) => (
	<div className="all-projects-container">
		{projects.map((project, index) => (
			<div className="all-projects-project" key={project.title}>
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

const AllProjects = () => {
	const { language } = useLanguage();
	const projects = language === "zh" ? PROJECTS_ZH : INFO.projects;
	const copy = GROUP_COPY[language];
	const featured = projects.filter((project) => !project.archived);
	const archived = projects.filter((project) => project.archived);

	return (
		<>
			<h2 className="all-projects-group-title">{copy.featured}</h2>
			<ProjectGrid projects={featured} />
			{archived.length > 0 && (
				<>
					<h2 className="all-projects-group-title all-projects-group-archive">{copy.archive}</h2>
					<ProjectGrid projects={archived} />
				</>
			)}
		</>
	);
};

export default AllProjects;
