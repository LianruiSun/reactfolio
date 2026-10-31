import React, { useEffect, useState } from "react";
import Seo from "../components/common/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import { FadeIn } from "../components/common/animationWrappers";
import { useLanguage } from "../contexts/languageContext";
import GAMES, { GAMES_JSON_LD, JUDGE_GRAMMAR } from "../data/games";

import "./styles/games.css";

const ExternalLinks = ({ links, className }) => (
	<div className={className}>
		{links.map((link) => (
			<a key={link.href} href={link.href} target="_blank" rel="noreferrer">
				{link.label} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
			</a>
		))}
	</div>
);

const PixelWindow = ({ title, accent, className = "", children }) => (
	<section className={`px-window ${accent ? "px-window-accent" : ""} ${className}`}>
		<header className="px-window-bar">
			<span>{title}</span>
			<i aria-hidden="true">×</i>
		</header>
		<div className="px-window-body">{children}</div>
	</section>
);

const RefereeDemo = ({ demo }) => {
	const [selected, setSelected] = useState(0);
	const sample = demo.samples[selected];

	return (
		<PixelWindow title={demo.title} accent className="px-demo">
			<div className="px-demo-intro">
				<h3>{demo.heading}</h3>
				<p>{demo.description}</p>
			</div>

			<div className="px-demo-grid">
				<div className="px-demo-step">
					<h4>{demo.replyLabel}</h4>
					<div className="px-demo-samples">
						{demo.samples.map((item, index) => (
							<button
								type="button"
								key={item.text}
								aria-pressed={index === selected}
								className={index === selected ? "selected" : ""}
								onClick={() => setSelected(index)}
							>
								<span className="px-tiles" lang="zh-CN">
									{Array.from(item.text).map((char, charIndex) => <b key={`${char}-${charIndex}`}>{char}</b>)}
								</span>
								<small>{item.gloss}</small>
							</button>
						))}
					</div>
				</div>

				<div className="px-demo-step">
					<h4>{demo.modelLabel}</h4>
					<p className="px-code-label">{demo.grammarLabel}</p>
					<pre className="px-code">{JUDGE_GRAMMAR}</pre>
					<p className="px-code-label">{demo.outputLabel}</p>
					<pre className="px-code px-code-output" aria-live="polite">{sample.output}</pre>
				</div>

				<div className="px-demo-step px-demo-result">
					<h4>{demo.rulesLabel}</h4>
					<strong aria-live="polite">{sample.effect}</strong>
					<p>{sample.detail}</p>
				</div>
			</div>
			<p className="px-demo-note">{demo.note}</p>
		</PixelWindow>
	);
};

const HumanOverride = ({ game }) => (
	<section className="ho" id="human-override">
		<div className="ho-desktop">
			<div className="ho-inner">
				<div className="ho-intro">
					<PixelWindow title={game.readmeTitle}>
						<p className="ho-label">{game.label}</p>
						<h2>{game.title}</h2>
						<ul className="ho-meta">
							{game.meta.map((item) => <li key={item}>{item}</li>)}
							<li>{game.taskbarDate}</li>
						</ul>
						<p>{game.summary}</p>
						<ExternalLinks links={game.links} className="ho-links" />
					</PixelWindow>
					<PixelWindow title={game.gameplayTitle} className="ho-gameplay">
						<img src="/human-override-gameplay.jpg" alt={game.gameplayAlt} loading="lazy" />
					</PixelWindow>
				</div>

				<RefereeDemo demo={game.demo} />

				<h3 className="ho-section-title">{game.principlesTitle}</h3>
				<div className="ho-principles">
					{game.principles.map((item) => (
						<PixelWindow title={item.file} key={item.file}>
							<h4>{item.title}</h4>
							<p>{item.text}</p>
						</PixelWindow>
					))}
				</div>

				<div className="ho-specs">
					{game.specs.map((item) => (
						<div key={item.label}>
							<strong>{item.value}</strong>
							<span>{item.label}</span>
						</div>
					))}
				</div>

				<PixelWindow title={game.logTitle} className="ho-log">
					<ol>
						{game.details.map((item) => <li key={item}>{item}</li>)}
					</ol>
				</PixelWindow>
			</div>
		</div>
	</section>
);

