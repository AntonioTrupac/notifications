import { Notifications } from "./components";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-light-gray">
      <Notifications className="h-full w-[730px] rounded-2xl bg-white px-4 md:max-h-[840px] md:px-8" />
    </div>
  );
}

export default App;
