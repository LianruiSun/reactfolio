import React, { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LanguageContext = createContext(null);

const getInitialLanguage = () => {
	if (typeof window === "undefined") return "en";

	try {
		const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
		if (savedLanguage === "en" || savedLanguage === "zh") return savedLanguage;
	} catch (_) {
		// Continue with system-language detection when storage is unavailable.
	}

	const systemLanguage = window.navigator.languages?.[0] || window.navigator.language || "en";
	return /^zh(?:-|$)/i.test(systemLanguage) ? "zh" : "en";
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(getInitialLanguage);

	useLayoutEffect(() => {
		document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
	}, [language]);

	const value = useMemo(
		() => ({
			language,
			toggleLanguage: () => setLanguage((current) => {
				const nextLanguage = current === "zh" ? "en" : "zh";
				try {
					window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
				} catch (_) {
					// The language switch still works for the current session.
				}
				return nextLanguage;
			}),
		}),
		[language]
	);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
	return context;
};
