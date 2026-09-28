import React, { useEffect, useRef } from "react";

function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // directly accesses DOM and invoke any DOM functions
  }, []);

  return (
    <div>
      <input
        type="text"
        className="border rounded-2xl p-2 px-3"
        ref={inputRef}
        placeholder="type here..."
      />
    </div>
  );
}

export default AutoFocusInput;
