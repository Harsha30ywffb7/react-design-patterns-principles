import Modal from "./with-patterns/Modal";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setIsopen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} isClose={() => setIsopen(false)}>
        <Modal.Header>
          <h2>Welcome!!!</h2>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the account</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setIsopen(false)}>cancel</button>
          <button onClick={() => alert("user deleted!!1")}>Delete</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
