import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Loading from "./components/common/loading";
import { TRACKING_ID } from "./data/tracking";
import "./app.css";

// Lazy load pages for better performance
const Homepage = lazy(() => import("./pages/Homepage.jsx"));
const About = lazy(() => import("./pages/about.jsx"));
const Projects = lazy(() => import("./pages/projects.jsx"));
const Articles = lazy(() => import("./pages/articles.jsx"));
const ReadArticle = lazy(() => import("./pages/readArticle.jsx"));
const Contact = lazy(() => import("./pages/contact.jsx"));
const Notfound = lazy(() => import("./pages/404.jsx"));

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/article/:slug" element={<ReadArticle />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
