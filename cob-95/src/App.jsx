import React, { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import AboutMe from "./apps/AboutMe";
import Experience from "./apps/Experience";
import Projects from "./apps/Projects";
import Chat from "./apps/Chat";
import "./cob.css";

const shortcuts = [
  { appName: "about-me", label: "About Me", icon: "/icons/about.png" },
  { appName: "experience", label: "Experience", icon: "/icons/experiences.png" },
  { appName: "projects", label: "Projects", icon: "/icons/projects.png" },
  { appName: "chat", label: "Chat", icon: "/icons/chat.png" },
];

export default function App() {
  const [windows, setWindows] = useState([]);
  const [topZIndex, setTopZIndex] = useState(100);

  const windowSizes = {
    "about-me": { width: "700px", height: "550px" },
    "experience": { width: "850px", height: "650px" },
    "projects": { width: "1000px", height: "700px" },
    "chat": { width: "600px", height: "400px" },
  };

  function openWindow(appName) {
    setWindows((prev) => {
      // check if the app is already open
      if (prev.some((w) => w.appName === appName)) {
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
            <p>Navigate the desktop by clicking the buttons on the taskbar.</p>
            <ul>
              <li><b>About Me:</b> Learn more about me.</li>
              <li><b>Experience:</b> View my professional history.</li>
              <li><b>Projects:</b> Explore my past and current projects.</li>
              <li><b>Chat:</b> Ask JacobBot questions about me.</li>
            </ul>
            <p>Click the corn icon for a surprise 🌽!</p>
          </div>
        );
      default: return <div>Unknown App: {appName}</div>;
    }
  }

  return (
    <DndContext>
      <Desktop>
        {/* corn  */}
        <img
          src="/corn.png"
          alt="Corn Icon"
          className="corn-icon"
        />

        {/* shortcuts */}
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

        {/* windows */}
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

        {/* taskbar */}
        <Taskbar
          onStartClick={() => alert("Cob-95 Start Menu goes here!")}
          onAboutMeClick={() => openWindow("about-me")}
          onExperienceClick={() => openWindow("experience")}
          onProjectsClick={() => openWindow("projects")}
          onChatClick={() => openWindow("chat")}
        />
      </Desktop>
    </DndContext>
  );
}
