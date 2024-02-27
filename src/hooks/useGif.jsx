import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSource = data.data.images.fixed_height.url;
    console.log(imgSource);
   
    setGif(imgSource);
    console.log(gif)
    console.log(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchData, gif, loading };
};

export default useGif;
