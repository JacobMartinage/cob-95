import React from "react";
import { MdApps, MdDescription, MdSettings, MdSearch, MdHelp, MdPlayArrow, MdPowerSettingsNew } from "react-icons/md";
import "../cob.css";

export default function StartMenu({ isOpen }) {
  if (!isOpen) return null;

  const menuItems = [
    { label: "Programs", icon: <MdApps /> },
    { label: "Documents", icon: <MdDescription /> },
    { label: "Settings", icon: <MdSettings /> },
    { label: "Find", icon: <MdSearch /> },
    { label: "Help", icon: <MdHelp /> },
    { label: "Run...", icon: <MdPlayArrow /> },
    { label: "Shut Down...", icon: <MdPowerSettingsNew /> },
  ];

  return (
    <div className="start-menu">
      <div className="start-menu-left">
        <span className="start-menu-w95">Cob-95</span>
      </div>
      <ul className="start-menu-items">
        {menuItems.map((item, i) => (
          <li key={i} className="start-menu-item">
            <span className="start-menu-icon">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
