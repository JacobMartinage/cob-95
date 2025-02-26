import React, { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import StartMenu from "./components/StartMenu";
import AboutMe from "./apps/AboutMe";
import Experience from "./apps/Experience";
import Projects from "./apps/Projects";
import Chat from "./apps/Chat";
import corn from "./assets/corn.png";
import about from "./assets/icons/about.png";
import experiences from "./assets/icons/experiences.png";
import projects from "./assets/icons/projects.png";
import chat from "./assets/icons/chat.png";
import "./cob.css";

const shortcuts = [
  { appName: "about-me", label: "About Me", icon: about },
  { appName: "experience", label: "Experience", icon: experiences },
  { appName: "projects", label: "Projects", icon: projects },
  { appName: "chat", label: "Chat", icon: chat },
];

export default function App() {
  const [windows, setWindows] = useState([]);
  const [topZIndex, setTopZIndex] = useState(100);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const windowSizes = {
    "about-me": { width: "700px", height: "550px" },
    "experience": { width: "850px", height: "650px" },
    "projects": { width: "1000px", height: "700px" },
    "chat": { width: "600px", height: "400px" },
  };

  function openWindow(appName) {
    setWindows((prev) => {
      const existingWindow = prev.find((w) => w.appName === appName);
      if (existingWindow) {
        focusWindow(existingWindow.id); // Focus if already open
        return prev;
      }

      return [
        ...prev,
        { id: Date.now(), appName, zIndex: topZIndex, ...windowSizes[appName] },
      ];
    });

    setTopZIndex((z) => z + 1);
  }

  function closeWindow(id) {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }

  function focusWindow(id) {
    setTopZIndex((z) => z + 1);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: topZIndex + 1 } : w))
    );
  }

  useEffect(() => {
    openWindow("welcome");
  }, []);

  function getAppContent(appName) {
    switch (appName) {
      case "about-me": return <AboutMe />;
      case "experience": return <Experience />;
      case "projects": return <Projects />;
      case "chat": return <Chat />;
      case "welcome":
        return (
          <div>
            <h2>Welcome to Cob-95!</h2>
            <p>Navigate using desktop shortcuts or the taskbar.</p>
            <ul>
              <li><b>About Me:</b> Learn more about me.</li>
              <li><b>Experience:</b> View my work history.</li>
              <li><b>Projects:</b> See some of the personal projects I've built.</li>
              <li><b>Chat:</b> Ask JacobBot anything or use some of the pre-written prompts! JacobBot is connected to a GPT instance trained on information about me!</li>
            </ul>
          </div>
        );
      default:
        return <div>Unknown App: {appName}</div>;
    }
  }

  return (
    <DndContext>
      <Desktop>


        {/* 🖥️ Desktop Shortcuts */}
        <div className="desktop-shortcuts">
          {shortcuts.map((shortcut, i) => (
            <div
              key={i}
              className="desktop-shortcut"
              onClick={() => openWindow(shortcut.appName)}
              title={`Open ${shortcut.label}`}
            >
              <img src={shortcut.icon} alt={shortcut.label} />
              <span>{shortcut.label}</span>
            </div>
          ))}
        </div>

        {/* 🪟 Windows */}
        {windows.map((win) => (
          <Window
            key={win.id}
            title={win.appName.replace("-", " ").toUpperCase()}
            onClose={() => closeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            zIndex={win.zIndex}
            width={win.width}
            height={win.height}
          >
            {getAppContent(win.appName)}
          </Window>
        ))}

        {/* 🖱️ Taskbar & Start Menu */}
        <Taskbar
          onStartClick={() => setStartMenuOpen((prev) => !prev)}
          onAboutMeClick={() => openWindow("about-me")}
          onExperienceClick={() => openWindow("experience")}
          onProjectsClick={() => openWindow("projects")}
          onChatClick={() => openWindow("chat")}
        />
        <StartMenu isOpen={startMenuOpen} />
      </Desktop>
    </DndContext>
  );
}
