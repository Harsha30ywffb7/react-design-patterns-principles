import React, { useState } from "react";

function BikeTracker() {
  const [position, setPostion] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPostion({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div className="w-full h-40 border p-2 " onMouseMove={handleMouseMove}>
      car is at {position.x}, {position.y}
    </div>
  );
}

export default BikeTracker;
