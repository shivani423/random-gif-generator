import React, { useState } from 'react';
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState('car');
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4">
      <h1 className="text-2xl mt-4 underline uppercase font-bold">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt={tag} className="w-full max-w-[450px]" />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg text-center"
        onChange={(e) => setTag(e.target.value)}
        value={tag}
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;