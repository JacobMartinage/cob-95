import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import AboutMe from "./apps/AboutMe";
import Experience from "./apps/Experience";
import Projects from "./apps/Projects";
import Chat from "./apps/Chat";
import "./cob.css";

export default function App() {
  const [windows, setWindows] = useState([]);
  const [topZIndex, setTopZIndex] = useState(100);

  const windowSizes = {
    "about-me": { width: "700px", height: "550px" },
    "experience": { width: "850px", height: "650px" },
    "projects": { width: "900px", height: "500px" },
    "chat": { width: "500px", height: "400px" },
  };

  function openWindow(appName) {
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), appName, zIndex: topZIndex, ...windowSizes[appName] },
    ]);
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

  function getAppContent(appName) {
    switch (appName) {
      case "about-me": return <AboutMe />;
      case "experience": return <Experience />;
      case "projects": return <Projects />;
      case "chat": return <Chat />;
      default: return <div>Unknown App: {appName}</div>;
    }
  }

  return (
    <DndContext>
      <Desktop>
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
