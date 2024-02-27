import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className=" w-full h-full md:h-screen bg-[#04364A] flex flex-col items-center md:gap-20 gap-10 p-5">
      <h1 className="text-[#DAFFFB] py-5 text-4xl">GIF Generator App</h1>

      <div className="flex flex-col md:flex-row gap-20 m-5">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
