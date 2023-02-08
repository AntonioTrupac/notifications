import { Notifications } from "./components";

function App() {
  return (
    <div className="m-auto flex h-screen items-center justify-center bg-light-gray">
      <Notifications className="h-full max-h-[840px] w-[730px] overflow-auto rounded-2xl bg-white p-8" />
    </div>
  );
}

export default App;
