import React from "react";
import "../cob.css";

// Project data
const currentProjects = [
  {
    title: "Second Student",
    date: "Current",
    description:
      "An improved version of Canvas LMS that addresses many pain points by integrating automatic scheduling and smart AI features.",
    link: "https://github.com/jacobmartinage/secondstudent",
    image: "../assets/canvas.png",
    technologies: ["React", "TypeScript", "Tailwind", "Azure", "Supabase", "AI", "Canvas API"],
  },
  {
    title: "School Bus Conversion",
    date: "Current",
    description:
      "Converting a school bus into a camper/RV with a modern interior, 2000W woth of solar panels and 10,000Wh battery storage, and a self-written and designed smart home system built with Arduinos and ESP32s.",
    link: "",
    image: "../assets/bus.jpg",
    technologies: ["School Bus", "Automotive", "Woodworking", "IoT"],
  },
];

const pastProjects = [
  {
    title: "Roomfolio (This Portfolio)",
    date: "Feb 2025",
    description:
      "A Windows 95-themed interactive portfolio showcasing projects, experience, and skills with draggable windows and retro styling.",
    link: "https://github.com/jacobmartinage/roomfolio",
    image: "../assets/roomfolio.png",
    technologies: ["React", "CSS", "Dnd-Kit"],
  },
  {
    title: "SteerClear",
    date: "Feb 2025",
    description:
      "React Native app that won Best Startup Hack at Hackviolet 2025, providing AI-powered safety reports, dynamic routing, and real-time heatmaps.",
    link: "https://github.com/jacobmartinage/steerclear",
    image: "../assets/SteerClear.png",
    technologies: ["React Native", "Supabase", "Nativewind", "JavaScript", "Mapbox"],
  },
  {
    title: "SeeFood",
    date: "Sep 2024",
    description:
      "AI-powered cooking assistant that analyzes fridge contents to suggest recipes, with a Unity-based interface and voice commands.",
    link: "https://github.com/JacobMartinage/SeeFood",
    image: "../assets/seefood.png",
    technologies: ["AR/VR", "Unity", "C#", "Python", "OpenCV", "TensorFlow"],
  },
  {
    title: "Ditch | Hoohacks 2024",
    date: "Mar 2024",
    description:
      "Automated tool that cancels subscription services through AI-driven phone calls, saving users over 500 hours of hold time.",
    link: "https://github.com/ramankc6/ditch",
    image: "../assets/Ditch.png",
    technologies: ["Node.js", "Twilio", "AWS", "ElevenLabs", "Deepgram"],
  },
  {
    title: "Envo | VTHacksX",
    date: "Nov 2022",
    description:
      "AI chatbot predicting car emissions with over 95% accuracy, earning 3rd place in Environmental ML category at VTHacksX.",
    link: "https://github.com/ramankc6/VTHacks2022",
    image: "../assets/envoLogo2.png",
    technologies: ["Python", "AI/ML", "Twilio", "JavaScript"],
  },
  {
    title: "RetroTV PC Conversion",
    date: "Mar 2020",
    description:
      "Converted a retro TV into a modern PC with a working original power button and integrated front monitor, serving as my main computer.",
    link: "",
    image: "../assets/retro-tv.jpg",
    technologies: ["Electronics", "PC Building", "Woodworking"],
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>

      <section className="project-section">
        <h3 className="project-section-title">🚀 Current Projects</h3>
        <div className="projects-grid">
        {currentProjects.map((project, index) => (
          <div key={index} className="project-card">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project-image" />
              </a>
            ) : (
              <img src={project.image} alt={project.title} className="project-image no-link" />
            )}

            <div className="project-content">
              <h4 className="project-title">{project.title}</h4>
              <span className="project-date">{project.date}</span>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        </div>
      </section>

      <section className="project-section">
        <h3 className="project-section-title">📂 Past Projects</h3>
        <div className="projects-grid">
        {pastProjects.map((project, index) => (
          <div key={index} className="project-card">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project-image" />
              </a>
            ) : (
              <img src={project.image} alt={project.title} className="project-image no-link" />
            )}

            <div className="project-content">
              <h4 className="project-title">{project.title}</h4>
              <span className="project-date">{project.date}</span>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        </div>
      </section>
    </div>
  );
}
