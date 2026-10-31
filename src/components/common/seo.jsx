import React from "react";
import { Helmet } from "react-helmet";

import { useLanguage } from "../../contexts/languageContext";

const SITE_URL = "https://lianruisun.com";
const SITE_NAME = "Darcy (Lianrui) Sun";

const Seo = ({ title, fullTitle, description, path, image = "/og-image.jpg", type = "website", noindex = false, jsonLd }) => {
	const { language } = useLanguage();
	const pageTitle = fullTitle || `${title} | ${SITE_NAME}`;
	const url = `${SITE_URL}${path}`;
	const imageUrl = `${SITE_URL}${image}`;

	return (
		<Helmet>
			<title>{pageTitle}</title>
			<meta name="description" content={description} />
			{noindex && <meta name="robots" content="noindex" />}
			{!noindex && <link rel="canonical" href={url} />}

			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:locale" content={language === "zh" ? "zh_CN" : "en_US"} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />

			{jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
		</Helmet>
	);
};

export default Seo;
