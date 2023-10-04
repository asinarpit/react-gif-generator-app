import logo from "./logo.svg";
import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="bg-[#04364A] w-screen  h-screen flex flex-col items-center gap-20  ">
      <h1 className="text-[#DAFFFB] py-5 text-4xl">GIF Generator App</h1>

      <div className="flex gap-20 w-2/3 h-1/2">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
