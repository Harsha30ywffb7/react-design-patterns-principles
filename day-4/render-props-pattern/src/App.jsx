import BikeTracker from "./messy/BikeTracker";
import CarTracker from "./messy/CarTracker";
import MouseTracker from "./with-pattern/MouseTracker";
import MouseTrackerusingChildren from "./with-pattern/using-children/MouseTrackerusingChildren";
function App() {
  return (
    <div className="flex flex-col items-center">
      {/* <CarTracker />
      <BikeTracker /> */}
      <MouseTracker
        render={(position) => (
          <p>
            Bike at position {position.x}, {position.y}
          </p>
        )}
      />
      <MouseTracker
        render={({ x, y }) => (
          <p>
            car at position {x}, {y}
          </p>
        )}
      />
      <MouseTrackerusingChildren>
        {({ x, y }) => (
          <p>
            car at position {x}, {y} using MouseTrackerusingChildren
          </p>
        )}
      </MouseTrackerusingChildren>
    </div>
  );
}

export default App;
