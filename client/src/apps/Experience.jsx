import React from "react";
import "../cob.css";

export default function Experience() {
  const experiences = [
    {
      title: "Chairman and Lead Developer",
      company: "Project Torch • Blacksburg, VA, USA",
      duration: "May 2024 - Present",
      details: [
        "Lead a team of 10+ developers to build free websites and software solutions for local Blacksburg businesses.",
        "Conduct training sessions to teach React, Node.js, and related libraries to enhance project outcomes.",
        "The sites I've built have over 10,000 unique monthly visitors."
      ],
    },
    {
      title: "Research Assistant",
      company: "Virginia Tech • Blacksburg, VA, USA",
      duration: "Jan 2024 - Present",
      details: [
        "Researching Human-Computer Interaction (HCI) to integrate large language models into higher education.",
        "Built a scalable web app with a task panel, coding interface, and real-time chat using a custom ChatGPT agent, supporting 100+ concurrent users.",
        "Designed and implemented PostgreSQL database with AWS RDS, collecting 250GB+ of user interaction data for enhanced AI functionalities."
      ],
    },
    {
      title: "Backend Software Engineer",
      company: "General Atomics CCRi• Charlottesville, VA, USA",
      duration: "Jun 2024 - Aug 2024",
      details: [
        "Developed Bash scripts to automate funding source tracking and data rights management, reducing manual processing time by 80%.",
        "Optimized Kubernetes deployments in Minikube, improving overall performance and reliability.",
        "Enhanced stability of a major Java/Scala stack by addressing memory inefficiencies, increasing uptime from 2 hours to over 20 hours."
      ],
    },
  ];

  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="company">{exp.company}</span>
              <span className="duration"> |  {exp.duration}</span>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
