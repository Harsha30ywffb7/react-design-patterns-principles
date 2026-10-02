import React, { useState } from "react";

const MouseTrackerusingChildren = ({ children }) => {
  const [position, setPostion] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPostion({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div>
      <div className="w-full h-40 border p-2 " onMouseMove={handleMouseMove}>
        {children(position)}
      </div>
    </div>
  );
};

export default MouseTrackerusingChildren;
