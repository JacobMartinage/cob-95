import React from "react";
import "../cob.css";

// Project data
const projects = [
  {
    title: "Second Student",
    date: "Current",
    description:
      "An improved version of Canvas LMS that addresses many pain points by integrating automatic scheduling and smart AI features.",
    link: "https://github.com/jacobmartinage/secondstudent", // Replace with actual URL
    image: "/second-student.png", // Place images in public/images/
    technologies: ["React", "TypeScript", "Tailwind", "Azure", "Supabase", "AI", "Canvas API"],
  },
  {
    title: "School Bus Conversion",
    date: "Current",
    description:
      "Converting a school bus into a camper/RV with a modern interior, fully functional kitchen, 2000W worth of solar panels and 10000Wh of battery storage, and a self-written and designed smart home system.",
    link: "",
    image: "/images/school-bus-conversion.png",
    technologies: ["School Bus", "Automotive", "Woodworking", "IOT"],
  },
  {
    title: "Roomfolio (This Portfolio)",
    date: "Feb 2025",
    description:
      "A Windows 95-themed interactive portfolio showcasing projects, experience, and skills with draggable windows and retro styling.",
    link: "https://github.com/jacobmartinage/roomfolio",
    image: "/images/roomfolio.png",
    technologies: ["React", "CSS", "Dnd-Kit"],
  },
  {
    title: "SteerClear",
    date: "Feb 2025",
    description:
      "React Native app that won Best Startup Hack at Hackviolet 2025, providing AI-powered safety reports, dynamic routing, and real-time heatmaps.",
    link: "https://github.com/jacobmartinage/steerclear",
    image: "/images/steerclear.png",
    technologies: ["React Native", "Supabase", "Nativewind", "JavaScript", "Mapbox"],
  },
  {
    title: "SeeFood",
    date: "Sep 2024",
    description:
      "An AI-powered cooking assistant that would snap a picture of your fridge and suggest recipes based on what you have. The tool featured a user-friendly interface built in Unity and included a voice command system, allowing users to interact hands-free while cooking.",
    link: "https://github.com/JacobMartinage/SeeFood",
    image: "/seefood.png",
    technologies: ["AR/VR", "Unity", "C#", "Python", "OpenCV", "TensorFlow"],
  },
  {
    title: "Ditch | Hoohacks 2024",
    date: "Mar 2024",
    description:
      "Automated tool that cancels subscription services through AI-driven phone calls, saving users over 500 hours of hold time.",
    link: "https://github.com/yourusername/ditch",
    image: "/images/ditch.png",
    technologies: ["Node.js", "Twilio", "AWS", "ElevenLabs", "Deepgram"],
  },
  {
    title: "Envo | VTHacksX",
    date: "Nov 2022",
    description:
      "AI chatbot predicting carbon emissions of cars with over 95% accuracy, earning 3rd place in Environmental ML category at VTHacksX.",
    link: "https://github.com/yourusername/envo",
    image: "/images/envo.png",
    technologies: ["Python", "AI/ML", "Twilio", "JavaScript"],
  },
  {
    title: "RetroTV PC conversion",
    date: "Mar 2020",
    description:
    "Converted a retro TV I found on the side of the road into a fully functional PC with a modern monitor on the front that I use as my main computer. I even wired the original power button to turn on the PC.",
    link: "",
    image: "/images/retro-tv-conversion.png",
    technologies: ["Electronics", "PC Building", "Woodworking"],
  }
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
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
    </div>
  );
}
