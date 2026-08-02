import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import { useLanguage } from "../contexts/languageContext";

import "./styles/404.css";

const Notfound = () => {
	const { language } = useLanguage();
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, [language]);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								{language === "zh" ? "页面未找到" : "Oops!"} <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								{language === "zh" ? "无法找到你访问的页面。" : "We can't seem to find the page you're looking for."}
								<br />
								{language === "zh" ? `请求地址 ${window.location.href} 不存在。` : `The requested URL ${window.location.href} was not found on this server.`}
							</div>
							<a href="/" className="not-found-link">
								{language === "zh" ? "返回首页" : "Go back to the home page"}
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