const Yanglai = ({ game }) => (
	<section className="yl" id="yanglai">
		<div className="yl-inner">
			<div className="yl-head">
				<p className="yl-label">{game.label}</p>
				<h2>{game.title}</h2>
				<p className="yl-summary">{game.summary}</p>
				<ul className="yl-meta">
					{game.meta.map((item) => <li key={item}>{item}</li>)}
				</ul>
				<ExternalLinks links={game.links} className="yl-links" />
			</div>

			<div className="yl-stage">
				<img className="yl-shot" src="/yanglai-flock.jpg" alt={game.photoAlt} loading="lazy" />
				<aside className="yl-hud">
					<h3>{game.hudTitle}</h3>
					{game.stats.map((item) => (
						<div className="yl-hud-row" key={item.label}>
							<strong>{item.value}</strong>
							<span>{item.label}</span>
						</div>
					))}
				</aside>
			</div>

			<div className="yl-lower">
				<div className="yl-quests">
					<h3>{game.questTitle}</h3>
					<ul>
						{game.points.map((item) => <li key={item}>{item}</li>)}
					</ul>
				</div>
				<div className="yl-panels">
					<img src="/yanglai-breakout.jpg" alt={game.breakoutAlt} loading="lazy" />
					<img src="/yanglai-story.jpg" alt={game.storyAlt} loading="lazy" />
				</div>
			</div>
		</div>
	</section>
);

const IndexCard = ({ href, image, index, cta, tile }) => (
	<a className="games-index-card" href={href}>
		<span className="games-index-number">{index}</span>
		<img src={image} alt="" />
		<strong>{tile.name}</strong>
		<span className="games-index-text">{tile.tag}</span>
		<span className="games-index-link">{cta} <FontAwesomeIcon icon={faArrowDown} /></span>
	</a>
);

const Games = () => {
	const { language } = useLanguage();
	const copy = GAMES[language];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Seo title={copy.seoTitle} description={copy.seoDescription} path="/games" jsonLd={GAMES_JSON_LD} />

			<div className="page-content games-page">
				<NavBar active="games" />

				<div className="games-hero-section">
					<div className="games-hero-content">
						<FadeIn direction="up" delay={0.2}>
							<h1 className="games-hero-title">{copy.title}</h1>
						</FadeIn>
						<FadeIn direction="up" delay={0.4}>
							<p className="games-hero-subtitle">{copy.subtitle}</p>
						</FadeIn>
					</div>
				</div>

				<div className="games-main-section">
					<div className="games-container">
						<FadeIn direction="up" delay={0.2}>
							<p className="games-intro">{copy.intro}</p>
						</FadeIn>
						<div className="games-index">
							<IndexCard
								href="#human-override"
								image="/human-override-cover.jpg"
								index="01"
								cta={copy.tiles.cta}
								tile={copy.tiles.humanOverride}
							/>
							<IndexCard
								href="#yanglai"
								image="/yanglai-flock.jpg"
								index="02"
								cta={copy.tiles.cta}
								tile={copy.tiles.yanglai}
							/>
						</div>
					</div>
				</div>

				<main>
					<HumanOverride game={copy.humanOverride} />
					<Yanglai game={copy.yanglai} />

					<section className="games-archive">
						<div className="games-archive-inner">
							<h2>{copy.archiveTitle}</h2>
							{copy.archive.map((item) => (
								<a key={item.title} href={item.link} target="_blank" rel="noreferrer">
									<time>{item.year}</time>
									<strong>{item.title}</strong>
									<span>{item.description}</span>
									<em>{item.linkText} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></em>
								</a>
							))}
						</div>
					</section>
				</main>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Games;
