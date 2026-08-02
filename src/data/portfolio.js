const PORTFOLIO = {
	profile: {
		eyebrow: "Lianrui (Darcy) Sun",
		name: "Software engineer building full-stack AI applications.",
		subtitle:
			"I build full-stack AI applications and reliable software systems. At Baidu AI Cloud, I work on a ToB media-monitoring SaaS: iterating the GUI product and planning its LUI-based Agent experience.",
		role: "Software Engineer / AI Product Builder",
		currentRole: "AI Product Manager Intern",
		currentCompany: "Baidu AI Cloud / Hogee",
		location: "NYU Courant / M.S. Computer Science / Expected May 2027",
		photo: "/homepage.jpg",
	},

	capabilities: [
		{
			index: "01",
			title: "AI application systems",
			description:
				"LLM/VLM applications, agent workflows, tool calling, prompt and context design, and online/offline model routing.",
			evidence: "Baidu media-monitoring Agent · GPT-4o / DeepSeek-V3 · llama.cpp",
			tags: ["Agents", "LLM/VLM", "Evaluation"],
		},
		{
			index: "02",
			title: "Full-stack engineering",
			description:
				"React and TypeScript interfaces connected to APIs, data workflows, cloud infrastructure, authentication, and application logging.",
			evidence: "React · Python · FastAPI · AWS Lambda · DynamoDB · S3",
			tags: ["React", "Python", "AWS"],
		},
		{
			index: "03",
			title: "Technical product execution",
			description:
				"ToB product ownership grounded in system architecture, functional prototypes, API behavior, and cross-functional delivery.",
			evidence: "Baidu · 4 enterprise POCs · 8 Agent workflows · 41 tools",
			tags: ["PRDs", "Prototypes", "POCs"],
		},
	],

	caseStudies: [
		{
			index: "01",
			label: "Baidu AI Cloud · Hogee",
			title: "Iterating a ToB media-monitoring SaaS and planning its Agent experience.",
			timeframe: "May 2026 — Present",
			role: "AI Product Manager Intern, Hogee",
			summary:
				"A ToB media-monitoring SaaS inside Baidu AI Cloud's multi-agent digital-employee platform. My scope covers iteration of the core GUI product and planning its LUI-based Agent experience around the same monitoring capabilities.",
			metrics: [
				{ value: "50K+", label: "content items processed daily" },
				{ value: "60+", label: "monitoring sources" },
				{ value: "8", label: "business workflows" },
				{ value: "41", label: "Agent tools" },
			],
			impactLabel: "Product scope & scale",
			focusSections: [
				{
					title: "SaaS iteration & Agent planning",
					items: [
						"Worked on iteration and delivery of the core GUI-based SaaS, supporting four enterprise POCs across brand, product, campaign, and competitor use cases.",
						"Planned the LUI-based Agent as a conversational interface to the same product capabilities, mapping user intents to 8 business workflows and specifying 41 tools.",
					],
				},
				{
					title: "Technical validation",
					items: [
						"Developed a Python API validation tool with time-window partitioning, rate limits, retries, incremental JSON persistence, and keyword-level volume and failure aggregation.",
						"Built functional React prototypes with mock API payloads to validate complex states and multi-step workflows before implementation.",
					],
				},
			],
			stack: ["React", "TypeScript", "Python", "APIs", "Postman", "Agent / tool calling"],
			images: ["/hogee-product-landing.png", "/hogee-agent-marketplace.png"],
			imageSlots: 2,
			imagePlaceholder: "Add Hogee screenshots, flow maps, or Agent UI here",
		},
		{
			index: "02",
			label: "Shangping · 熵评",
			title: "Building a multi-tenant AI content system for restaurant reviews.",
			timeframe: "May 2025 — Aug 2025",
			role: "Founder & Full-Stack Engineer",
			summary:
				"An AI-powered restaurant review SaaS that converts dish, tag, and rating selections into editable content for TikTok, RedNote, Dianping, and Meituan.",
			metrics: [
				{ value: "~2.8×", label: "restaurant-reported review volume vs. pre-pilot" },
				{ value: "3", label: "restaurants piloted" },
				{ value: "5 min", label: "new-restaurant configuration" },
				{ value: "70", label: "curated few-shot reviews" },
			],
			impactLabel: "System scope & results",
			focusSections: [
				{
					title: "Engineering",
					items: [
						"Built a metadata-driven multi-tenant React architecture so restaurant-specific branding, menus, tags, content, and routing could be configured without separate codebases.",
						"Deployed the application with API Gateway, AWS Lambda, DynamoDB, and S3, with tenant configuration reducing new-restaurant setup to about five minutes.",
					],
				},
				{
					title: "AI system design",
					items: [
						"Designed a DeepSeek-V3 prompt and context pipeline combining restaurant metadata, dish attributes, structured user selections, and 70 curated few-shot reviews.",
						"Translated findings from roughly 15 diner and 2 owner interviews into structured dish, tag, and rating inputs that generate editable platform-specific content.",
					],
				},
			],
			stack: ["React", "TypeScript", "API Gateway", "AWS Lambda", "DynamoDB", "S3", "CloudWatch", "DeepSeek-V3"],
			images: [
				"/shangping-restaurant-pilot.jpg",
				"/shangping-platform-selection.png",
				"/shangping-review-form.png",
			],
			visualLayout: "lead-with-pair",
			imageSlots: 2,
			imagePlaceholder: "Add 熵评 product screens, user flow, or restaurant pilot photos here",
		},
		{
			index: "03",
			label: "InnoSpire · WPI MQP",
			title: "Designing a dual-mode AI accessibility application.",
			timeframe: "Aug 2024 — May 2025",
			role: "Project Lead & Full-Stack Application Developer",
			summary:
				"A multilingual Android accessibility app that combines camera and smart-glasses inputs, voice commands, and spoken feedback for blind and low-vision users.",
			metrics: [
				{ value: "3-person", label: "project team" },
				{ value: "4", label: "supported languages" },
				{ value: "99.07%", label: "average STT accuracy" },
				{ value: "WPI", label: "Data Science Outstanding Project Award" },
			],
			impactLabel: "System scope & results",
			focusSections: [
				{
					title: "Engineering",
					items: [
						"Designed dual-mode inference with GPT-4o for online scene understanding and YOLOv5 plus Phi-3 Mini via llama.cpp for offline assistance.",
						"Built the React Native application with camera and smart-glasses inputs, voice commands, and spoken feedback in four languages.",
					],
				},
				{
					title: "System delivery",
					items: [
						"Connected perception, local inference, speech recognition, and text-to-speech into a working online/offline application pipeline.",
						"Led a 3-person engineering team through delivery of the application and source code in partnership with InnoSpire Technology.",
					],
				},
			],
			stack: ["React Native", "GPT-4o", "YOLOv5", "Phi-3 Mini", "llama.cpp", "STT / TTS"],
			images: ["/poster1.jpg", "/poster3.png"],
			imageSlots: 3,
			imagePlaceholder: "Add InnoSpire visuals here",
		},
	],

	thinking: [
		{
			index: "01",
			title: "Define",
			text: "Translate enterprise needs into explicit product boundaries, use cases, and deliverable workflows.",
			evidence: "Baidu: 4 enterprise POCs across brand, product, campaign, and competitor use cases",
		},
		{
			index: "02",
			title: "Structure",
			text: "Translate customer and product needs into PRDs, functional prototypes, and system boundaries.",
			evidence: "Baidu: PRDs, React prototypes, collection / analysis architecture",
		},
		{
			index: "03",
			title: "Orchestrate",
			text: "Define intent mapping, business-object resolution, permissions, confirmation, readback, and failure handling.",
			evidence: "Baidu: 8 workflows and 41 tools",
		},
		{
			index: "04",
			title: "Validate",
			text: "Trace missing data and model-quality failures with validation tools, previews, and targeted checks.",
			evidence: "Baidu: API validation, query previews, anomaly tracing",
		},
	],

	experience: [
		{
			timeframe: "May 2026 — Present",
			company: "Baidu AI Cloud · Intelligent Marketing",
			role: "AI Product Manager Intern, Hogee",
			location: "Beijing, China",
			focus: "ToB media-monitoring SaaS ownership, enterprise POCs, GUI and LUI experiences",
		},
		{
			timeframe: "May 2025 — Aug 2025",
			company: "Shangping · 熵评",
			role: "Founder & Full-Stack Engineer",
			location: "Beijing, China",
			focus: "Full-stack AWS architecture, multi-tenant React, AI content generation",
		},
		{
			timeframe: "Jul 2024 — Aug 2024",
			company: "AYCG, Inc.",
			role: "Full-Stack Developer Intern",
			location: "Remote",
			focus: "React, FastAPI, JWT, MySQL, Alibaba Cloud",
		},
		{
			timeframe: "Aug 2024 — May 2025",
			company: "InnoSpire Technology · WPI MQP",
			role: "Project Lead & Full-Stack Application Developer",
			location: "Worcester, MA",
			focus: "React Native, dual-mode AI inference, accessibility engineering",
		},
	],
};

export default PORTFOLIO;
