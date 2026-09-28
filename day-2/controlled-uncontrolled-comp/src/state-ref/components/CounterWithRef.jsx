import { useRef, useState } from "react";

function CounterWithRef() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current = countRef.current + 1; // persistent data
    console.log("Ref count :", countRef.current); // for forcing re-renders
  };

  return (
    <div>
      <div>
        <p className="text-2xl">count with ref : {countRef.current}</p>
        <button
          className="bg-purple-500 px-4 py-2 rounded-2xl"
          onClick={increment}
        >
          Increment with Ref
        </button>
      </div>

      <div>
        <p className="text-2xl">count : {renderCount}</p>
        <button
          className="bg-purple-500 px-4 py-2 rounded-2xl"
          onClick={() => setRenderCount(renderCount + 1)}
        >
          Force re-render
        </button>
      </div>
    </div>
  );
}

export default CounterWithRef;
