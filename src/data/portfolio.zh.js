const PORTFOLIO_ZH = {
	profile: {
		eyebrow: "孙镰瑞（Darcy Sun）",
		name: "把生成式 AI 做成可靠生产产品的软件工程师。",
		subtitle:
			"我端到端交付 AI 生成功能：模型接入、计费正确性、内容平台和开发者 SDK。我用并行的编程 Agent 加快交付，再用测试、Preview 验收和生产检查保证每次上线可靠。",
		role: "软件工程师 / AI 应用",
		currentRole: "全栈工程师（兼职）",
		currentCompany: "Astorie · AI 视频画布",
		location: "纽约大学计算机科学硕士 / 预计 2027 年 5 月毕业",
		photo: "/homepage.jpg",
	},

	capabilities: [
		{
			index: "01",
			title: "生成式 AI 接入",
			description: "把图像和视频模型接入生产画布，覆盖 gateway 路由、定价与退款；用真实数据约束 LLM 生成；设计多 Agent 工作流与 Tool schema。",
			evidence: "Astorie · 4 个生成模型 · 公开 /v1 SDK · 百度 8 类工作流 / 41 个 Tool",
			tags: ["模型接入", "LLM 约束生成", "Agent"],
		},
		{
			index: "02",
			title: "可靠的生产系统",
			description: "幂等的计费与退款、原子化准入、带版本的发布流程，以及保留历史、跳转和回滚路径的大规模迁移。",
			evidence: "27,822 条 URL 迁移 · 27K+ 页面数据管线 · 每页查询 48 → 1",
			tags: ["PostgreSQL", "Next.js", "Payload"],
		},
		{
			index: "03",
			title: "Agent 驱动的交付",
			description: "在隔离的 worktree 中并行运行 Claude Code 与 Codex，把重复流程沉淀成可复用的 skill，并用上线关卡保证速度不以可靠性为代价。",
			evidence: "兼职 9 周合并 80+ 个 PR",
			tags: ["Claude Code", "Codex", "Worktree"],
		},
	],

	caseStudies: [
		{
			index: "01",
			label: "Astorie · StoryFlow AI",
			title: "快速而可靠地把生成式 AI 功能交付到生产级视频画布。",
			timeframe: "2026 年 8 月 — 至今",
			role: "全栈工程师（兼职）",
			summary:
				"Astorie 是一个 Agent 化的创作画布，创意团队可以在上面调用 100+ 个模型制作电影感 AI 视频。我的工作覆盖生成后端、画布、公开 API，以及 astorie.ai 背后的内容平台。",
			metrics: [
				{ value: "80+", label: "兼职 9 周合并的 PR" },
				{ value: "4", label: "接入的图像/视频生成模型" },
				{ value: "27K+", label: "数据管线发布的 Prompt 页面" },
				{ value: "27,822", label: "带 301 跳转迁移的 URL" },
			],
			impactLabel: "交付成果",
			focusSections: [
				{
					title: "生成式 AI 与开发者平台",
					items: [
						"接入 Nano Banana 2.1、FLUX 3、Seedance 2.5 Draft 和 Video Depth Anything，覆盖 gateway 路由、定价与退款；并把新模型接入改为只需一份声明配置，而不是在节点里写按模型的分支。",
						"为公开 /v1 API 封装 JavaScript 和 Python SDK，覆盖文件上传、能力查询、重试和幂等键；CI 对 mock server 运行两套端到端测试。",
					],
				},
				{
					title: "可靠性与规模",
					items: [
						"把多图请求拆成相互独立、按顺序聚合的子任务并配合幂等退款，修复扣费与产出不一致；把 gateway 准入改为原子操作，避免重复占用并发容量。",
						"基于 Next.js、Payload 和 PostgreSQL 重建内容平台，支持 18 种语言编辑和后台 AI 翻译，并搭建带每日增量同步的数据导入管线。",
					],
				},
			],
			stack: ["TypeScript", "Next.js", "PostgreSQL", "Payload CMS", "Vercel", "GitHub Actions", "Claude Code / Codex"],
			links: [
				{ label: "astorie.ai", href: "https://astorie.ai" },
				{ label: "Prompt Library", href: "https://astorie.ai/prompt-library" },
				{ label: "AI 工具", href: "https://astorie.ai/tools" },
			],
			images: ["/astorie-home.jpg", "/astorie-prompt-library.jpg", "/astorie-tool-page.jpg"],
			imageSlots: 3,
			imagePlaceholder: "在此添加 Astorie 产品界面",
		},
		{
			index: "02",
			label: "百度智能云 · Hogee",
			title: "为企业 SaaS 设计多 Agent 工作流与 Tool schema。",
			timeframe: "2026 年 5 月 — 2026 年 9 月",
			role: "AI 产品经理实习生｜Hogee",
			summary:
				"Hogee 是百度智能云多 Agent 平台上的企业舆情监测 SaaS。我设计了 Agent 如何把用户意图映射到业务工作流和 API Tool，并负责从规划到交付的全过程。",
			metrics: [
				{ value: "8", label: "多 Agent 工作流" },
				{ value: "41", label: "API Tool 定义" },
				{ value: "约 50K", label: "每日处理内容量" },
				{ value: "80+", label: "监测信息源" },
			],
			impactLabel: "系统范围与规模",
			focusSections: [
				{
					title: "Agent 系统设计",
					items: [
						"设计 8 类多 Agent 工作流和 41 个 API Tool 的输入输出 schema，明确意图识别、业务对象解析、权限校验、风险操作确认、结果回读和异常处理等规则。",
						"撰写 14 份 PRD（130+ 条需求），推动 6 项需求上线；支持 5 个企业 POC 和两份百万元以上的合同。",
					],
				},
				{
					title: "技术验证",
					items: [
						"开发 Python API 校验工具，按时间窗口切分请求、限流、失败重试并增量保存结果，用于关键词级的数据延迟与缺失分析。",
						"使用模拟 API 数据构建可交互的 React 功能原型，在开发前验证复杂状态与多步骤流程。",
					],
				},
			],
			stack: ["Python", "React", "TypeScript", "REST API", "Agent / Tool 调用"],
			images: ["/hogee-product-landing.png", "/hogee-agent-marketplace.png"],
			imageSlots: 2,
			imagePlaceholder: "在此添加 Hogee 产品界面或业务流程图",
		},
		{
			index: "03",
			label: "Shangping · 熵评",
			title: "用真实餐厅数据约束 LLM 生成。",
			timeframe: "2025 年 5 月 — 2025 年 8 月",
			role: "创始人 / 全栈工程师",
			summary:
				"通过菜品、标签和评分等结构化输入生成可编辑的餐厅点评内容，并适配抖音、小红书、大众点评和美团。",
			metrics: [
				{ value: "约 2.8×", label: "餐厅反馈的评论量提升" },
				{ value: "3 家", label: "试点餐厅" },
				{ value: "5 分钟", label: "新餐厅配置时间" },
				{ value: "70 条", label: "精选 Few-shot 样本" },
			],
			impactLabel: "系统范围与结果",
			focusSections: [
				{
					title: "AI 系统设计",
					items: [
						"以餐厅信息、菜品特点和每位顾客的选择约束 DeepSeek V3 生成，并用 70 条精选 Few-shot 样本避免编造菜品描述。",
						"通过约 15 名消费者和 2 名餐厅经营者访谈，采用结构化的菜品、标签及评分输入，而不是开放式的聊天交互。",
					],
				},
				{
					title: "全栈工程实现",
					items: [
						"独立完成 React、TypeScript 与 AWS Serverless 产品实现，覆盖多租户 API、模型调用、HMAC 请求校验和 CloudWatch 运行日志。",
						"通过配置管理菜单、品牌视觉、标签和路由，使新餐厅无需独立代码库，约 5 分钟即可完成配置。",
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
			index: "04",
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
			title: "并行",
			text: "把工作拆成相互独立的任务，在隔离的 git worktree 中并行运行 Claude Code 和 Codex，让多个改动同时推进、互不干扰。",
			evidence: "Astorie：兼职 9 周合并 80+ 个 PR",
		},
		{
			index: "02",
			title: "先定方案",
			text: "写代码前先写清楚范围、验收标准、上线顺序和不做的事。Agent 在明确的约定下效果最好。",
			evidence: "Astorie：模型接入和公开 SDK 的上线方案",
		},
		{
			index: "03",
			title: "设关卡",
			text: "每次上线都要通过测试、用真实生成做 Preview 验收、再做生产冒烟检查；高风险迁移先在生产数据副本上演练。",
			evidence: "Astorie：27,822 条 URL 迁移；计费修复用真实退款验证",
		},
		{
			index: "04",
			title: "自动化",
			text: "把重复工作沉淀为可复用的 Agent skill，让下一次比上一次更快、更一致。",
			evidence: "CMS 页面发布 skill · 从会话记录生成日报和周报",
		},
	],

	experience: [
		{
			timeframe: "2026 年 8 月 — 至今",
			company: "StoryFlow AI · Astorie",
			role: "全栈工程师（兼职）",
			location: "远程",
			focus: "生成式 AI 模型接入、计费可靠性、公开 SDK 与内容平台",
		},
		{
			timeframe: "2026 年 5 月 — 2026 年 9 月",
			company: "百度智能云 · 智能营销",
			role: "AI 产品经理实习生｜Hogee",
			location: "中国北京",
			focus: "多 Agent 工作流、Tool schema、API 校验与企业 POC",
		},
		{
			timeframe: "2025 年 5 月 — 2025 年 8 月",
			company: "Shangping · 熵评",
			role: "创始人 / 全栈工程师",
			location: "中国北京",
			focus: "约束式 LLM 生成、多租户 React 与 AWS Serverless",
		},
		{
			timeframe: "2024 年 8 月 — 2025 年 5 月",
			company: "InnoSpire Technology · WPI MQP",
			role: "项目负责人 / 全栈工程师",
			location: "美国马萨诸塞州伍斯特",
			focus: "React Native、在线/离线推理、端侧模型与无障碍应用",
		},
		{
			timeframe: "2024 年 7 月 — 2024 年 8 月",
			company: "AYCG, Inc.",
			role: "全栈开发实习生",
			location: "远程",
			focus: "React、FastAPI、JWT、MySQL 与阿里云",
		},
	],
};

export default PORTFOLIO_ZH;
