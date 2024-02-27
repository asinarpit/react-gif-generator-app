import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Tag = () => {
    const [tag, setTag] = useState();
    
  const { fetchData, gif, loading } = useGif();
  return (
    <div className="relative md:w-[400px] md:h-[400px] h-[350px] w-[350px] bg-[#64CCC5]  flex flex-col items-center rounded-lg px-2">
      <h2 className="text-2xl text-[#04364A] font-bold py-2">Search GIF</h2>
      {loading ? <Spinner /> : <img src={gif} alt="gif-img" />}

      <div className="absolute bottom-8 w-11/12 flex gap-2">
        <input type="text" 
        className="w-full rounded-lg border-4 border-[#176B87] text-center text-lg"
        placeholder="Enter text"
        value={tag}
        onChange={(event)=>setTag(event.target.value)} />

        <button
          className="w-full bg-[#176B87] hover:bg-[#04364A]  rounded-lg py-2 font-semibold text-lg text-[#DAFFFB]"
          onClick={() => fetchData(tag)}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Tag;
