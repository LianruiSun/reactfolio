import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import INFO from "../../data/user";

import "./styles/works.css";

const Works = () => {
  const experiences = INFO.experiences || [];

  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Experience"
        body={
          <div className="works-body">
            {experiences.map((exp, idx) => (
              <div className="work" key={idx}>
                {exp.companyLogo && (
                  <img
                    src={exp.companyLogo}
                    alt={exp.company}
                    className="work-image"
                  />
                )}

                <div className="work-content">
                  <div className="work-title">{exp.title}</div>
                  <div className="work-company">{exp.company}</div>
                  <div className="work-duration">{exp.timeframe}</div>

                  {/* Optional images carousel per experience */}
                  {exp.images?.length > 0 && (
                    <div className="work-gallery">
                      {exp.images.map((imgSrc, i) => (
                        <img
                          key={i}
                          src={imgSrc}
                          alt={`${exp.company} screenshot ${i + 1}`}
                          className="work-gallery-image"
                        />
                      ))}
                    </div>
                  )}

                  <div className="work-description">{exp.description}</div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="work-link"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Works;