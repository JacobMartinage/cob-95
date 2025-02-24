import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import "../cob.css";

export default function Window({
  title,
  children,
  onClose,
  onFocus,
  zIndex = 100,
  width = "600px",
  height = "400px",
}) {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleDrag = (e, data) => setPosition({ x: data.x, y: data.y });

  return (
    <Draggable
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
      handle=".window95-header"
    >
      <div
        className="window95"
        style={{ zIndex, width, height }}
        ref={nodeRef}
      >
        <div className="window95-header" onMouseDown={onFocus}>
          <span>{title || "Untitled"}</span>
          <div className="window95-header-button" onClick={onClose}>
            X
          </div>
        </div>
        <div className="window95-body">{children}</div>
      </div>
    </Draggable>
  );
}
