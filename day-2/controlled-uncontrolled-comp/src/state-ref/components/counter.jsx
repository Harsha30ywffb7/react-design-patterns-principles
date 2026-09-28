import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p className="text-2xl">count : {count}</p>
      <button
        className="bg-purple-500 px-4 py-2 rounded-2xl"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
