import { useState, useEffect } from "react";
import { createClient } from "contentful";

import Clouds from "../templates/clouds/Clouds";
import DriftingClouds from "../templates/clouds/DriftingClouds";
import HeavyRain from "../templates/rain/HeavyRain";
import SplashRain from "../templates/rain/SplashRain";

const SPACE_ID = "jbuh6ffk2dc1";

const ACCESS_TOKEN = "vIgkWsaGQS-aMGClV9awdFmf4JM-3NEL9yqennzrHKA";

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export default function FetchContent() {
  const [entries, setEntries] = useState([]);
  const [urls, setURLs] = useState([]);
  const [url, setURL] = useState("");
  const [pointer, setPointer] = useState(0);
  let index=0;

  useEffect(() => {
    client
      .getEntries()
      .then((response) => setEntries(response.items))
      .catch(console.error);
  }, []);

  useEffect(() => {
    console.log(entries);
    getURL();
  }, [entries]);


  useEffect(() => {
    console.log("Pointer: ",pointer);
    loadImage();
  }, [pointer]);

  useEffect(() => {
    const interval = setInterval(() => {
      
      increment();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function increment(){
  index ++;
    console.log(index);
      if (index >= urls?.length) {
        index=0;
      }
      setPointer(index);
  }

  function loadImage() {
    // console.log('Pointer: ',pointer)
    setURL(urls[pointer]);
    
  }
  
  function getURL() {
    let img = entries[0]?.fields?.defaultImages;

    if (img) {
      for (let key in img) {
        urls.push(img[key].fields.file.url);
        // setURLs(...urls, img[key].fields.file.url);
        console.log(img[key].fields.file.url);
      }
    }
  }

  return (
    <div>
      <HeavyRain url={`https:${url}`} />
    </div>
  );
}
