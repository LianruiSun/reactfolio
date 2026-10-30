const PORTFOLIO = {
	profile: {
		eyebrow: "Lianrui (Darcy) Sun",
		name: "Software engineer turning generative AI into reliable production products.",
		subtitle:
			"I ship AI generation features end to end: model integration, billing correctness, content platforms, and developer SDKs. I move fast with parallel coding agents, and tests, Preview acceptance, and production checks keep each release safe.",
		role: "Software Engineer / AI Applications",
		currentRole: "Full Stack Engineer, Part-Time",
		currentCompany: "Astorie · AI Video Canvas",
		location: "NYU Courant / M.S. Computer Science / Expected May 2027",
		photo: "/homepage.jpg",
	},

	capabilities: [
		{
			index: "01",
			title: "Generative AI integration",
			description:
				"Image and video models wired into a production canvas with gateway routing, pricing, and refunds; LLM generation grounded in real data; multi-agent workflows and tool schemas.",
			evidence: "Astorie · 4 generation models · public /v1 SDKs · Baidu 8 workflows / 41 tools",
			tags: ["Model integration", "LLM grounding", "Agents"],
		},
		{
			index: "02",
			title: "Reliable production systems",
			description:
				"Idempotent billing and refunds, atomic admission, versioned publishing, and large migrations that keep history, redirects, and a recovery path.",
			evidence: "27,822-URL migration · 27K+ page pipeline · 48 → 1 queries per page",
			tags: ["PostgreSQL", "Next.js", "Payload"],
		},
		{
			index: "03",
			title: "Agent-driven delivery",
			description:
				"Parallel Claude Code and Codex agents in isolated worktrees, reusable skills for repeated workflows, and release gates so speed never costs reliability.",
			evidence: "80+ merged PRs in 9 weeks, part-time",
			tags: ["Claude Code", "Codex", "Worktrees"],
		},
	],

	caseStudies: [
		{
			index: "01",
			label: "Astorie · StoryFlow AI",
			title: "Shipping generative AI features to a production video canvas, fast and safely.",
			timeframe: "Aug 2026 — Present",
			role: "Full Stack Engineer, Part-Time",
			summary:
				"Astorie is an agentic canvas where creative teams make cinematic AI videos with 100+ models. I work across the generation backend, the canvas, the public API, and the content platform behind astorie.ai.",
			metrics: [
				{ value: "80+", label: "merged PRs in 9 weeks, part-time" },
				{ value: "4", label: "image/video generation models integrated" },
				{ value: "27K+", label: "prompt pages published by pipeline" },
				{ value: "27,822", label: "URLs migrated with 301 redirects" },
			],
			impactLabel: "Shipped output",
			focusSections: [
				{
					title: "Generative AI & developer platform",
					items: [
						"Integrated Nano Banana 2.1, FLUX 3, Seedance 2.5 Draft, and Video Depth Anything with gateway routing, pricing, and refunds, then moved new models to a single declaration instead of per-model branches.",
						"Packaged generation into JavaScript and Python SDKs for the public /v1 API, covering file upload, capability discovery, retries, and idempotency keys, with CI end-to-end suites against a mock server.",
					],
				},
				{
					title: "Reliability & scale",
					items: [
						"Fixed charge/output mismatches by splitting multi-image requests into independent ordered jobs with idempotent refunds, and made gateway admission atomic to stop duplicate capacity reservations.",
						"Rebuilt the content platform on Next.js, Payload, and PostgreSQL with 18-language editing and background AI translation, plus an ingestion pipeline with daily incremental sync.",
					],
				},
			],
			stack: ["TypeScript", "Next.js", "PostgreSQL", "Payload CMS", "Vercel", "GitHub Actions", "Claude Code / Codex"],
			links: [
				{ label: "astorie.ai", href: "https://astorie.ai" },
				{ label: "Prompt Library", href: "https://astorie.ai/prompt-library" },
				{ label: "AI Tools", href: "https://astorie.ai/tools" },
			],
			images: ["/astorie-home.jpg", "/astorie-prompt-library.jpg", "/astorie-tool-page.jpg"],
			imageSlots: 3,
			imagePlaceholder: "Add Astorie product screens here",
		},
		{
			index: "02",
			label: "Baidu AI Cloud · Hogee",
			title: "Designing multi-agent workflows and tool schemas for an enterprise SaaS.",
			timeframe: "May 2026 — Sep 2026",
			role: "AI Product Manager Intern, Hogee",
			summary:
				"Hogee is an enterprise social-listening SaaS on Baidu AI Cloud's multi-agent platform. I designed how its Agent maps user intent to business workflows and API-backed tools, and owned planning through delivery.",
			metrics: [
				{ value: "8", label: "multi-agent workflows" },
				{ value: "41", label: "API-backed tools specified" },
				{ value: "~50K", label: "content items processed daily" },
				{ value: "80+", label: "monitoring sources" },
			],
			impactLabel: "System scope & scale",
			focusSections: [
				{
					title: "Agent system design",
					items: [
						"Designed 8 multi-agent workflows and input/output schemas for 41 API-backed tools, covering intent mapping, business-object resolution, permissions, confirmation, readback, and failure handling.",
						"Authored 14 PRDs (130+ requirements) and drove 6 initiatives to release; supported 5 POCs and two RMB 1M+ contracts.",
					],
				},
				{
					title: "Technical validation",
					items: [
						"Built a Python API validation pipeline that partitioned requests by date window, enforced rate limits, retried failures, and checkpointed results for keyword-level analysis of delayed and missing data.",
						"Built functional React prototypes with mock API payloads to validate complex states and multi-step workflows before implementation.",
					],
				},
			],
			stack: ["Python", "React", "TypeScript", "REST APIs", "Agent / tool calling"],
			images: ["/hogee-product-landing.png", "/hogee-agent-marketplace.png"],
			imageSlots: 2,
			imagePlaceholder: "Add Hogee screenshots, flow maps, or Agent UI here",
		},
		{
			index: "03",
			label: "Shangping · 熵评",
			title: "Grounding LLM generation in real restaurant data.",
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
					title: "AI system design",
					items: [
						"Grounded DeepSeek-V3 generation in restaurant metadata, dish attributes, and each diner's selections, and used 70 curated few-shot reviews to avoid unsupported dish claims.",
						"Translated findings from roughly 15 diner and 2 owner interviews into structured dish, tag, and rating inputs instead of an open-ended chat.",
					],
				},
				{
					title: "Engineering",
					items: [
						"Built a metadata-driven multi-tenant React architecture so restaurant-specific branding, menus, tags, content, and routing could be configured without separate codebases.",
						"Deployed with API Gateway, AWS Lambda, DynamoDB, and S3; tenant configuration cut new-restaurant setup to about five minutes.",
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
			index: "04",
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
			title: "Parallelize",
			text: "Split work into independent tickets and run Claude Code and Codex agents in isolated git worktrees, so several changes move forward without stepping on each other.",
			evidence: "Astorie: 80+ merged PRs in 9 weeks, part-time",
		},
		{
			index: "02",
			title: "Specify",
			text: "Write the plan before the code: scope, acceptance criteria, rollout order, and what stays out. Agents work best against an explicit contract.",
			evidence: "Astorie: launch plans for model integrations and the public SDKs",
		},
		{
			index: "03",
			title: "Gate",
			text: "Every release passes tests, Preview acceptance with real generations, and production smoke checks; risky migrations are rehearsed on a production-derived copy first.",
			evidence: "Astorie: 27,822-URL migration; billing fixes verified with real refunds",
		},
		{
			index: "04",
			title: "Automate",
			text: "Turn repeated work into reusable agent skills, so the next run is faster and more consistent than the last.",
			evidence: "CMS page-publishing skill · daily and weekly reports drafted from session history",
		},
	],

	experience: [
		{
			timeframe: "Aug 2026 — Present",
			company: "StoryFlow AI · Astorie",
			role: "Full Stack Engineer, Part-Time",
			location: "Remote",
			focus: "Generative AI model integration, billing reliability, public SDKs, content platform",
		},
		{
			timeframe: "May 2026 — Sep 2026",
			company: "Baidu AI Cloud · Intelligent Marketing",
			role: "AI Product Manager Intern, Hogee",
			location: "Beijing, China",
			focus: "Multi-agent workflows, tool schemas, API validation, enterprise POCs",
		},
		{
			timeframe: "May 2025 — Aug 2025",
			company: "Shangping · 熵评",
			role: "Founder & Full-Stack Engineer",
			location: "Beijing, China",
			focus: "Grounded LLM generation, multi-tenant React, AWS serverless",
		},
		{
			timeframe: "Aug 2024 — May 2025",
			company: "InnoSpire Technology · WPI MQP",
			role: "Project Lead & Full-Stack Application Developer",
			location: "Worcester, MA",
			focus: "React Native, dual-mode AI inference, accessibility engineering",
		},
		{
			timeframe: "Jul 2024 — Aug 2024",
			company: "AYCG, Inc.",
			role: "Full-Stack Developer Intern",
			location: "Remote",
			focus: "React, FastAPI, JWT, MySQL, Alibaba Cloud",
		},
	],
};

export default PORTFOLIO;
