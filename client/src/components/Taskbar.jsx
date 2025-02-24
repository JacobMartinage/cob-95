import React from "react";

export default function Taskbar({
  onStartClick,
  onAboutMeClick,
  onExperienceClick,
  onProjectsClick,
  onChatClick,
}) {
  return (
    <div className="taskbar">
      <button onClick={onStartClick}>Start</button>
      <button onClick={onAboutMeClick}>About Me</button>
      <button onClick={onExperienceClick}>Experience</button>
      <button onClick={onProjectsClick}>Projects</button>
      <button onClick={onChatClick}>Chat</button> 
    </div>
  );
}
