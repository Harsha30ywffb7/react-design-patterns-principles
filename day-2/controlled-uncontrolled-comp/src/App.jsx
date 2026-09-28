import AutoFocusInput from "./state-ref/components/AutoFocusInput";
import Counter from "./state-ref/components/counter";
import CounterWithRef from "./state-ref/components/CounterWithRef";
import ControlledFeedBackForm from "./controlled/ControlledFeedBackForm";
function App() {
  return (
    <div className="flex flex-col items-center">
      {/* <Counter />
      <AutoFocusInput />
      <CounterWithRef /> */}
      <ControlledFeedBackForm />
    </div>
  );
}

export default App;
