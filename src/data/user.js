const INFO = {
	main: {
		title: "Lianrui Sun",
		name: "Lianrui Sun",
		email: "lianruisun1020@gmail.com",
		logo: "../logo.jpg",
		popup: "../WPI.png",
		WPI: "../WPI_logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/LianruiSun",
		linkedin: "https://www.linkedin.com/in/lianrui-sun-5638392b4/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Full-stack engineer & AI SaaS founder",
		photo: "homepage.jpg",
		description:
			"Hi! I’m Lianrui Sun—currently pursuing an M.S. in Computer Science at NYU Courant (’27) and holding a B.S. from WPI (’25). I build production-ready web and mobile applications with React, TypeScript, Python, and AWS serverless. I founded Shangping, an AI-powered restaurant-review SaaS now live in 12 Beijing restaurants, and previously led development of an Android accessibility app for visually impaired users at InnoSpire. My passion is turning complex ideas into intuitive, scalable products that leave a positive impact.",
	},


	about: {
		title: "I’m Lianrui Sun. I live in Boston, where I improve the world.",
		description:
			"During my time in college, I had a wide range of program experiences across many fields. Many of the projects solved real-world problems and facilitated and promoted development. In the process, I keep learning and improving myself by gaining more knowledge from different fields and people. Feel free to contact me for any communication, I will remain positive and open.",
	},

	feature: {
		company: "InnoSpire (Co-work)",
		companyLogo: "innospire_logo.png",
		timeframe: "Aug 2024 – Present",
		images: ["poster1.jpg", "poster2.png", "poster3.png"],
		description: "In this work, we propose the design and development of a dual-mode language model (LM)-based multilingual mobile application, integrated with InnoSpire Glasses, to provide support and assistance to visually impaired and blind (VIB) individuals in identifying everyday objects, avoiding physical obstacles, and navigating public transportation services. The key contributions of this work are five-fold: (1) a seamless switching mechanism enabling automatic switching between online and offline modes based on network connectivity; (2) an online mode using a prompt-engineered GPT-4o model for real-time, context-aware navigation support; (3) an offline mode incorporating Phi-3-mini and YOLOv5 to provide functionality without internet access; (4) a comprehensive evaluation of system performance through experiments on diverse image datasets and multilingual surveys with VIB and sighted participants; and (5) a proof-of-concept mobile application prototype demonstrating the feasibility and effectiveness of our dual-mode assistive approach with InnoSpire Glasses.",
		link: "https://digital.wpi.edu/concern/student_works/8p58pj03v"
	},

	experiences: [
		{
			title: "AI Accessibility Application Developer - Internship",
			company: "InnoSpire Technology Limited",
			companyLogo: "InnoSpire.png",
			timeframe: "Aug 2024 – May 2025",
			images: [],
			description:
				"Led end-to-end development of an Android app that turns camera images into spoken descriptions for visually impaired and blind (VIB) users, built with Android Studio and React Native.\nIntegrated an online GPT-4o fallback through the OpenAI API, delivering richer image descriptions and fluent LLM-based interaction in multiple languages\nEmbedded quantized Small Language Models with llama.cpp, delivering local offline inference so users receive real-time assistance even without a data connection.\nIntegrated on-device YOLOv5 object detection, speech recognition, prompt-engineering, and text-to-speech pipeline to provide accurate scene understanding and natural audio feedback.",
			link: "https://www.linkedin.com/company/innospire-technology-limited/posts/?feedView=all",
		},
		{
			title: "Humanities & Arts Teaching Assistant",
			company: "Worcester Polytechnic Institute",
			companyLogo: "WPI_logo.png",
			timeframe: "Aug 2024 - Mar 2025",
			images: [],
			description:
				"Facilitate tutoring sessions to enhance student understanding of course material and foster critical thinking skills.\nSupport professors by preparing lesson materials, leading discussions, and providing constructive feedback to students/",
			link: "https://www.linkedin.com/school/worcester-polytechnic-institute/posts/?feedView=all",
		},
		{
			title: "Full-stack Developer",
			company: " AYCG, Inc",
			companyLogo: "AYCG.png",
			timeframe: "Jul 2024 – Sep 2024",
			images: [],
			description:
				"Led full stack development for a manager-facing web application.\nBuilt the back-end database framework using MySQL and back-end API using FastAPI.\nRefactored the front-end code and optimized the application performance using React.\nDeployed back-end API and database on Alibaba Cloud Relational Database Service and Elastic Compute Service.",
			link: "",
		},
	],
	articles: {
		title: "I am passionate about exploring the boundaries of knowledge, and using my knowledge and skills to bring innovation.",
		description:
			"\"To be a good professional engineer, always start to study late for exams because it teaches you how to manage time and tackle emergencies.\"",
	},

	projects: [
		{
			title: "WPI CS Major Tracker",
			description:
				"Our website is a course tracker that allows CS majors to upload their course history and see what requirements they have met for their major. The website sorts the user's courses by requirement, while also specifying whether sub-requirements (i.e. CS Systems requirement) were met. Users can see what percentage of their graduation requirements they have met. These features require logic to parse an excel file and sort the data into different categories within the database.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/typescript/typescript.png",
			linkText: "View Project",
			link: "https://www.youtube.com/watch?v=1XyqxNSywzM",
		},
		{
			title: "WPI healthy classroom website",
			description:
				"This study addresses the significant gap in understanding the impact of indoor classroom environments on student learning by developing a dynamic rating database for assessing classroom healthiness. Utilizing Awair Omni sensors, the project monitored temperature, air quality, humidity, noise, and lighting across ten classrooms at Worcester Polytechnic Institute. The methodology combined quantitative data from environmental sensors with qualitative feedback via student surveys. Data was also monitored and visualized in real-time through the website.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/typescript/typescript.png",
			linkText: "View Project",
			link: "https://lianruisun.shinyapps.io/WPIClassroomDashboard/",
		},

		{
			title: "Hospital Desktop Application Development",
			description:
				"A desktop application cooperated with Mass General Brigham using Java, Scenebuilder, CSS, and MySQL.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/orgs/CS3733-D23-Team-N/ ",
		},

		{
			title: "Personal Game development (2022)",
			description:
				"A platformer 2D game with fighting elements using Unity and C#.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/csharp/csharp.png",
			linkText: "View Project",
			link: "https://darrrrrrrrrcy.itch.io/darcys-first-game",
		},

		{
			title: "Dianping Web Crawler (2022)",
			description:
				"A web crawler using Python and BeautifulSoup to extract user data and reviews from https://www.dianping.com/, analyzing user locations and average consumption ratings, and shared the information with the local restaurant.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "",
			link: "",
		},
	],
};

export default INFO;
