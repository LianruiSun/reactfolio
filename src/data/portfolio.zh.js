const PORTFOLIO_ZH = {
	profile: {
		eyebrow: "孙镰瑞（Darcy Sun）",
		name: "专注全栈 AI 应用的软件工程师。",
			subtitle:
			"我使用 React、TypeScript、Python 与云服务构建 AI 应用和可靠的软件系统。目前在百度智能云担任 AI 产品经理实习生，负责 Hogee 企业舆情监测 SaaS 的产品迭代与 Agent 规划。",
		role: "软件工程师 / AI 产品构建者",
		currentRole: "AI 产品经理实习生",
		currentCompany: "百度智能云 / Hogee",
		location: "纽约大学计算机科学硕士 / 预计 2027 年 5 月毕业",
		photo: "/homepage.jpg",
	},

	capabilities: [
		{
			index: "01",
			title: "AI 应用工程",
			description: "围绕 LLM、VLM 与端侧小模型设计应用链路，覆盖 Agent、工具调用、Prompt/Context、Few-shot 与在线/离线推理。",
			evidence: "Hogee LUI · DeepSeek V3 · GPT-4o / Phi-3 Mini / YOLOv5",
			tags: ["Agent / LUI", "LLM / VLM", "模型评测"],
		},
		{
			index: "02",
			title: "全栈工程",
			description: "从 React 前端、REST API 与数据存储，到 Serverless 云服务、运行日志和端侧模型集成，独立完成可运行产品。",
			evidence: "React · TypeScript · Python · FastAPI · AWS · DynamoDB · S3",
			tags: ["React", "Python", "AWS"],
		},
		{
			index: "03",
			title: "AI 产品落地",
			description: "从场景拆解、PRD 与功能原型，到工作流设计、模型选型、Bad Case 定位和跨团队交付，推动能力从方案走向上线。",
			evidence: "百度 · 4 个企业 POC · 8 类 Agent 工作流 · 41 个 Tool",
			tags: ["PRD", "功能原型", "POC"],
		},
	],

	caseStudies: [
		{
			index: "01",
			label: "百度智能云 · Hogee",
			title: "迭代企业舆情监测 SaaS，并规划基于 LUI 的 Agent 交互。",
			timeframe: "2026 年 5 月 — 至今",
			role: "AI 产品经理实习生｜Hogee",
			summary:
				"Hogee 是百度智能云多 Agent 数字员工平台中的企业舆情监测 SaaS。我的工作包括迭代 GUI 产品，以及围绕同一套监测与分析能力规划基于 LUI 的 Agent 交互。",
			metrics: [
				{ value: "50K+", label: "每日处理内容量" },
				{ value: "60+", label: "监测信息源" },
				{ value: "8", label: "Agent 业务工作流" },
				{ value: "41", label: "Agent Tool" },
			],
			impactLabel: "产品范围与规模",
			focusSections: [
				{
					title: "GUI SaaS 产品迭代",
					items: [
						"负责 Hogee 舆情监测 SaaS 的产品迭代，支持 4 个企业 POC；产品每日采集和处理约 50K 条内容，覆盖 60+ 社交媒体、新闻、官方及行业信息源。",
						"将可复用的数据采集能力与品牌、产品、营销活动和竞品等任务分析解耦，使同一批数据能够支持不同业务视角，避免重复采集和指标口径不一致。",
						"设计定期与一次性报告流程，将平台指标、图表和来源证据组织为大模型输入，用于生成总结、传播分析与行动建议。",
					],
				},
				{
					title: "LUI / Agent 规划",
					items: [
						"将 Agent 规划为同一套舆情能力的自然语言入口，梳理 8 类业务工作流与 41 个 Tool。",
						"明确意图识别、业务对象解析、权限校验、风险操作确认、Tool 调用、结果返回、异常处理和审计日志等交互规则。",
					],
				},
				{
					title: "技术验证与质量迭代",
					items: [
						"开发 Python API 校验工具，实现长时间查询切分、限流、失败重试、增量 JSON 持久化，以及关键词级数据量和失败信息聚合。",
						"使用模拟 API 数据构建可交互的 React 功能原型，验证复杂状态与多步骤流程；结合 Bad Case 追踪异常误报、错误聚类和长文本噪声。",
					],
				},
			],
			stack: ["React", "TypeScript", "Python", "APIs", "Postman", "Agent / LUI"],
			images: ["/hogee-product-landing.png", "/hogee-agent-marketplace.png"],
			imageSlots: 2,
			imagePlaceholder: "在此添加 Hogee 产品界面或业务流程图",
		},
		{
			index: "02",
			label: "Shangping · 熵评",
			title: "从结构化输入到 AI 点评，独立构建多租户餐饮 SaaS。",
			timeframe: "2025 年 5 月 — 2025 年 8 月",
			role: "创始人 / 全栈工程师",
			summary:
				"通过菜品、标签和评分等结构化输入生成可编辑的餐厅点评内容，并适配抖音、小红书、大众点评和美团。",
			metrics: [
				{ value: "约 2.8×", label: "餐厅反馈的评论量提升" },
				{ value: "3 家", label: "试点餐厅" },
				{ value: "5 分钟", label: "新餐厅配置时间" },
				{ value: "约 70 条", label: "优质 Few-shot 样本" },
			],
			impactLabel: "产品验证与系统结果",
			focusSections: [
				{
					title: "全栈工程实现",
					items: [
						"独立完成 React、TypeScript 与 AWS Serverless 产品实现，覆盖移动端交互、多租户 API、模型调用、HMAC 请求校验和 CloudWatch 运行日志。",
						"通过 JSON 配置菜单、品牌视觉、标签和路由，使新餐厅无需独立代码库即可在约 5 分钟内完成配置。",
					],
				},
				{
					title: "交互与模型设计",
					items: [
						"通过约 15 名消费者和 2 名餐厅经营者访谈，确认核心障碍是点评动力不足和开放式输入成本过高，因此采用结构化菜品、标签及评分，而非聊天式交互。",
						"从合作餐厅历史评论中筛选约 70 条优质样本，以餐厅信息、菜品特点和用户选择约束 DeepSeek V3，生成适配不同平台的可编辑内容。",
					],
				},
			],
			stack: ["React", "TypeScript", "API Gateway", "AWS Lambda", "DynamoDB", "S3", "CloudWatch", "DeepSeek V3"],
			images: [
				"/shangping-restaurant-pilot.jpg",
				"/shangping-platform-selection.png",
				"/shangping-review-form.png",
			],
			visualLayout: "lead-with-pair",
			imageSlots: 2,
			imagePlaceholder: "在此添加熵评产品界面或餐厅试点照片",
		},
		{
			index: "03",
			label: "InnoSpire · WPI MQP",
			title: "构建在线与离线双模式 AI 视障辅助应用。",
			timeframe: "2024 年 8 月 — 2025 年 5 月",
			role: "项目负责人 / 全栈工程师",
			summary:
				"带领 3 人团队为 InnoSpire 开发智能眼镜配套的多语言视障辅助 App，围绕公共交通导航、障碍物规避和日常物体识别提供语音交互与实时环境反馈。",
			metrics: [
				{ value: "3 人", label: "项目团队" },
				{ value: "4", label: "支持语言" },
				{ value: "99.07%", label: "平均 STT 准确率" },
				{ value: "WPI", label: "数据科学系杰出项目奖" },
			],
			impactLabel: "工程范围与交付",
			focusSections: [
				{
					title: "双模式系统架构",
					items: [
						"针对云端视觉大模型对网络连接与响应延迟的依赖，设计“在线高质量理解 + 离线基础可用”的双模式：在线调用 GPT-4o VLM，离线采用 Phi-3 Mini 与 YOLOv5。",
						"将目标检测、本地推理、语音识别和文字转语音连接为完整应用管线，使设备在无网络时仍能提供基础辅助。",
					],
				},
				{
					title: "应用开发与验证",
					items: [
						"基于 React Native 开发 Android App，集成摄像头、InnoSpire 智能眼镜、STT/TTS 与端侧模型，打通语音指令、视觉感知、模型推理和语音反馈闭环。",
						"通过语音质量、响应延迟、检测准确率实验及多语言问卷持续迭代，并完成可运行 App 与源代码交付。",
					],
				},
			],
			stack: ["React Native", "GPT-4o VLM", "YOLOv5", "Phi-3 Mini", "llama.cpp", "STT / TTS"],
			images: ["/poster1.jpg", "/poster3.png"],
			imageSlots: 3,
			imagePlaceholder: "在此添加 InnoSpire 项目图片",
		},
	],

	thinking: [
		{
			index: "01",
			title: "从业务场景定义产品边界",
			text: "先明确品牌、产品、营销活动和竞品等使用场景，再把企业需求转化为可交付的产品能力与工作流。",
			evidence: "百度：4 个企业 POC",
		},
		{
			index: "02",
			title: "把复用能力与任务分析解耦",
			text: "让采集能力沉淀为可复用的数据基础，再由不同任务承载品牌、活动、产品和竞品等分析视角。",
			evidence: "百度：采集与分析架构重构",
		},
		{
			index: "03",
			title: "让 Agent 行为可以被工程实现",
			text: "把自然语言意图拆解为业务对象、权限、确认、工具调用、结果回读和失败处理，而不是停留在对话概念上。",
			evidence: "百度：8 类工作流与 41 个 Tool",
		},
		{
			index: "04",
			title: "用数据与 Bad Case 验证链路",
			text: "通过 API 校验、采集量预览和异常追踪定位数据缺失、延迟、误报与聚类问题，再针对问题来源迭代。",
			evidence: "百度：API 校验、查询预览与异常追踪",
		},
	],

	experience: [
		{
			timeframe: "2026 年 5 月 — 至今",
			company: "百度智能云 · 智能营销",
			role: "AI 产品经理实习生｜Hogee",
			location: "中国北京",
			focus: "企业舆情监测 SaaS、4 个企业 POC、Agent 工作流与数据验证",
		},
		{
			timeframe: "2025 年 5 月 — 2025 年 8 月",
			company: "Shangping · 熵评",
			role: "创始人 / 全栈工程师",
			location: "中国北京",
			focus: "多租户 React、AWS Serverless、DeepSeek V3 与产品验证",
		},
		{
			timeframe: "2024 年 7 月 — 2024 年 8 月",
			company: "AYCG, Inc.",
			role: "全栈开发实习生",
			location: "远程",
			focus: "React、FastAPI、JWT、MySQL 与阿里云",
		},
		{
			timeframe: "2024 年 8 月 — 2025 年 5 月",
			company: "InnoSpire Technology · WPI MQP",
			role: "项目负责人 / 全栈工程师",
			location: "美国马萨诸塞州伍斯特",
			focus: "React Native、在线/离线推理、端侧模型与无障碍应用",
		},
	],
};

export default PORTFOLIO_ZH;
