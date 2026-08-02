import React from "react";

function article_1(language = "en") {
	const isChinese = language === "zh";
  return {
    date: "26 Jan 2024",
    title: isChinese ? "开发健康教室评分仪表盘" : "Developing a Rating Dashboard of Healthy Classrooms",
    description:
      isChinese
				? "通过建立动态评分数据库评估教室环境健康程度，探索室内环境对学生学习体验的影响。"
				: "This study addresses the significant gap in understanding the impact of indoor classroom environments on student learning by developing a dynamic rating database for assessing classroom healthiness.",
    keywords: ["WPI", "Lianrui", "Lianrui Sun"],
    style: `
      .article-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .randImage {
        align-self: center;
        outline: 2px solid red;
      }
    `,
    body: (
      <React.Fragment>
        <div className="article-content">
          <a href="https://digital.wpi.edu/concern/student_works/jh343x65c?locale=de">
            {isChinese ? "查看 WPI 项目文章" : "Link to the article at WPI"}
          </a>
          <img
            src="https://digital.wpi.edu/downloads/th83m369r?file=thumbnail"
            alt="Healthy Classrooms thumbnail"
            className="randImage"
          />
        </div>
      </React.Fragment>
    ),
  };
}

function article_2(language = "en") {
	const isChinese = language === "zh";
  return {
    date: "01 May 2025",
    title: isChinese
			? "集成 InnoSpire 智能眼镜的双模式语言模型移动助手"
			: "Dual-Mode Language-Model Mobile Assistant Integrated with InnoSpire Glasses",
    description:
      isChinese
				? "一款可在在线 GPT-4o 与离线 Phi-3 Mini + YOLOv5 之间切换的多语言移动应用，帮助盲人及低视力用户识别物体、避开障碍并使用公共交通。"
				: "A multilingual mobile application that seamlessly switches between online GPT-4o and offline Phi-3-mini + YOLOv5 to help visually impaired and blind users identify objects, avoid obstacles, and navigate public transit.",
    keywords: [
      "WPI",
      "InnoSpire",
      "Visually Impaired",
      "Smart Glasses",
      "Lianrui Sun",
    ],
    style: `
      .article-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .randImage {
        align-self: center;
        outline: 2px solid red;
      }
    `,
    body: (
      <React.Fragment>
        <div className="article-content">
          <a href="https://digital.wpi.edu/concern/student_works/8p58pj03v">
            {isChinese ? "查看 WPI 项目" : "Link to the project at WPI"}
          </a>
          <img
            src="https://digital.wpi.edu/downloads/8049g924s?file=thumbnail"
            alt="Dual-Mode Assistant thumbnail"
            className="randImage"
          />
        </div>
      </React.Fragment>
    ),
  };
}

const myArticles = [article_2, article_1, ];

export default myArticles;
