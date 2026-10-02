import React, { useState } from "react";

const MouseTracker = ({ render }) => {
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
        {render(position)}
      </div>
    </div>
  );
};

export default MouseTracker;
