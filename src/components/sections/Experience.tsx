import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";
import { toUpperFirst } from "../../utils";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-full w-full object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point.title}
            {point.content &&
              <ul className="ml-5 mt-2 list-disc space-y-1">
                {point.content.map((contentItem, contentIndex) => (
                  <li
                    key={`experience-point-content-${contentIndex}`}
                    className="text-white-100 pl-1 text-[14px] tracking-wider"
                  >
                    <span>
                      {toUpperFirst(Object.keys(contentItem)[0])}: {contentItem.challenge || contentItem.impact &&
                        <ul className="ml-5 mt-1 list-disc space-y-1">
                          {
                            typeof (contentItem.impact) === "object"
                              ? contentItem.impact.map((impactItem, impactIndex) => (
                                <li
                                  key={`experience-point-impact-${impactIndex}`}
                                  className="text-white-100 pl-1 text-[14px] tracking-wider"
                                >
                                  {impactItem}
                                </li>
                              ))
                              : <li className="text-white-100 pl-1 text-[14px] tracking-wider">{contentItem.impact}</li>
                          }
                        </ul>
                      }
                    </span>
                    <ul className="ml-5 mt-1 list-disc space-y-1">
                      {contentItem.solution &&
                        <li className="text-white-100 pl-1 text-[14px] tracking-wider">
                          <strong>Solution: </strong>{contentItem.solution}
                        </li>
                      }
                    </ul>
                  </li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
